import React from 'react';
import LinksDisplay from './LinksDisplay';
import { StreamServ, StreamingLinkData } from '../types/StreamingService';

const LatestRelease: React.FC = () => {
  // Define streaming links for "Forgot My Name"
  const streamingLinks: StreamingLinkData[] = [
    {
      url: 'https://open.spotify.com/track/37Zf1KF4jlAzZfORWL9JQ4?si=76ff7e88a8b143c5',
      service: StreamServ.SPOTIFY
    },
    {
      url: 'https://music.apple.com/us/artist/saadin-dassum/1469155696',
      service: StreamServ.APPLE_MUSIC
    },
    {
      url: 'https://www.deezer.com/us/album/663442141',
      service: StreamServ.DEEZER
    },
    {
      url: 'https://amazon.fr/music/player/albums/B0DKQPVXZ4?marketplaceId=A13V1IB3VIYZZH&musicTerritory=FR&ref=dm_sh_PJIZdkXfikDHmmJpYCdgAPBkW',
      service: StreamServ.AMAZON_MUSIC
    }
  ];

  return (
    <section className="latest-release" id="latest-release">
      <div className="max-width">
        <LinksDisplay
          albumArt="/assets/latest-release.png"
          albumTitle="Forgot My Name"
          artistName="Saadin Dassum"
          streamingLinks={streamingLinks}
        />
      </div>
    </section>
  );
};

export default LatestRelease;