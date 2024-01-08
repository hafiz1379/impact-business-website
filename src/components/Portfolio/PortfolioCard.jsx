/*eslint-disable*/
function PortfolopCard({ img, title, desc }) {
    return (
        <div className="w-full shadow-md rounded-lg ">
          <div className="group overflow-hidden  rounded-t-lg">
            <img src={img} alt="" className="w-full transition-transform transform scale-100 group-hover:scale-110 duration-300 hover:cursor-pointer" />
          </div>
          <div className="p-4">
            <h3 className="text-h3 font-bold">{title}</h3>
            <p className='text-p'>{desc}</p>
          </div>
        </div>
    );
  }
  
  export default PortfolopCard;
  