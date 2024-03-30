import TopFooterContent from './TopFooterContent';

const TopFooter = () => {
  return (
    <div className="flex flex-wrap bg-gray-200 justify-center md:px-8 px-2 pt-8 pb-8 md:pb-20 rounded-b-3xl md:gap-16 xl:gap-28 text-blue-800 -mt-[120px]">
      <TopFooterContent image={'/assets/icons/address.png'} name={'Adress'}>
        <p className='text-[16px] md:text-[18px]'>Office 24 Building, block 112-A</p>
        <p className='text-[16px] md:text-[18px]'>Jl. Kahuripan Kav. 16-19</p>
        <p className='text-[16px] md:text-[18px]'>Tokyo, Japan.</p>
      </TopFooterContent>
      <TopFooterContent image={'/assets/icons/contact.png'} name={'Contact'}>
        <p className='text-[16px] md:text-[18px]'>{'(069)-123-456'}</p>
        <p className='text-[16px] md:text-[18px]'>{'(069)-123-477'}</p>
      </TopFooterContent>
      <TopFooterContent image={'/assets/icons/email1.png'} name={'Email'}>
        <p className='text-[16px] md:text-[18px]'>kanabagigroup@gmail.com</p>
      </TopFooterContent>
    </div>
  );
};

export default TopFooter;
