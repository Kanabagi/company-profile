import Image from 'next/image';

type TopFooterContentProps = {
  image: string;
  name: string;
  children: React.ReactNode;
};

const TopFooterContent = (props: TopFooterContentProps) => {
  const { image, name, children } = props;
  return (
    <div className="flex flex-row items-start gap-8">
      <div className="lg:h-[80px] lg:w-[80px] md:h-[75px] md:w-[75px] h-[70px] w-[70px] bg-blue-800 rounded-full flex items-center justify-center overflow-hidden">
        <div className="lg:h-[50px] lg:w-[50px] md:h-[45px] md:w-[45px] h-[40px] w-[40px] relative">
          <Image src={image} alt={name} fill sizes="(100vw, 100vh)" className="object-cover" />
        </div>
      </div>
      <div>
        <h3 className="md:text-3xl text-2xl font-bold mb-2">{name}</h3>
        {children}
      </div>
    </div>
  );
};

export default TopFooterContent;
