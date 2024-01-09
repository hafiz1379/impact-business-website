import Nav from '../components/Navbar';
import HomeTitle from '../components/Home/HomeTitle';
import Service from '../components/Service/Service';
import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer';
import Blog from '../components/Blog/Blog';

function Home() {
  return (
    <>
      <Nav />
      <HomeTitle />
      <About />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
