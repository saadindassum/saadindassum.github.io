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
      url: 'https://open.spotify.com/track/0tqlthRzKIMFXFUqeqjFJU?si=1f822510295a43af',
      service: StreamServ.SPOTIFY
    },
    {
      url: 'https://music.apple.com/us/song/jacoba-guitarras/1860690408',
      service: StreamServ.APPLE_MUSIC
    },
    {
      url: 'https://youtu.be/8ol0PswByFw?si=5LOx1spRN74LN72e',
      service: StreamServ.YOUTUBE
    },
    {
      url: 'https://link.deezer.com/s/327ab7mMOOeRxZNjUs6pI',
      service: StreamServ.DEEZER
    },
    {
      url: 'https://music.amazon.com/albums/B0G6GK125G?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_i7AOyzy5hQ6CH0I0SZtChTo5J&trackAsin=B0G6G8P8FN',
      service: StreamServ.AMAZON_MUSIC
    }
  ];

  return (
    <section className="latest-release" id="latest-release">
      <div className="max-width">
        <LinksDisplay
          albumArt="/assets/latest-release.png"
          albumTitle="Jacoba Guitarras"
          artistName="Saadin Dassum"
          streamingLinks={streamingLinks}
          sendStreamEvent={sendStreamEvent}
        />
      </div>
    </section>
  );
};

export default LatestRelease;