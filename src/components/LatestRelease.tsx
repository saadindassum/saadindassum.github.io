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
      url: 'https://open.spotify.com/track/7pyQ7LkqA3x1UM9bgyL68E?si=ba7de92bec2140e9',
      service: StreamServ.SPOTIFY
    },
    {
      url: 'https://music.apple.com/us/song/down-by-biscayne-202x/1888960349',
      service: StreamServ.APPLE_MUSIC
    },
    {
      url: 'https://www.youtube.com/watch?v=opxxrirfj7w',
      service: StreamServ.YOUTUBE
    },
    {
      url: 'https://link.deezer.com/s/334Z0rEX5I2MYygG3IqV2',
      service: StreamServ.DEEZER
    },
    {
      url: 'https://music.amazon.com/albums/B0GV97YWGW?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_y655jARX97erFBOEzIfOVmlwf&trackAsin=B0GV9B4116',
      service: StreamServ.AMAZON_MUSIC
    }
  ];

  return (
    <section className="latest-release" id="latest-release">
      <div className="max-width">
        <LinksDisplay
          albumArt="/assets/latest-release.png"
          albumTitle="Down By Biscayne (202X)"
          artistName="Saadin Dassum"
          streamingLinks={streamingLinks}
          sendStreamEvent={sendStreamEvent}
        />
      </div>
    </section>
  );
};

export default LatestRelease;