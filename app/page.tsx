'use client';

import HeroSection from '@/components/Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { slidesData } from '@/constants/hero';

export default function Home() {
  return (
    <main>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {slidesData.map((slide, id) => (
          <SwiperSlide key={id}>
            <HeroSection {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col">
        <div className="flex justify-around mt-20">
          <div className="group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-[300px] w-[300px]">
              <div className="h-full w-full bg-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" style={{ backgroundImage: 'url(/assets/images/coding.jpg)' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[55%] flex-col items-center justify-center px-2  transition-all duration-500 group-hover:translate-y-[30%]">
              <h1 className="text-3xl font-semibold text-white">Development</h1>
              <p className="mb-3 text-justify text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We provide the highest quality website development services based on the tech stack we use.</p>
            </div>
          </div>
          <div className="group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-[300px] w-[300px]">
              <div className="h-full w-full bg-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" style={{ backgroundImage: 'url(/assets/images/coding.jpg)' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[55%] flex-col items-center justify-center px-2  transition-all duration-500 group-hover:translate-y-[30%]">
              <h1 className="text-3xl font-semibold text-white">Development</h1>
              <p className="mb-3 text-justify text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We provide the highest quality website development services based on the tech stack we use.</p>
            </div>
          </div>
          <div className="group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-[300px] w-[300px]">
              <div className="h-full w-full bg-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" style={{ backgroundImage: 'url(/assets/images/coding.jpg)' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[55%] flex-col items-center justify-center px-2  transition-all duration-500 group-hover:translate-y-[30%]">
              <h1 className="text-3xl font-semibold text-white">Development</h1>
              <p className="mb-3 text-justify text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We provide the highest quality website development services based on the tech stack we use.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center bg-blue-700 pt-[210px] pb-[60px] relative -top-36 -z-50 rounded-t-3xl">
          <div className="max-w-[520px] text-5xl font-bold text-white">Solutions to support your business needs</div>
          <div className="max-w-[360px] text-white">
            Kanabagi specializes in website development, prioritizing high-quality user interfaces. The responsive websites ensure usability across all devices, allowing to access the site conveniently from anywhere, at any time.
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-[240px]">
        <h1 className="flex justify-center text text-5xl font-bold mb-[120px]">
          <span className="text-blue-800">Our&nbsp;</span>
          <span>Clients</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-20">
          <div className="h-[150px] w-[300px] bg-blue-700 rounded-3xl"></div>
          <div className="h-[150px] w-[300px] bg-blue-700 rounded-3xl"></div>
          <div className="h-[150px] w-[300px] bg-blue-700 rounded-3xl"></div>
          <div className="h-[150px] w-[300px] bg-blue-700 rounded-3xl"></div>
          <div className="h-[150px] w-[300px] bg-blue-700 rounded-3xl"></div>
          <div className="h-[150px] w-[300px] bg-blue-700 rounded-3xl"></div>
        </div>
      </div>
    </main>
  );
}
