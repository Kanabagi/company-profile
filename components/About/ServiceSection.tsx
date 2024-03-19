import Services from './Services';

const ServiceSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-5xl font-bold mb-8">
          <span className="text-blue-800">Our&nbsp;</span>
          <span>Latest Service</span>
        </h1>
        <p className="text-xl max-w-[720px] text-center">WE CREATE INSTALATIONS WITH SOUL, MOBILE EXPERIENCE WITH HEART. OUR TECH IS DEVELOPED WITH PURPOSE, STRATEGY, AND FLAWLESS CREATIVE</p>
      </div>
      <Services />
    </section>
  );
};

export default ServiceSection;
