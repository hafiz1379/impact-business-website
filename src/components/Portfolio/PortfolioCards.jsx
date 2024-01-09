import PortfolioCard from './PortfolioCard';
import App1 from '../../assets/images/portfolio/app-1.jpg';
import Product1 from '../../assets/images/portfolio/product-1.jpg';
import Branding1 from '../../assets/images/portfolio/branding-1.jpg';
import Book1 from '../../assets/images/portfolio/books-1.jpg';
import App2 from '../../assets/images/portfolio/app-2.jpg';
import Product2 from '../../assets/images/portfolio/product-2.jpg';
import Branding2 from '../../assets/images/portfolio/branding-2.jpg';
import Book2 from '../../assets/images/portfolio/books-2.jpg';
import App3 from '../../assets/images/portfolio/app-3.jpg';
import Product3 from '../../assets/images/portfolio/product-3.jpg';
import Branding3 from '../../assets/images/portfolio/branding-3.jpg';
import Book3 from '../../assets/images/portfolio/books-3.jpg';

function PortfolioCards() {
  return (
    <div className="px-4 md:px-12 lg:px-16 space-y-2 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PortfolioCard
        img={App1}
        title="App 1"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={Product1}
        title="Product 1"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={Branding1}
        title="Branding 1"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={Book1}
        title="Book 1"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={App2}
        title="App 2"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={Product2}
        title="Product 2"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={Branding2}
        title="Branding 2"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={Book2}
        title="Book 2"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={App3}
        title="App 3"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={Product3}
        title="Product 3"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={Branding3}
        title="Branding 3"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
      <PortfolioCard
        img={Book3}
        title="Book 3"
        desc="Lorem ipsum, dolor sit amet consectetur"
      />
    </div>
  );
}

export default PortfolioCards;
