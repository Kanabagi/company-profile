import Image from 'next/image';

type TechStackProps = {
  image: string;
  alt: string;
  desc: string;
};

const TechStack = (props: TechStackProps) => {
  const { image, alt, desc } = props;
  return (
    <div className="flex flex-row items-start gap-4">
      <div className="relative lg:h-[100px] lg:w-[100px] md:h-[90px] md:w-[90px] h-[80px] w-[80px] rounded-full overflow-hidden">
        <Image src={image} alt={alt} fill className="object-cover" sizes="(100vw, 100vh)" />
      </div>
      <p className="lg:max-w-[280px] md:max-w-[250px] max-w-[220px]">{desc}</p>
    </div>
  );
};

export default TechStack;
