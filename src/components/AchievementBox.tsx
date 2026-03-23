import React from 'react';
import '../css/AchievementBox.css';

interface AchievementBoxProps {
  text: string;
  imagePath: string;
  orgImage: string;
  imageMaxHeight?: number;
}

const AchievementBox: React.FC<AchievementBoxProps> = ({ text, imagePath, orgImage, imageMaxHeight }) => {
  return (
    <div className='achievement-box-container'>
      <div className='org-image-container'>
        <img className="org-image" src={orgImage} alt={'organization-image'} />
      </div>
      <div className="achievement-box">
        {text}
        <img
          src={imagePath}
          alt={'achievement-image'}
          className="achievement-image"
          style={imageMaxHeight ? { maxHeight: `${imageMaxHeight}px` } : undefined}
        />
      </div>
    </div>
  );
};

export default AchievementBox;