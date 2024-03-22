import { Button } from '../ui/button';

type HeroProps = {
  image: string;
  title: string;
  subtitle: string;
  desc: string;
  buttondesc: string;
};

const HeroSection = (props: HeroProps) => {
  const { image, title, subtitle, desc, buttondesc } = props;
  return (
    <div className={`bg-cover max-md:bg-center w-full md:h-[650px] h-[400px]`} style={{ backgroundImage: `url(${image})` }}>
      <div className="wrapper md:pt-[180px] py-24">
        <h1 className="md:text-6xl text-4xl text-blue-800 font-bold mb-4">{title}</h1>
        <h2 className="md:text-4xl text-2xl text-gray-950 max-w-[300px] mb-4">{subtitle}</h2>
        <p className="md:text-md text-base text-gray-950 max-w-[340px]">{desc}</p>
        <Button className="bg-blue-800 rounded-full h-[54px] mt-4 md:text-lg px-6 hover:bg-blue-900">{buttondesc}</Button>
      </div>
    </div>
  );
};

export default HeroSection;
