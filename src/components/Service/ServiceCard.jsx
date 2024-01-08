import { TbActivityHeartbeat } from 'react-icons/tb';
import { GoArrowRight } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

export default function ServiceCard() {
  return (
    <>
      <div className="shadow-md px-8 mb-10 py-12 rounded-lg bg-white flex flex-col items-start justify-start md:ml-6 sm:w-[512px] md:w-[320px] lg:w-[300px] xl:w-[350px]">
        <span className="text-h1 mb-3">
          <TbActivityHeartbeat />
        </span>
        <h1 className="flex flex-col items-start text-h3 font-bold">
          Nesciunt Mete
          <span className=" font-extrabold text-gray-200 -mt-3">
            ━━━━━━━━━━━━━
          </span>
        </h1>
        <p className="text-start font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          possimus quia eligendi magnam doloribus ad ratione veniam id sunt!
        </p>
        <NavLink className="mt-5 flex justify-start items-center text-teal-600">
          See more
          <span className="ml-2 pt-1">
            <GoArrowRight />
          </span>
        </NavLink>
      </div>
    </>
  );
}
