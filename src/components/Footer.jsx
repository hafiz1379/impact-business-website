import React from 'react';

import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-main text-[#ffffff] py-10 md:px-12">
      <div className="lg:grid lg:grid-cols-3 ">
        <div className="px-4 lg:-mr-10">
          <h2 className="font-main text-h2">Impact</h2>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis eu
            non diam phasellus.
          </p>
          <div>
            <div className="flex py-6">
              <ul className="flex space-x-3 justify-center items-center">
                <li className="bg-main border border-gray-400 rounded-[50%] h-10 w-10 flex justify-center items-center text-gray-300 hover:border-white hover:cursor-pointer duration-700 hover:text-[#ffffff]">
                  <FaTwitter />
                </li>
                <li className="bg-main border border-gray-400 rounded-[50%] h-10 w-10 flex justify-center items-center text-gray-300 hover:border-white hover:cursor-pointer duration-700 hover:text-[#ffffff]">
                  <FaFacebook />
                </li>
                <li className="bg-main border border-gray-400 rounded-[50%] h-10 w-10 flex justify-center items-center text-gray-300 hover:border-white hover:cursor-pointer duration-700 hover:text-[#ffffff]">
                  <FaInstagram />
                </li>
                <li className="bg-main border border-gray-400 rounded-[50%] h-10 w-10 flex justify-center items-center text-gray-300 hover:border-white hover:cursor-pointer duration-700 hover:text-[#ffffff]">
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 px-4 lg:ml-24 lg:space-x-10">
          <div>
            <h3 className="text-[18px] font-bold my-2">Useful Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-main">Home</li>
              <li className="hover:text-main">About us</li>
              <li className="hover:text-main">Services</li>
              <li className="hover:text-main">Terms of service</li>
              <li className="hover:text-main">Privacy policy</li>
            </ul>
          </div>
          <div className="lg:w-60">
            <h3 className="text-[18px] font-bold my-2">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-main">Web Design</li>
              <li className="hover:text-main">Web Development</li>
              <li className="hover:text-main">Product Management</li>
              <li className="hover:text-main">Marketing</li>
              <li className="hover:text-main">Graphic Design</li>
            </ul>
          </div>
        </div>
        <div className="flex-center flex-col text-center md:items-start md:text-start space-y-4 mt-12 lg:mt-0 md:mx-3 lg:ml-28">
          <h3 className="text-[18px] font-bold my-2 ">Contact Us</h3>
          <p>
            A108 Adam Street
            <br />
            {' '}
            New York, NY 535022
            <br />
            {' '}
            United States
          </p>
          <div className="py-4">
            <p>
              <strong>Phone:</strong>
              {' '}
              +1 5589 55488 55
            </p>
            <p>
              <strong>Email:</strong>
              {' '}
              info@example.com
            </p>
          </div>
          <div />
        </div>
      </div>
      <div className="flex-center flex-col text-center my-6">
        <p>
          © Copyright Impact. All Rights Reserved
          {' '}
          <br />
          {' '}
          Designed by
          BootstrapMade
          {' '}
          <br />
          {' '}
          Developed by
          Hafizullah Rasa & Mahram Hossain Nazary
        </p>
      </div>
    </footer>
  );
}

export default Footer;
