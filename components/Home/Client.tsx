import Image from 'next/image';

type ClientProps = {
  image: string;
  alt: string;
};

const Client = (props: ClientProps) => {
  const { image, alt } = props;
  return (
    <div className="flex justify-center lg:h-[150px] lg:w-[300px] md:h-[100px] md:w-[250px] h-[50px] w-[140px] relative">
      <Image src={image} alt={alt} fill sizes="(100vw, 100vh)" className="object-fill" />
    </div>
  );
};

export default Client;
