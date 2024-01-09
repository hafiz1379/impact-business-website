import { IoLocationOutline } from 'react-icons/io5';
import { BsClock, BsPhone } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';

function ContactForm() {
  return (
    <div className="lg:flex-center lg:w-full lg:space-x-0 lg:px-16">
      <div className="bg-main space-y-4 py-4 text-main font-secondary m-4 md:m-12 lg:m-0 rounded-xl lg:w-[30%]">
        <div className="bg-card mx-4 flex p-4 space-x-3 rounded-xl h-24">
          <div className="bg-[#2da074] rounded-[50%] shadow-md flex-center p-1 h-12 w-12 hover:bg-white hover:text-green2 lg:w-16">
            <IoLocationOutline size={25} />
          </div>
          <div>
            <p>
              <span className="font-semibold text-lg">Location:</span>
              <br />
              A108 Adam Street, New York, NY 535022
            </p>
          </div>
        </div>
        <div className="bg-card mx-4 flex p-4 space-x-3 rounded-xl h-24">
          <div className="bg-[#2da074] rounded-[50%] shadow-md flex-center p-1 h-12 w-12 hover:bg-white hover:text-green2">
            <MdOutlineMail size={25} />
          </div>
          <div>
            <p>
              <span className="font-semibold text-lg">Email:</span>
              <br />
              info@example.com
            </p>
          </div>
        </div>
        <div className="bg-card mx-4 flex p-4 space-x-3 rounded-xl h-24">
          <div className="bg-[#2da074] rounded-[50%] shadow-md flex-center p-1 h-12 w-12 hover:bg-white hover:text-green2">
            <BsPhone size={25} />
          </div>
          <div>
            <p>
              <span className="font-semibold text-lg">Call:</span>
              <br />
              +1 5589 55488 55
            </p>
          </div>
        </div>
        <div className="bg-card mx-4 flex p-4 space-x-3 rounded-xl h-24">
          <div className="bg-[#2da074] rounded-[50%] shadow-md flex-center p-1 h-12 w-12 hover:bg-white hover:text-green2">
            <BsClock size={25} />
          </div>
          <div>
            <p>
              <span className="font-semibold text-lg">Open Hours:</span>
              <br />
              Mon-Sat: 11AM - 23PM
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#faf9f9] mx-4 px-8 pt-6 pb-10 space-y-6 md:mx-12 lg:w-[70%]">
        <div className="md:flex-center md:space-x-5 space-y-6">
          <input
            type="text"
            className="w-full h-12 px-3 border rounded-md focus:outline-none focus:border-green-500 md:mt-6"
            placeholder="Your name"
          />
          <input
            type="email"
            className="w-full h-12 mt-2 px-3 border rounded-md focus:outline-none focus:border-green-500"
            placeholder="Your email"
          />
        </div>
        <input
          type="text"
          className="w-full h-12 mt-2 px-3 border rounded-md focus:outline-none focus:border-green-500"
          placeholder="Subject"
        />
        <textarea
          className="w-full h-40 mt-2 px-3 border rounded-md focus:outline-none focus:border-green-500 resize-none"
          placeholder="Your message"
        />
        <button
          type="button"
          className="bg-main text-white rounded-md px-4 py-2 hover:bg-card  "
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
