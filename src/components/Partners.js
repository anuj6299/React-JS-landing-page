import React from 'react';
// import data
import { overview } from '../data';

const Partners = () => {
  // destructure overview
  const { partners } = overview;
  return (
    <section className='section' style={{marginTop: 35}}>
        {/* <h2 className='title'></h2> */}
      <div className='container mx-auto'>
        <h2
          className='h2 mb-5 lg:mb-20 text-center'
          data-aos='fade-up'
          data-aos-delay='200'
        >
            Our Partners
          </h2>
        </div>

      <div className='container mx-auto flex lg:flex-row items-center justify-between space-y-1'>
        {/* brands */}
        {partners.map((item, index) => {
          // destructure item
          const { image, delay } = item;
          return (
            <div key={index} data-aos='fade-up' data-aos-delay={delay} style={{margin: 5}}>
              {/* brand img */}
              <img src={image} style={{width: 200}} alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
