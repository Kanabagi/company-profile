import Image from 'next/image';
import { serviceData } from '@/constants/data';

const Services = () => {
  return (
    <div className="wrapper flex flex-wrap justify-center lg:mt-20 mt-16 gap-y-14 gap-x-20">
      {serviceData.map((service, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex items-center justify-center overflow-hidden lg:h-[100px] lg:w-[100px] h-[80px] w-[80px] bg-blue-800 rounded-full">
            <div className="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] relative">
              <Image src={service.image} alt={service.title} fill sizes="(100vw, 100vh)" className="object-cover" />
            </div>
          </div>
          <div className="lg:max-w-[320px] max-w-[240px]">
            <h3 className="lg:text-xl text-md font-bold">{service.title}</h3>
            <p className="lg:text-md text-sm">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
