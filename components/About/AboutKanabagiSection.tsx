import Image from 'next/image';
import { Button } from '../ui/button';

const AboutKanabagiSection = () => {
  return (
    <section className="flex flex-row justify-center items-center mt-24 gap-44">
      <div className="object-cover relative" style={{ width: '400px', height: '350px' }}>
        <Image src="/assets/images/room.jpg" alt="room" layout="fill" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold mb-5">
          <span className="text-blue-800">About&nbsp;</span>
          <span>Kanabagi</span>
        </h1>
        <p className="max-w-xl mb-5">
          Kanabagi group is a website development service provider company established in 2021. The websites produced are of course of guaranteed quality. The use of the latest tech stack is one of our advantages in creating a top-class
          website.
        </p>
        <Button className="bg-blue-800 rounded-full h-[54px] mt-4 text-lg px-20 w-32">Learn More</Button>
      </div>
    </section>
  );
};

export default AboutKanabagiSection;
