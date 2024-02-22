import React from 'react';

import ReactPlayer from 'react-player';
import stateImg from '../../assets/images/stats-img.svg';

function AboutStatistics() {
  return (
    <div className="px-4 md:px-12 lg:px-16">
      <div className="lg:flex md:space-x-8">
        <div className="w-full lg:w-[50%]">
          <img src={stateImg} alt="" />
        </div>
        <div className="my-12 space-y-4 md:mt-6 md:space-y-1">
          <div className="flex items-center space-x-5 border-b-2 pb-6">
            <h2 className="text-[38px] font-bold text-green2">232</h2>
            <p className="text-p">
              <strong> Happy Clients</strong>
              consequuntur quae diredo para mesta
            </p>
          </div>
          <div className="flex items-center space-x-5 border-b-2 pb-6">
            <h2 className="text-[38px] font-bold text-green2">521</h2>
            <p className="text-p">
              <strong>Projects</strong>
              adipisci atque cum quia aut
            </p>
          </div>
          <div className="flex items-center space-x-5 border-b-2 pb-6">
            <h2 className="text-[38px] font-bold text-green2">453</h2>
            <p className="text-p">
              <strong>Hours Of Support</strong>
              {' '}
              aut commodi quaerat
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-lg overflow-hidden my-28 w-[100%]">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            controls
            width="100%"
            height={415}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutStatistics;
