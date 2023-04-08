import React from 'react';
// import data
import { overview } from '../data';

const Brands = () => {
  // destructure overview
  const { brands } = overview;
  return (
    <section className='section'>
        {/* <h2 className='title'></h2> */}
      <div className='container mx-auto'>
        <h2
          className='h2 mb-10 lg:mb-20 text-center'
          data-aos='fade-up'
          data-aos-delay='200'
        >
            Supported & Trusted By
          </h2>
        </div>

      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-1'>
        {/* brands */}
        {brands.map((item, index) => {
          // destructure item
          const { image, delay } = item;
          return (
            <div key={index} data-aos='fade-up' data-aos-delay={delay}>
              {/* brand img */}
              <img src={image} style={{width: 130}} alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
