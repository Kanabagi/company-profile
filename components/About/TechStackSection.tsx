import { techData } from '@/constants/data';
import TechStack from './TechStack';

const TechStackSection = () => {
  return (
    <section className="flex flex-wrap justify-center items-center lg:mt-24 mt-16 gap-8">
      {techData.map((tech, index) => (
        <TechStack key={index} image={tech.image} alt={tech.alt} desc={tech.desc} />
      ))}
    </section>
  );
};

export default TechStackSection;
