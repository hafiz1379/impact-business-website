import Nav from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import hero_img from "../assets/images/hero-img.svg";

function Home() {
  return (
    <>
      <Nav />
      <div className="bg-main w-full py-16 border-2 border-red-500">
        <img className="w-full h-80" src={hero_img} alt="" />
        <div className="border-2 border-yellow-500 flex flex-col text-center py-10">
          <h1 className="text-white text-[48px] font-main">
            Welcome to Impact
          </h1>
          <p className="text-white text-opacity-60 font-default text-p px-10 py-3">
            Sed autem laudantium dolores. Voluptatem itaque ea consequatur
            eveniet. Eum quas beatae cumque eum quaerat.
          </p>
          <div>
            <button className="border border-white border-opacity-30 py-3 px-8 rounded-full bg-white bg-opacity-10 text-white font-500">
              {" "}
              Get Started
            </button>
            <button className="">
              <span>
                <FontAwesomeIcon icon={faCirclePlay} />
              </span>
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
