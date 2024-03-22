import Cards from './Cards';

const CardSection = () => {
  return (
    <div className="flex flex-col">
      <Cards />
      <div className="max-md:wrapper gap-[40px] md:gap-0 flex sm:justify-around items-center bg-blue-800 lg:pt-[210px] py-[40px] lg:pb-[60px] lg:rounded-t-3xl h-[300px] md:h-[400px]">
        <div className="lg:max-w-[520px] md:max-w-[320px] max-w-[210px] lg:text-5xl md:text-2xl text-lg font-bold text-white">Solutions to support your business needs</div>
        <div className="lg:max-w-[360px] md:max-w-[220px] max-w-[200px] lg:text-base md:text-sm text-xs text-white">
          Kanabagi specializes in website development, prioritizing high-quality user interfaces. The responsive websites ensure usability across all devices, allowing to access the site conveniently from anywhere, at any time.
        </div>
      </div>
    </div>
  );
};

export default CardSection;
