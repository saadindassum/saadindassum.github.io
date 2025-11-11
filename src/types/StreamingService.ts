export enum StreamServ {
  SPOTIFY = 'spotify',
  APPLE_MUSIC = 'apple_music',
  AMAZON_MUSIC = 'amazon_music',
  TIDAL = 'tidal',
  DEEZER = 'deezer'
}

export interface StreamingLinkData {
  url: string;
  service: StreamServ;
}