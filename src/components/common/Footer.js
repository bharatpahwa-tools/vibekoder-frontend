import { FaHeart } from 'react-icons/fa';
import Header from './Header';
import ImageMotion from '../common/ImageMotion';
import ChaltaHu from '../../assets/images/ChaltaHu.jpg';

const Footer = ({ id }) => {
  return (
    <footer id={id} className='relative w-full bg-white text-black py-10'>
      <div className='mt-[-4rem]'>
        <Header />
      </div>
      <div className='container mx-auto px-6'>
        <div className='text-center mt-8 mb-6'>
          <ImageMotion ImageSrc={ChaltaHu} />
          <p className='text-lg'>
            Crafted with <FaHeart className='inline-block text-red-500' /> by
            <span className='name'> Bharat Pahwa</span>
          </p>
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-0 flex items-center justify-center opacity-10 pointer-events-none'>
        <span className='whitespace-nowrap mt-4 text-3xl lg:text-9xl text-center font-bold uppercase text-gray-800'>
          Have a Nice Day
        </span>
      </div>
    </footer>
  );
};

export default Footer;
