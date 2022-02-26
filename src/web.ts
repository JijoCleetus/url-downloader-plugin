import { WebPlugin } from '@capacitor/core';

import type { UrlDownloaderPlugin } from './definitions';

export class UrlDownloaderWeb extends WebPlugin implements UrlDownloaderPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
