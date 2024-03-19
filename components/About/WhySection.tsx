const WhySection = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-24 mt-32">
        <span className="text-blue-800">Why&nbsp;</span>
        <span>Choose Us?</span>
      </h1>
      <section className="flex flex-col justify-center items-center bg-blue-700">
        <div>
          <div className="flex flex-row items-center justify-center py-12 gap-32">
            <h2 className="max-w-lg text-5xl text-white font-bold leading-snug">Solutions to support your business needs</h2>
            <div className="max-w-lg text-white text-lg">
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
