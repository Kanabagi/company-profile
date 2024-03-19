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
    <div className={`bg-cover w-full md:h-[620px] h-[500px]`} style={{ backgroundImage: `url(${image})` }}>
      <div className="md:pl-[200px] md:pt-[180px] px-4 py-36">
        <h1 className="md:text-6xl text-4xl text-blue-800 font-bold mb-4">{title}</h1>
        <h2 className="md:text-4xl text-2xl text-gray-950 max-w-[300px] mb-4">{subtitle}</h2>
        <p className="md:text-md text-base text-gray-950 max-w-[340px]">{desc}</p>
        <Button className="bg-blue-800 rounded-full h-[54px] mt-4 text-lg px-6">{buttondesc}</Button>
      </div>
    </div>
  );
};

export default HeroSection;
