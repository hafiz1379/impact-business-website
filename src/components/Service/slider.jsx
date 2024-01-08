import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';

const data = [
  {
    image: '/images/testimonials/testimonials-1.jpg',
    name: 'Placios',
    job: 'Founder',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Possimus dicta provident nostrum, accusamus et aspernatur, illumdolores ad ipsam quos dolorum repellat ipsa. Modi temporibus siteum commodi.',
  },
  {
    image: '/images/testimonials/testimonials-2.jpg',
    name: 'Maria lopez',
    job: 'Founder',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Possimus dicta provident nostrum, accusamus et aspernatur, illumdolores ad ipsam quos dolorum repellat ipsa. Modi temporibus siteum commodi.',
  },
  {
    image: '/images/testimonials/testimonials-3.jpg',
    name: 'Mahda Jafari',
    job: 'Founder',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Possimus dicta provident nostrum, accusamus et aspernatur, illumdolores ad ipsam quos dolorum repellat ipsa. Modi temporibus siteum commodi.',
  },
  {
    image: '/images/testimonials/testimonials-4.jpg',
    name: 'jawad joya',
    job: 'Founder',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Possimus dicta provident nostrum, accusamus et aspernatur, illumdolores ad ipsam quos dolorum repellat ipsa. Modi temporibus siteum commodi.',
  },
  {
    image: '/images/testimonials/testimonials-5.jpg',
    name: 'Qudos jalal',
    job: 'Researcher',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Possimus dicta provident nostrum, accusamus et aspernatur, illumdolores ad ipsam quos dolorum repellat ipsa. Modi temporibus siteum commodi.',
  },
];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-10">
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        {data.map((d) => (
          <div key={d.name} className="border border-gray-400 w-[300px] p-8 shadow-lg rounded-lg">
            <div className="flex justify-start items-center w-full">
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={d.image}
                alt="jan"
              />
              <div className="ml-4 flex flex-col justify-start">
                <h1 className=" text-p font-bold font-main">{d.name}</h1>
                <p className=" font-default pb-2 text-start">{d.job}</p>
                <span className="flex text-yellow-500 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
            <div className="mt-3 text-justify">
              <p>{d.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;