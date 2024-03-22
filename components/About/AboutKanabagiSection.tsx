import Image from 'next/image';
import { Button } from '../ui/button';

const AboutKanabagiSection = () => {
  return (
    <section className="wrapper flex md:flex-row flex-col justify-center items-center py-6 md:py-14 xl:gap-44 md:gap-10 gap-6">
      <div className="relative xl:w-[400px] xl:h-[350px] lg:w-[350px] lg:h-[300px] md:w-[300px] md:h-[250px] w-[250px] h-[200px]">
        <Image src="/assets/images/room.jpg" alt="room" fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center lg:justify-start">
        <h1 className="lg:text-5xl md:text-3xl text-center md:text-start text-2xl font-bold mb-5">
          <span className="text-blue-800">About&nbsp;</span>
          <span>Kanabagi</span>
        </h1>
        <p className="max-w-xl mb-5">
          Kanabagi group is a website development service provider company established in 2021. The websites produced are of course of guaranteed quality. The use of the latest tech stack is one of our advantages in creating a top-class
          website.
        </p>
        <Button className="bg-blue-800 hover:bg-blue-900 rounded-full h-[54px] md:mt-4 lg:text-lg text-base lg:px-20 px-10 w-32">Learn More</Button>
      </div>
    </section>
  );
};

export default AboutKanabagiSection;
