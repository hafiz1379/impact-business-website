/* eslint-disable */
import React from "react";
import ServiceHeader from "./ServiceHeader";
import ServiceCard from "./ServiceCard";
import ServiceSlider from "./ServiceSlider";

export default function Service() {
  const cardDes =
    "Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop";
  return (
    <>
      <div className="bg-[#F6F6F6] text-center py-10" id="services">
        <ServiceHeader title="Our Services" description={cardDes} />
        <div className="cards w-full mt-10 flex flex-wrap justify-center px-2 lg:px-0">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <ServiceSlider />
      </div>
    </>
  );
}
