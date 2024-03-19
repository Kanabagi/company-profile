import Image from 'next/image';
import { serviceData } from '@/constants/data';

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center mt-20 gap-y-14 gap-x-20">
      {serviceData.map((service, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex items-center justify-center overflow-hidden h-[100px] w-[100px] bg-blue-700 rounded-full">
            <Image src={service.image} alt={service.title} width={60} height={60} />
          </div>
          <div className="max-w-xs">
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-md">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
