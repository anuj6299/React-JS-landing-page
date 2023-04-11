import React from 'react';
// import data
import { features } from '../data';
// import { HiArrowRight } from 'react-icons/hi';

const Feature1 = () => {
  // destructure features
  const { feature1 } = features;
  // destructure feature1
  const { pretitle, title, subtitle, image } = feature1;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='100'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='heading'>{title}</h2>
            <p className='lead'>{subtitle}</p>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-left' data-aos-offset='100'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
