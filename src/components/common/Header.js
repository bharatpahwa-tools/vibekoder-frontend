import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='flex flex-wrap gap-4 justify-between items-center py-6 m-auto px-2 md:lg:px-4 bg-white'>
      <div className='desktop-only-header xl:flex items-center'>
        <div className='flex items-center bg-[#ebffea] rounded-full px-6 py-2 hover:bg-[#beffd4]'>
          <div className='relative'>
            <span className='absolute w-2 h-2 top-[-4px] bg-red-500 rounded-full animate-ping'></span>
            <span className='w-2 h-2 bg-red-500 rounded-full'></span>
          </div>
          <span className='ml-6 text-sm self-center desktop-only font-semibold text-md'>
            Switch to full screen for better experience
          </span>
        </div>
      </div>
      {/* Left Side - Blinking Dot and Text */}
      <div className='flex items-center'>
        <div className='flex items-center bg-[#ebffea] rounded-full px-6 py-2 hover:bg-[#beffd4]'>
          <div className='relative'>
            <span className='absolute w-2 h-2 top-[-4px] bg-red-500 rounded-full animate-ping'></span>
            <span className='w-2 h-2 bg-red-500 rounded-full'></span>
          </div>
          <span className='ml-6 text-sm self-center font-semibold text-md'>
            Available for Work
          </span>
        </div>
      </div>
      {/* Right Side - Email and Social Media Icons */}
      <div className='flex items-center space-x-4'>
        {/* Email Button */}
        <a
          href='mailto:bharatpahwa.work@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center font-semibold bg-[#ebffea] text-black text-sm px-6 py-2 rounded-full hover:bg-[#beffd4]'
        >
          <FaEnvelope className='mr-2' />
          bharatpahwa.work@gmail.com
        </a>
        {/* Social Media Icons */}
        <div className='flex space-x-3'>
          <a
            href='https://github.com/bharatpahwa'
            target='_blank'
            rel='noopener noreferrer'
            className='text-black hover:text-blue-700'
            aria-label='GitHub Profile'
          >
            <FaGithub size={20} />
          </a>
          <a
            href='https://www.linkedin.com/mynetwork/discovery-see-all/?usecase=PEOPLE_FOLLOWS&followMember=bharat-pahwa'
            target='_blank'
            rel='noopener noreferrer'
            className='text-black hover:text-blue-700'
            aria-label='LinkedIn Profile'
          >
            <FaLinkedin size={20} />
          </a>
          {/* Add more icons as needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
