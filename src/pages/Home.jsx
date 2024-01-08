import Nav from '../components/Navbar';
import HomeTitle from '../components/Home/HomeTitle';
import Service from '../components/Service/Service';
import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About/About';

function Home() {
  return (
    <>
      <Nav />
      <HomeTitle />
      <About />
      <Service />
      <Portfolio />
    </>
  );
}

export default Home;
