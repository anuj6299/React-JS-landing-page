import React from 'react';
// import data
import { hero } from '../data';
// import icons
// import { HiArrowRight } from 'react-icons/hi';
// import ArrowRightImg from '../assets/img/features/arrow-right.svg';
// import GooglePlayIcon from '../assets/img/copyright/googleplay.svg';

const Hero = () => {
  // destructure hero data
  const { title, subtitle, image } = hero;
  return (
    <section className='min-h-[850px]'>
      <div className='container mx-auto min-h-[850px] flex justify-center items-center'>
        <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <h1
              className='title mb-2 lg:mb-5'
              data-aos='fade-down'
              data-aos-delay='200'
            >
              {title}
            </h1>
            <p
              className='lead mb-5 lg:mb-10'
              data-aos='fade-down'
              data-aos-delay='300'
            >
              {subtitle}
            </p>
            {/* btn & comp text */}
            <div
              className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
              data-aos='fade-down'
              data-aos-delay='300'
            >
            </div>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-up' data-aos-delay='600' data-aos-offset='0'>
            {/* <img src={image} alt='' /> */}
            <video loop="true" autoplay="autoplay" muted>
              <source src={image} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
