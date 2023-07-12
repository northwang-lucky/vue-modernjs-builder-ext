import * as fs from 'fs';
import * as path from 'path';
import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';

export const builderPluginCleanUseless = (): BuilderPlugin => ({
  name: 'plugin-clean-useless',
  setup: api => {
    api.onBeforeBuild(() => {
      fs.rmSync(path.resolve(__dirname, '../dist/route.json'));
    });
  },
});
