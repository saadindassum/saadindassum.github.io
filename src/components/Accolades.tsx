import React from 'react';
import '../css/Accolades.css';
import AchievementBox from './AchievementBox';

const Accolades: React.FC = () => {
    const ac1Text: string = "The recording academy featured Dassum's music video 'Glasgow Lady' at the 2020 Grammy U Conference.";
    const ac1Path: string = "/assets/resume-assets/dance-transparent.png";
    const org1: string = "/assets/resume-assets/recording-academy.png";

    const ac2Text: string = "Judges selected Dassum's animated music video 'Tomorrow' at the 39th annual Miami Film Festival.";
    const ac2Path: string = "/assets/resume-assets/key-stevie-sled.png";
    const org2: string = "assets/resume-assets/mff-logo.webp";

    const ac3Text: string = "'The Mercy of the Moon' was an official selection at the Subculture Film Festival, a festival by veterans of the Miami Film Festival.";
    const ac3Path: string = "assets/resume-assets/mercy-cassette.webp";
    const org3: string = "assets/resume-assets/subculture-logo-white.webp";

    return (
        <section id="accolades">
            <div className='max-width hook-text'>
                So? Who likes this guy anyway?
            </div>
            <div className="achievements-container">
                <AchievementBox text={ac1Text} imagePath={ac1Path} orgImage={org1} />
                <AchievementBox text={ac2Text} imagePath={ac2Path} orgImage={org2} />
                <AchievementBox text={ac3Text} imagePath={ac3Path} orgImage={org3} imageMaxHeight={175} />
            </div>

        </section>
    );
};

export default Accolades;