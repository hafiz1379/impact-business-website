import PortfolioCards from './PortfolioCards';
import PortfolioHeader from './PortfolioHeader';

function Portfolio() {
  return (
    <div className="md:pt-0">
      <PortfolioHeader />
      <PortfolioCards />
    </div>
  );
}

export default Portfolio;
