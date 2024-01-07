import ServiceHeader from './ServiceHeader';
import ServiceCard from './ServiceCard';

export default function Service() {
  return (
    <>
      <div className="bg-[#F6F6F6] text-center py-10">
        <ServiceHeader />
        <div className="cards w-full mt-10 flex flex-wrap justify-center sm:px-2 lg:px-0">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </>
  );
}
