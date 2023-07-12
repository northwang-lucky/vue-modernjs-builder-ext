import * as path from 'path';
import { defineConfig } from '@modern-js/builder-cli';
import { builderPluginVue } from '@modern-js/builder-plugin-vue';
import { builderPluginBuildManifest } from './plugins/build-manifest';
import { builderPluginCleanUseless } from './plugins/clean-useless';
import { getEntries } from './shared/entries-config';

const { entries, templates } = getEntries();

export default defineConfig({
  builderPlugins: [builderPluginVue(), builderPluginBuildManifest(), builderPluginCleanUseless()],
  source: {
    entries,
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  html: {
    disableHtmlFolder: true,
    templateByEntries: templates,
  },
  output: {
    distPath: {
      html: 'pages',
      css: 'css',
      js: 'js',
    },
    copy: [
      {
        from: path.resolve(__dirname, './public'),
        to: path.resolve(__dirname, './dist'),
      },
    ],
    polyfill: 'usage',
    disableSourceMap: true,
    disableFilenameHash: true,
  },
  performance: {
    chunkSplit: {
      strategy: 'all-in-one',
    },
  },
  tools: {
    webpack: (config, { HtmlWebpackPlugin, mergeConfig }) => {
      config.plugins = (config.plugins ?? []).filter(plugin => {
        if (!(plugin instanceof HtmlWebpackPlugin)) {
          return plugin;
        }
        return Object.keys(templates).includes(plugin.userOptions.chunks?.[0] || '');
      });
      return mergeConfig(config, { optimization: { runtimeChunk: false } });
    },
  },
});
