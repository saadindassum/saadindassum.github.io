import React from 'react';
import { StreamServ } from '../types/StreamingService';

interface StreamingLinkProps {
  url: string;
  service: StreamServ;
  sendStreamEvent?: () => void;
}

const StreamingLink: React.FC<StreamingLinkProps> = ({ url, service, sendStreamEvent }) => {
  const getServiceConfig = (service: StreamServ) => {
    switch (service) {
      case StreamServ.SPOTIFY:
        return {
          icon: 'fa-brands fa-spotify',
          name: 'Spotify',
          color: '#7bfea9ff'
        };
      case StreamServ.APPLE_MUSIC:
        return {
          icon: 'fa-brands fa-apple',
          name: 'Apple Music',
          color: '#f87282ff'
        };
      case StreamServ.AMAZON_MUSIC:
        return {
          icon: 'fa-brands fa-amazon',
          name: 'Amazon Music',
          color: '#59cff7ff'
        };
      case StreamServ.TIDAL:
        return {
          icon: 'fa-solid fa-wave-square', // Using a generic icon since Tidal brand icon may not be available
          name: 'Tidal',
          color: '#000000'
        };
      case StreamServ.DEEZER:
        return {
          icon: 'fa-brands fa-deezer',
          name: 'Deezer',
          color: '#FEAA2D'
        };
      case StreamServ.YOUTUBE:
        return {
          icon: 'fa-brands fa-youtube',
          name: 'YouTube',
          color: '#fa3333ff'
        };
      default:
        return {
          icon: 'fa-solid fa-music',
          name: 'Stream',
          color: '#fabf00'
        };
    }
  };

  const config = getServiceConfig(service);

  const handleClick = () => {
    if (sendStreamEvent) {
      sendStreamEvent();
    }
    window.open(url, '_blank');
  };

  return (
    <div className="streaming-link" onClick={handleClick} data-service={service}>
      <div className="streaming-icon-container">
        <i className={`${config.icon} streaming-icon`} style={{ color: config.color }}></i>
      </div>
      <span className="streaming-name">{config.name}</span>
    </div>
  );
};

export default StreamingLink;