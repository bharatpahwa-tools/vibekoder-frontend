import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import HeroSection from '../landingPage/home/HeroSection';
import TechStack from '../landingPage/experience/TechStack';
import Experience from '../landingPage/experience/Experience';
import ProjectsRef from '../landingPage/projects/ProjectsRef';
import Achievements from '../landingPage/achievements/Achievements';
import Certifications from '../landingPage/certifications/Certifications';
import Education from '../landingPage/education/Education';
import Contact from '../landingPage/contact/Contact';
import { Analytics } from '@vercel/analytics/react';

const Layout = () => {
  const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        scroller.scrollTo(hash, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -70, 
        });
      }
    }, [location]);

    return null;
  };

  return (
    <>
      <Header />
      <HeroSection id='home' />
      <TechStack id='techstack' />
      <Experience id='experience' />
      <ProjectsRef id='projects' />
      <Achievements id='achievements' />
      <Certifications id='certifications' />
      <Education id='education' />
      <Contact id='chat' />
      <Footer id='contact' />
      <Navbar />
      <ScrollToSection />
      <Analytics />
    </>
  );
};

export default Layout;
