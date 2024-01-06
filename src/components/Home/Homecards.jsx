import { IoTvSharp, IoCallOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';

function Homecards() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center px-4 md:flex-row md:flex-wrap md:px-0">
        <div className=" bg-card flex flex-col mb-10 items-center justify-center h-[250px] w-full sm:w-[512px] md:w-[300px] mx-5 rounded-xl lg:w-[450px] xl:w-[260px] shadow-md xl:absolute xl:top-[540px] xl:left-[35px]">
          <span className="block text-center text-h1 text-white text-opacity-50 font-bold">
            <IoTvSharp />
          </span>
          <h1 className="text-h2 text-white">Lorem ipsum </h1>
        </div>
        <div className=" bg-card flex flex-col mb-10 items-center justify-center h-[250px] w-full sm:w-[512px] md:w-[300px] mx-5 rounded-xl lg:w-[450px] xl:w-[260px] shadow-md xl:absolute xl:top-[540px] xl:left-[330px]">
          <span className="block text-center text-h1 text-white text-opacity-50 font-bold">
            <CiLocationOn />
          </span>
          <h1 className="text-h2 text-white">Lorem ipsum </h1>
        </div>
        <div className=" bg-card flex flex-col mb-10 items-center justify-center h-[250px] w-full sm:w-[512px] md:w-[300px] mx-5 rounded-xl lg:w-[450px] xl:w-[260px] shadow-md xl:absolute xl:top-[540px] xl:left-[625px]">
          <span className="block text-center text-h1 text-white text-opacity-50 font-bold">
            <MdOutlineEmail />
          </span>
          <h1 className="text-h2 text-white">Lorem ipsum </h1>
        </div>
        <div className=" bg-card flex flex-col mb-10 items-center justify-center h-[250px] w-full sm:w-[512px] md:w-[300px] mx-5 rounded-xl lg:w-[450px] xl:w-[260px] shadow-md xl:absolute xl:top-[540px] xl:left-[920px]">
          <span className="block text-center text-h1 text-white text-opacity-50 font-bold">
            <IoCallOutline />
          </span>
          <h1 className="text-h2 text-white">Lorem ipsum </h1>
        </div>
      </div>
    </>
  );
}

export default Homecards;
