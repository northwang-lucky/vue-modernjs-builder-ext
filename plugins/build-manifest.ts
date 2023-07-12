import * as path from 'path';
import * as fs from 'fs';
import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';
import manifest from '../src/manifest';
import colorLog from '../shared/logger';

const outDir = path.resolve(__dirname, '..', 'public');

export const builderPluginBuildManifest = (): BuilderPlugin => ({
  name: 'plugin-build-manifest',
  setup: api => {
    api.onBeforeBuild(() => {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }
      const manifestPath = path.resolve(outDir, 'manifest.json');
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      colorLog(`📋 Manifest file copy complete: ${manifestPath}\n`, 'FgYellow');
    });
  },
});
