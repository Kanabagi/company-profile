import { techData } from '@/constants/data';
import TechStack from './TechStack';

const TechStackSection = () => {
  return (
    <section className="flex flex-row justify-center items-center mt-24 gap-8">
      {techData.map((tech, index) => (
        <TechStack key={index} image={tech.image} alt={tech.alt} desc={tech.desc} />
      ))}
    </section>
  );
};

export default TechStackSection;
