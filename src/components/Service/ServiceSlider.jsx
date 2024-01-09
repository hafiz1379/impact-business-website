import ServiceHeader from './ServiceHeader';
import CardSlider from './slider';

function ServiceSlider() {
  const TestimonialsDes = 'Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam';
  return (
    <>
      <div className="bg-white py-10">
        <ServiceHeader title="Testimonials" description={TestimonialsDes} />
        <CardSlider />
      </div>
    </>
  );
}

export default ServiceSlider;
