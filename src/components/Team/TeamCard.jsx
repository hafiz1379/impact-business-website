/*eslint-disable*/
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function TeamCard({name, position, image}) {
  return (
    <>
      <div className="border border-gray-300 p-6 w-full xl:mx-2 shadow-lg rounded-xl mt-6">
        <img
          className="w-full rounded-lg"
          src={image}
          alt="alina"
        />
        <h1 className=" font-main text-h3 mt-4 text-center">{name}</h1>
        <p className=" font-secondary italic text-[#6c757d] tracking-tighter text-center">
          {position}
        </p>
        <div className=" w-full flex justify-evenly mt-4 text-[20px] text-[#6c757d]">
          <div className="p-2 border border-gray-500 rounded-full">
            <FaTwitter />
          </div>
          <div className="p-2 border border-gray-500 rounded-full">
            <FaFacebook />
          </div>
          <div className="p-2 border border-gray-500 rounded-full">
            <FaInstagram />
          </div>
          <div className="p-2 border border-gray-500 rounded-full">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </>
  );
}
export default TeamCard;
