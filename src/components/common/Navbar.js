import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='pb-10 w-fit self-center m-auto rounded-full sticky bottom-0 z-50 mb-10'>
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className='relative mx-auto flex w-fit rounded-full shadow border-black bg-white p-1'
    >
      <Tab setPosition={setPosition} section='home'>
        Home
      </Tab>
      <Tab setPosition={setPosition} section='experience'>
        Experience
      </Tab>
      <Tab setPosition={setPosition} section='projects'>
        Projects
      </Tab>{' '}
      <div className='desktop-only-header'>
        <Tab setPosition={setPosition} section='achievements'>
          Achievements
        </Tab>
      </div>
      <Tab setPosition={setPosition} section='chat'>
        Chat
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, section }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById(section);
      if (!sectionElement || !ref.current) return;

      const rect = sectionElement.getBoundingClientRect();
      const isInView =
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2;

      if (isInView) {
        document
          .querySelectorAll('.nav-item')
          .forEach((item) => item.classList.remove('active'));
        ref.current.classList.add('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [section]);

  const handleClick = () => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={handleClick}
      className='nav-item relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base'
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      initial={false}
      className='absolute z-0 h-7 rounded-full bg-black opacity-50 md:h-12'
    />
  );
};

export default Navbar;
