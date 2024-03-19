import TopFooterContent from './TopFooterContent';

const TopFooter = () => {
  return (
    <div className="flex flex-wrap bg-gray-200 md:px-8 px-2 pt-8 pb-8 md:pb-20 rounded-b-3xl md:gap-28 gap-10 text-blue-800 -mt-[120px]">
      <TopFooterContent image={'/assets/icons/address.png'} name={'Adress'}>
        <p>Office 24 Building, block 112-A</p>
        <p>Jl. Kahuripan Kav. 16-19</p>
        <p>Tokyo, Japan.</p>
      </TopFooterContent>
      <TopFooterContent image={'/assets/icons/contact.png'} name={'Contact'}>
        <p>{'(069)-123-456'}</p>
        <p>{'(069)-123-477'}</p>
      </TopFooterContent>
      <TopFooterContent image={'/assets/icons/email1.png'} name={'Email'}>
        <p>kanabagigroup@gmail.com</p>
      </TopFooterContent>
    </div>
  );
};

export default TopFooter;
