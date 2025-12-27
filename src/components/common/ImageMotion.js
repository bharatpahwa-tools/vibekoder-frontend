import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const MotionImage = ({ ImageSrc }) => {
  return (
    <section className='h-full w-full'>
      <div className=''>
        <Link imgSrc={ImageSrc} />
      </div>
    </section>
  );
};

const Link = ({ imgSrc }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      initial='initial'
      whileHover='whileHover'
      className='group relative flex items-center transition-colors duration-500'
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: 'spring',
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className='relative z-10 block transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl'
        ></motion.span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          initial: { scale: 0, rotate: '-12.5deg' },
          whileHover: { scale: 1, rotate: '12.5deg' },
        }}
        transition={{ type: 'spring' }}
        src={imgSrc}
        className='absolute z-10 h-80 w-32 rounded-lg object-cover md:h-64 md:w-64'
        alt={`Image representing a meme`}
      />

      <motion.div
        variants={{
          initial: {
            x: '25%',
            opacity: 0.5,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{ type: 'spring' }}
        className='relative z-10 p-4'
      ></motion.div>
    </motion.a>
  );
};

export default MotionImage;
