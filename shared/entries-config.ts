import * as path from 'path';

export type Entry = {
  entry: string;
  template: string;
};

const entriesConfig: Record<string, Entry> = {
  content: {
    entry: path.resolve(__dirname, '../src/pages/content/main.ts'),
    template: '',
  },
  popup: {
    entry: path.resolve(__dirname, '../src/pages/popup/main.ts'),
    template: path.resolve(__dirname, '../src/pages/popup/index.html'),
  },
};

export const getEntries = () => {
  const entryNames = Object.keys(entriesConfig);
  const entries: Record<string, string[]> = {};
  const templates: Record<string, string> = {};
  entryNames.forEach(name => {
    const entryConfig = entriesConfig[name];
    if (entryConfig.entry) {
      entries[name] = [entryConfig.entry];
    }
    if (entryConfig.template) {
      templates[name] = entryConfig.template;
    }
  });
  return { entries, templates };
};
