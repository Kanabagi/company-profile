import Image from 'next/image';

type TechStackProps = {
  image: string;
  alt: string;
  desc: string;
};

const TechStack = (props: TechStackProps) => {
  const { image, alt, desc } = props;
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="object-cover relative" style={{ width: '100px', height: '100px' }}>
        <Image src={image} alt={alt} layout="fill" />
      </div>
      <p className="max-w-[280px]">{desc}</p>
    </div>
  );
};

export default TechStack;
