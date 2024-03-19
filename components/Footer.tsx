import TopFooter from './Footer/TopFooter';
import MiddleFooter from './Footer/MiddleFooter';
import BottomFooter from './Footer/BottomFooter';

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center bg-blue-800">
        <div className="flex flex-col">
          <TopFooter />
          <MiddleFooter />
        </div>
      </div>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
