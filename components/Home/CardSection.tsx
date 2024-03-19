import Cards from './Cards';

const CardSection = () => {
  return (
    <div className="flex flex-col">
      <Cards />
      <div className="flex justify-around items-center bg-blue-700 pt-[210px] pb-[60px] rounded-t-3xl">
        <div className="max-w-[520px] text-5xl font-bold text-white">Solutions to support your business needs</div>
        <div className="max-w-[360px] text-white">
          Kanabagi specializes in website development, prioritizing high-quality user interfaces. The responsive websites ensure usability across all devices, allowing to access the site conveniently from anywhere, at any time.
        </div>
      </div>
    </div>
  );
};

export default CardSection;
