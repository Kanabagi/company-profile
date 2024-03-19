import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <div className="mb-56">
      <section className="bg-hero bg-cover bg-center w-full h-[150px] md:h-[200px] flex items-center">
        <span className="wrapper font-bold text-blue-800 text-[24px] sm:text-[30px] md:text-[40px]">Company Profile</span>
      </section>
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
      <section className="flex flex-row justify-center items-center mt-24 gap-8">
        <div className="flex flex-row items-center gap-4">
          <div className="object-cover relative" style={{ width: '100px', height: '100px' }}>
            <Image src="/assets/icons/nextjs.png" alt="next" layout="fill" />
          </div>
          <p className="max-w-[280px]">Next.js is a flexible React framework that gives you building blocks tocreate fast, full-stack webapplications</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="object-cover relative bg-white rounded-full" style={{ width: '100px', height: '100px' }}>
            <Image src="/assets/icons/ts.svg" alt="typescript" layout="fill" style={{ borderRadius: '50%' }} />
          </div>
          <p className="max-w-[280px]">TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="object-cover relative bg-white rounded-full" style={{ width: '100px', height: '100px' }}>
            <Image src="/assets/icons/tailwind.jpg" alt="tailwind" layout="fill" style={{ borderRadius: '50%' }} />
          </div>
          <p className="max-w-[280px]">Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes</p>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="text-5xl font-bold mb-8">
            <span className="text-blue-800">Our&nbsp;</span>
            <span>Latest Service</span>
          </h1>
          <p className="text-xl max-w-[720px] text-center">WE CREATE INSTALATIONS WITH SOUL, MOBILE EXPERIENCE WITH HEART. OUR TECH IS DEVELOPED WITH PURPOSE, STRATEGY, AND FLAWLESS CREATIVE</p>
        </div>
        <div className="flex flex-wrap justify-center mt-20 gap-y-14 gap-x-20">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center overflow-hidden h-[100px] w-[100px] bg-blue-700 rounded-full">
              <Image src="/assets/icons/www.png" alt="next" width={60} height={60} />
            </div>
            <div className="max-w-xs">
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-md">We provide custom website design & development, whenever you need a personal website, corporate website, product catalog or online store we here to help</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center overflow-hidden h-[100px] w-[100px] bg-blue-700 rounded-full">
              <Image src="/assets/icons/design.png" alt="next" width={60} height={60} />
            </div>
            <div className="max-w-xs">
              <h3 className="text-xl font-bold">UI/UX Development</h3>
              <p className="text-md">We create digital product, web design, and branding</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center overflow-hidden h-[100px] w-[100px] bg-blue-700 rounded-full">
              <Image src="/assets/icons/api.png" alt="next" width={60} height={60} />
            </div>
            <div className="max-w-xs">
              <h3 className="text-xl font-bold">API Development</h3>
              <p className="text-md">We have been providing top-quality API development</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center overflow-hidden h-[100px] w-[100px] bg-blue-700 rounded-full">
              <Image src="/assets/icons/brain.png" alt="next" width={60} height={60} />
            </div>
            <div className="max-w-xs">
              <h3 className="text-xl font-bold">Human Resource</h3>
              <p className="text-md">We provide outsourcing personnel who have high skills for any development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
