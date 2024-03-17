import { Button } from './ui/button';

type HeroProps = {
  bgimage: string;
  title: string;
  subtitle: string;
  desc: string;
  buttondesc: string;
};

const HeroSection = (props: HeroProps) => {
  const { bgimage, title, subtitle, desc, buttondesc } = props;
  return (
    <div className={`bg-cover w-full h-[620px]`} style={{ backgroundImage: `url(${bgimage})` }}>
      <div className="pl-[200px] pt-[180px]">
        <h1 className="text-6xl text-blue-800 font-bold mb-4">{title}</h1>
        <h2 className="text-4xl text-gray-950 max-w-[300px] mb-4">{subtitle}</h2>
        <p className="text-md text-gray-950 max-w-[340px]">{desc}</p>
        <Button className="bg-blue-800 rounded-full h-[54px] mt-4 text-lg px-6">{buttondesc}</Button>
      </div>
    </div>
  );
};

export default HeroSection;
