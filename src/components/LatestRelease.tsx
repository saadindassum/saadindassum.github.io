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
      url: 'https://open.spotify.com/track/38drRz6qZVXak0nwhP6Y9L?si=f620ad3d8b514c85',
      service: StreamServ.SPOTIFY
    },
    {
      url: 'https://music.apple.com/us/song/te-quiero-amar-i-want-you-back/1854516896',
      service: StreamServ.APPLE_MUSIC
    },
    {
      url: 'https://youtu.be/X2rL7HdtJl8?si=DWPo8xZ0iJ8l93GA',
      service: StreamServ.YOUTUBE
    },
    {
      url: 'https://link.deezer.com/s/31RbFtAzy33cizHNkEsJY',
      service: StreamServ.DEEZER
    },
    {
      url: 'https://music.amazon.com/albums/B0G2HM9TG2?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_q42fdCBowhNZUWsLeULPOJ3as&trackAsin=B0G2HPVWNC',
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