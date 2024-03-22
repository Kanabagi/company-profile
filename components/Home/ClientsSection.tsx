import { clientsData } from '@/constants/data';
import Client from './Client';

const ClientsSection = () => {
  return (
    <div className="flex flex-col mb-[240px] lg:mt-24 mt-14">
      <h1 className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-bold lg:mb-24 mb-14">
        <span className="text-blue-800">Our&nbsp;</span> Clients
      </h1>
      <div className="wrapper flex flex-wrap justify-center lg:gap-20 md:gap-16 gap-10">
        {clientsData.map((client, index) => (
          <Client key={index} image={client.image} alt={client.alt} />
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
