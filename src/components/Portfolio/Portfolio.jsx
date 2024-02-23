import React from 'react';

import PortfolioCards from './PortfolioCards';
import PortfolioHeader from './PortfolioHeader';

function Portfolio() {
  return (
    <div className="bg-[#f6f6f6] py-14" id="portfolio">
      <PortfolioHeader />
      <PortfolioCards />
    </div>
  );
}

export default Portfolio;
