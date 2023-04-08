import React from 'react';
// import data
import { product } from '../data';
// import components
import Cards from './Cards';

const Product = () => {
  // destructure product data
  const { title, subtitle } = product;
  return (
    <section >
      <div className='container mx-auto'>
        {/* title & subtitle */}
        <div className='flex flex-col items-center lg:flex-row'>
          <h2
            className='section-title'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='100'
          >
            {title}
          </h2>
          <p
            className='lead lg:max-w-[450px]'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='500'
          >
            {subtitle}
          </p>
        </div>
        {/* cards */}
        <Cards />
      </div>
    </section>
  );
};

export default Product;
