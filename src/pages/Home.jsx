import Nav from "../components/Navbar";
import hero_img from "../assets/images/hero-img.svg";

function Home() {
  return (
    <>
      <Nav />
      <div className="bg-main w-full py-16 border-2 border-red-500">
        <img className="w-full h-80" src={hero_img} alt="" />
        <div></div>
      </div>
    </>
  );
}

export default Home;
