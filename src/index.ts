import { registerPlugin } from '@capacitor/core';

import type { UrlDownloaderPlugin } from './definitions';

const UrlDownloader = registerPlugin<UrlDownloaderPlugin>('UrlDownloader', {
  web: () => import('./web').then(m => new m.UrlDownloaderWeb()),
});

export * from './definitions';
export { UrlDownloader };
