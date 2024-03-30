import HeroSection from '@/components/Home/Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { slidesData } from '@/constants/data';

import 'swiper/css';
import 'swiper/css/navigation';

const SwiperSection = () => {
  return (
    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 5000, disableOnInteraction: false }} navigation={true} modules={[Autoplay, Navigation]} className="mySwiper md:mb-24">
      {slidesData.map((slide, id) => (
        <SwiperSlide key={id} className=''>
          <HeroSection {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSection;
