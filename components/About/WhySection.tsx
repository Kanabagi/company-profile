const WhySection = () => {
  return (
    <>
      <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center lg:mb-24 mb-16 lg:mt-32 mt-24">
        <span className="text-blue-800">Why&nbsp;</span>
        <span>Choose Us?</span>
      </h1>
      <section className="flex flex-col justify-center items-center bg-blue-700">
        <div className="wrapper">
          <div className="flex lg:flex-row flex-col items-center justify-center py-12 lg:gap-32 gap-10">
            <h2 className="max-w-lg lg:text-5xl md:text-3xl text-2xl text-white font-bold leading-snug text-center lg:text-start">Solutions to support your business needs</h2>
            <div className="max-w-lg text-white lg:text-lg text-base px-2 lg:px-0">
              <p className="mb-4">
                Kanabagi specializes in website development, prioritizing high-quality user interfaces. The responsive websites ensure usability across all devices, allowing to access the site conveniently from anywhere, at any time.
              </p>
              <p>We use NextJS, Typescript, and Tailwind CSS in developing websites. These three tech stacks are the flagship for now.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySection;
