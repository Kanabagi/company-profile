import Cards from './Cards';

const CardSection = () => {
  return (
    <div className="flex flex-col">
      <Cards />
      <div className="flex justify-around items-center bg-blue-700 lg:pt-[210px] pt-[40px] lg:pb-[60px] pb-[40px] lg:rounded-t-3xl">
        <div className="lg:max-w-[520px] md:max-w-[320px] max-w-[210px] lg:text-5xl md:text-2xl text-lg font-bold text-white">Solutions to support your business needs</div>
        <div className="lg:max-w-[360px] md:max-w-[220px] max-w-[140px] lg:text-base md:text-sm text-xs text-white">
          Kanabagi specializes in website development, prioritizing high-quality user interfaces. The responsive websites ensure usability across all devices, allowing to access the site conveniently from anywhere, at any time.
        </div>
      </div>
    </div>
  );
};

export default CardSection;
