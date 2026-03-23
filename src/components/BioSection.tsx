import React from 'react';
import '../css/BioSection.css';

const BioSection: React.FC = () => {
    return (
        <section id="bio">
            <div className='max-width'>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;From the mysterious land of the Andes mountains rises the face of
                    the next generation of rock and roll. He sounds like everything
                    you've ever loved, yet like nothing you've ever heard before.
                    An artist that knows no bounds.<br /><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Nostalgic mad scientist, dreamer of the day. His name?<br /><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Saadin Dassum.<br /><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;The Ecuadorian-born Miami-based artist has his sights set on "Rock in Spanglish", a
                    tale of redemption narrated by a retired latin lover known only as "The Man of a Million
                    Mistakes".<br /><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Rock in Spanglish explores the acoustics of the latin pop and merengue that molded
                    Dassum's childhood experience in Ecuador, and marries those sounds with the pop rock
                    edge that he has honed throughout his musical career.
                </p>
            </div>
        </section>
    );
};

export default BioSection;