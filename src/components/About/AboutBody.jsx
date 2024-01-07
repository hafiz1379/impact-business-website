import { IoCheckmarkCircle } from 'react-icons/io5';
import ReactPlayer from 'react-player';
import About from '../../assets/images/about.jpg';

function AboutBody() {
  return (
    <div className="px-4 sm:px-16 lg:flex lg:space-x-20">
      <div className="md:w-full">
        <h2 className="text-[#222222] font-secondary text-[28px] font-extrabold tracking-tight md:tracking-tighter">
          Voluptatem dignissimos provident quasi corporis
        </h2>
        <img src={About} alt="" className="my-3 rounded-xl" />
        <p className="md:tracking-normal">
          Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod
          nisi et. Placeat debitis quia recusandae odit et consequatur
          voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
        </p>
        <br />
        <p className="md:tracking-wide">
          Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
          cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus
          et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis
          tempore doloribus debitis explicabo similique sit. Accusantium sed ut
          omnis beatae neque deleniti repellendus.
        </p>
      </div>
      <div className="mt-9 sm:mt-12 w-full lg:mt-1 ">
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <br />
        <ul className="space-y-3 text-p font-default ">
          <li className="flex">
            <IoCheckmarkCircle className="text-green2" size={25} />
            <span className="ml-2">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </li>
          <li className="flex">
            <IoCheckmarkCircle className="text-green2" size={25} />
            <span className="ml-2">
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </span>
          </li>
          <li className="flex">
            <IoCheckmarkCircle className="text-green2" size={25} />
            <span className="ml-2">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </li>
        </ul>
        <br />
        <p className="tracking-wide">
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
        </p>
        <div className="rounded-lg overflow-hidden my-10 w-[100%]">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            controls
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
