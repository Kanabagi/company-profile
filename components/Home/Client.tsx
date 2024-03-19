import Image from 'next/image';

type ClientProps = {
  image: string;
  alt: string;
};

const Client = (props: ClientProps) => {
  const { image, alt } = props;
  return (
    <div style={{ width: '300px', height: '150px', position: 'relative' }} className="flex justify-center">
      <Image src={image} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
};

export default Client;
