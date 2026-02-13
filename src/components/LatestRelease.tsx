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
      url: 'https://open.spotify.com/track/49rZPCGErA7wAWowyF1C5V?si=583fcf77785b4b39',
      service: StreamServ.SPOTIFY
    },
    {
      url: 'https://music.apple.com/us/album/3-6-coraz%C3%B3n-elevado-al-sexto/1872828353?i=1872828356',
      service: StreamServ.APPLE_MUSIC
    },
    {
      url: 'https://www.youtube.com/watch?v=QF52xvBrpoA&list=RDQF52xvBrpoA',
      service: StreamServ.YOUTUBE
    },
    {
      url: 'https://link.deezer.com/s/32r5EOQAPy6tM9JwtFS5W',
      service: StreamServ.DEEZER
    },
    {
      url: 'https://music.amazon.com/albums/B0GK5ZD9C8?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_NAx2UUyLCqnKe1Spi81L5dUxe&trackAsin=B0GK6KHKD7',
      service: StreamServ.AMAZON_MUSIC
    }
  ];

  return (
    <section className="latest-release" id="latest-release">
      <div className="max-width">
        <LinksDisplay
          albumArt="/assets/latest-release.png"
          albumTitle="<3^6 (Corazón elevado al sexto)"
          artistName="Saadin Dassum"
          streamingLinks={streamingLinks}
          sendStreamEvent={sendStreamEvent}
        />
      </div>
    </section>
  );
};

export default LatestRelease;