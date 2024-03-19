import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center bg-blue-800">
        <div className="flex flex-col">
          <div className="flex flex-wrap bg-gray-200 px-8 pt-8 pb-20 rounded-b-3xl gap-28 text-blue-800 -mt-[120px]">
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
          <div className="flex flex-wrap justify-between pt-6 items-center pb-4">
            <div>
              <Image src="/assets/images/logo-white.png" alt="sample" width={300} height={300} />
            </div>
            <div>
              <p className="text-white max-w-[700px] font-thin">
                Kanabagi is a leading website development company committed to creating exceptional online experiences. They specialize in crafting dynamic and user-friendly websites customized for each client. Their expert team employs the
                latest technologies to deliver captivating solutions that drive results.
              </p>
              <div className="flex gap-6 mt-2">
                <Image src="/assets/icons/facebook.png" alt="sample" width={30} height={30} />
                <Image src="/assets/icons/instagram.png" alt="sample" width={30} height={30} />
                <Image src="/assets/icons/twitter.png" alt="sample" width={30} height={30} />
                <Image src="/assets/icons/linkedin.png" alt="sample" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-indigo-950 text-white font-thin">© 2024 Kanabagi. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
