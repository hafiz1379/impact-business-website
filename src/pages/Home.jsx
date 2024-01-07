import Nav from '../components/Navbar';
import HomeTitle from '../components/Home/HomeTitle';
import AboutHeader from '../components/About/AboutHeader';
import AboutBody from '../components/About/AboutBody';
import ClientLogos from '../components/About/ClientLogos';
import AboutStatistics from '../components/About/AboutStatistics';

function Home() {
  return (
    <>
      <Nav />
      <HomeTitle />
      <AboutHeader />
      <AboutBody />
      <ClientLogos />
      <AboutStatistics />
    </>
  );
}

export default Home;
