import image1 from '../../assets/images/clients/client-1.png';
import image2 from '../../assets/images/clients/client-2.png';
import image3 from '../../assets/images/clients/client-3.png';
import image4 from '../../assets/images/clients/client-4.png';
import image5 from '../../assets/images/clients/client-5.png';
import image6 from '../../assets/images/clients/client-6.png';
// import image7 from '../../assets/images/clients/client-7.png';
// import image8 from '../../assets/images/clients/client-8.png';

function ClientLogos() {
  return (
    <div className="flex w-[100%] my-32">
      {/* Mobile */}
      <div className="md:hidden flex justify-between w-full px-4 ">
        <img src={image1} alt="" className="mb-2 h-16" />
        <img src={image2} alt="" className="mb-2 h-16" />
      </div>

      {/* Tablet */}
      <div className="lg:hidden hidden md:flex md:px-12 justify-between w-full">
        <img src={image1} alt="" className="mb-2 h-16" />
        <img src={image2} alt="" className="mb-2 h-16" />
        <img src={image3} alt="" className="mb-2 h-16" />
        <img src={image4} alt="" className="mb-2 h-16" />
      </div>

      {/* PC */}
      <div className="hidden lg:flex  lg:px-16 justify-between w-full">
        <img src={image1} alt="" className="mb-2 h-10" />
        <img src={image2} alt="" className="mb-2 h-10" />
        <img src={image3} alt="" className="mb-2 h-10" />
        <img src={image4} alt="" className="mb-2 h-10" />
        <img src={image5} alt="" className="mb-2 h-10" />
        <img src={image6} alt="" className="mb-2 h-10" />
      </div>
    </div>
  );
}

export default ClientLogos;
