import Services from './Services';

const ServiceSection = () => {
  return (
    <section>
      <div className="wrapper flex flex-col items-center text-center justify-center lg:mt-32 mt-24">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-8">
          <span className="text-blue-800">Our&nbsp;</span>
          <span>Latest Service</span>
        </h1>
        <p className="text-base lg:text-xl max-w-[720px] text-center">WE CREATE INSTALATIONS WITH SOUL, MOBILE EXPERIENCE WITH HEART. OUR TECH IS DEVELOPED WITH PURPOSE, STRATEGY, AND FLAWLESS CREATIVE</p>
      </div>
      <Services />
    </section>
  );
};

export default ServiceSection;
