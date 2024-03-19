import { clientsData } from '@/constants/data';
import Client from './Client';

const ClientsSection = () => {
  return (
    <div className="flex flex-col mb-[240px] mt-24">
      <h1 className="flex justify-center text-5xl font-bold mb-24">
        <span className="text-blue-800">Our&nbsp;</span> Clients
      </h1>
      <div className="flex flex-wrap justify-center gap-20">
        {clientsData.map((client, index) => (
          <Client key={index} image={client.image} alt={client.alt} />
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
