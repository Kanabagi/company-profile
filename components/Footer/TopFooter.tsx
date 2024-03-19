import Image from 'next/image';

const TopFooter = () => {
  return (
    <div className="flex flex-wrap bg-gray-200 md:px-8 px-2 pt-8 pb-8 md:pb-20 rounded-b-3xl md:gap-28 gap-10 text-blue-800 -mt-[120px]">
      <div className="flex flex-row items-start gap-8">
        <div className="h-[80px] w-[80px] bg-blue-800 rounded-full flex items-center justify-center overflow-hidden">
          <Image src="/assets/icons/address.png" alt="sample" width={50} height={50} />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-2">Address</h3>
          <p className="">Office 24 Building, block 112-A</p>
          <p>Jl. Kahuripan Kav. 16-19</p>
          <p>Tokyo, Japan.</p>
        </div>
      </div>
      <div className="flex flex-row items-start gap-8">
        <div className="h-[80px] w-[80px] bg-blue-800 rounded-full flex items-center justify-center overflow-hidden">
          <Image src="/assets/icons/contact.png" alt="sample" width={50} height={50} />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-2">Contact</h3>
          <p>{'(069)-123-456'}</p>
          <p>{'(069)-123-477'}</p>
        </div>
      </div>
      <div className="flex flex-row items-start gap-8">
        <div className="h-[80px] w-[80px] bg-blue-800 rounded-full flex items-center justify-center overflow-hidden">
          <Image src="/assets/icons/email1.png" alt="sample" width={50} height={50} />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-2">Email</h3>
          <p>kanabagigroup@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
