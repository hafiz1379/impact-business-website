/* eslint-disable */
import React from 'react';

function BlogCard({ img1, job, desc, img2, name, date }) {
  return (
    <div className=" rounded-lg shadow-md space-y-4">
      <div>
        <img src={img1} alt=""  className="rounded-t-lg" />
      </div>
      <div className="px-6 space-y-2">
        <h4 className="text-[#555555] text-p">{job}</h4>
        <p className="text-[22px] font-700 leading-6">{desc}</p>
        <div className="flex py-6 space-x-4">
          <div>
            <img src={img2} alt="" className="h-12 rounded-3xl" />
          </div>
          <div>
            <h4 className="text-p font-secondary">{name}</h4>
            <span className="text-[14px] font-default text-[#3c3c3c] ">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
