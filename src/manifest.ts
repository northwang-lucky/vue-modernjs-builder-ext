import type { Manifest } from 'webextension-polyfill';
import { version, description, displayName } from '../package.json';

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: displayName,
  version,
  description,
  // options_ui: {
  //   page: 'pages/options.html',
  // },
  // background: {
  //   service_worker: "js/background.js",
  //   type: "module",
  // },
  action: {
    default_title: 'Popup',
    default_popup: 'pages/popup.html',
    default_icon: 'icon/d-32.png',
  },
  // chrome_url_overrides: {
  //   newtab: "pages/newtab.html",
  // },
  icons: {
    '16': 'icon/d-16.png',
    '32': 'icon/d-32.png',
    '48': 'icon/d-48.png',
    '128': 'icon/d-128.png',
  },
  permissions: ['activeTab'],
  content_scripts: [
    {
      css: ['css/content.css'],
      js: ['js/content.js'],
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['/css/*', '/js/*', '/pages/*'],
      matches: ['<all_urls>'],
    },
  ],
};

export default manifest;
