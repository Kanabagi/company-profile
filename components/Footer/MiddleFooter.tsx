import Image from 'next/image';
import Link from 'next/link';

const MiddleFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between pt-6 items-center pb-4">
      <div className="pb-4 lg:pb-0">
        <Image src="/assets/images/logo-white.png" alt="sample" width={300} height={300} />
      </div>
      <div className="pb-4 lg:pb-0">
        <p className="text-white md:max-w-[700px] max-w-[300px] font-thin pb-4 lg:pb-0">
          Kanabagi is a leading website development company committed to creating exceptional online experiences. They specialize in crafting dynamic and user-friendly websites customized for each client. Their expert team employs the
          latest technologies to deliver captivating solutions that drive results.
        </p>
        <div className="flex justify-center lg:justify-normal gap-6 mt-2">
          <Link href={'https://pornhub.com'} target="_blank">
            <Image src="/assets/icons/facebook.png" alt="sample" width={30} height={30} className="cursor-pointer transition duration-300 ease-in-out hover:scale-110" />
          </Link>
          <Link href={'https://pornhub.com'} target="_blank">
            <Image src="/assets/icons/instagram.png" alt="sample" width={30} height={30} className="cursor-pointer transition duration-300 ease-in-out hover:scale-110" />
          </Link>
          <Link href={'https://pornhub.com'} target="_blank">
            <Image src="/assets/icons/twitter.png" alt="sample" width={30} height={30} className="cursor-pointer transition duration-300 ease-in-out hover:scale-110" />
          </Link>
          <Link href={'https://pornhub.com'} target="_blank">
            <Image src="/assets/icons/linkedin.png" alt="sample" width={30} height={30} className="cursor-pointer transition duration-300 ease-in-out hover:scale-110" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
