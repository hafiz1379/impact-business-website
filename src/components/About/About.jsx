import React from 'react';
import AboutBody from './AboutBody';
import AboutHeader from './AboutHeader';
import AboutStatistics from './AboutStatistics';
import ClientLogos from './ClientLogos';

function About() {
  return (
    <div className="lg:mt-60" id="about">
      <AboutHeader />
      <AboutBody />
      <ClientLogos />
      <AboutStatistics />
    </div>
  );
}

export default About;
