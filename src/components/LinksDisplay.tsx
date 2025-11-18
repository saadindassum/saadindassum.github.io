import React from 'react';
import StreamingLink from './StreamingLink';
import { StreamingLinkData } from '../types/StreamingService';

interface LinksDisplayProps {
  albumArt: string;
  albumTitle: string;
  artistName: string;
  streamingLinks: StreamingLinkData[];
}

const LinksDisplay: React.FC<LinksDisplayProps> = ({
  albumArt,
  albumTitle,
  artistName,
  streamingLinks
}) => {
  return (
    <div className="links-display-container">
      <div className="links-display-card">
        <div className="album-info">
          <picture>
            <source media="(min-width: 768px)" srcSet="/assets/latest-release-large.webp" type="image/webp" />
            <source srcSet="/assets/latest-release.webp" type="image/webp" />
            <img src={albumArt} alt={`${albumTitle} Album Artwork`} className="album-artwork" />
          </picture>
          <div className="album-details">
            <h3 className="album-title">{albumTitle}</h3>
            <p className="artist-name">{artistName}</p>
          </div>
        </div>
        <div className="streaming-links-container">
          {streamingLinks.map((link, index) => (
            <StreamingLink
              key={index}
              url={link.url}
              service={link.service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksDisplay;