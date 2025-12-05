import React from 'react';
import LinksDisplay from './LinksDisplay';
import { StreamServ, StreamingLinkData } from '../types/StreamingService';

interface LatestReleaseProps {
  sendStreamEvent?: () => void;
}

const LatestRelease: React.FC<LatestReleaseProps> = ({ sendStreamEvent }) => {
  // Define streaming links for "Forgot My Name"
  const streamingLinks: StreamingLinkData[] = [
    {
      url: 'https://open.spotify.com/track/7DThWCfZmHCXk4ULwMDAzm?si=d0732b37554444b4',
      service: StreamServ.SPOTIFY
    },
    {
      url: 'https://music.apple.com/us/song/m%C3%A1s-de-lo-que-debo/1847073695',
      service: StreamServ.APPLE_MUSIC
    },
    {
      url: 'https://youtu.be/3Gtzsn1ngIc?si=DM6dIsi3OF6lsd9v',
      service: StreamServ.YOUTUBE
    },
    {
      url: 'https://link.deezer.com/s/31BdW23VCt2I2i6C4Dta3',
      service: StreamServ.DEEZER
    },
    {
      url: 'https://music.amazon.ca/albums/B0FWKVCQFM?marketplaceId=A2EUQ1WTGCTBG2&musicTerritory=CA&ref=dm_sh_odpqXUbLaxhWYzDqqGnV8rXDL',
      service: StreamServ.AMAZON_MUSIC
    }
  ];

  return (
    <section className="latest-release" id="latest-release">
      <div className="max-width">
        <LinksDisplay
          albumArt="/assets/latest-release.png"
          albumTitle="Más de lo que debo"
          artistName="Saadin Dassum"
          streamingLinks={streamingLinks}
          sendStreamEvent={sendStreamEvent}
        />
      </div>
    </section>
  );
};

export default LatestRelease;