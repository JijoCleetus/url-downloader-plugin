export interface UrlDownloaderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
