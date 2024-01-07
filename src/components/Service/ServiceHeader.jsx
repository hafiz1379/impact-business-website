import ServiceCard from './ServiceCard';

export default function ServiceHeader() {
  return (
    <>
      <div className="flex flex-col justify-evenly items-center h-44">
        <h1 className="text-h2 font-main">Our Services</h1>
        <span className="-mt-10 text-green2 text-h2">━━━</span>
        <p className="px-10 md:px-10">
          Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
          incidunt dolores placeat sunt id nobis omnis tiledo stran delop
        </p>
      </div>
      <div className="cards w-full mt-10 flex flex-wrap justify-center sm:px-2 lg:px-0">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </>
  );
}
