import React, { useState, useEffect } from 'react';
import side from './images/56.png';
import side_2 from './images/57.png';
import side_3 from './images/58.png';
import { Link } from 'react-router-dom';

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [side_2, side, side_3];
  const contents = [
    { title: 'Dubai Mainland', description: 'Dubai mainland companies offer unrestricted access the local market, no currency restrictions, flexible office locations, no minimum capital requirement, opportunities for government contracts, a wide range of business activities, ability to trade locally and internationally, and in some sector, 100% ownership without a local partner.' },
    { title: 'UAE Freezone', description: 'UAE Freezone companies offer 100% foreign ownership, tax- free environment, simplified setup procedures, full repatriation of capital and profits, modern infrastructure strategic locations, and access to a diverse talent pool.' },
    { title: 'Dubai Freezone', description: 'Dubai freezone companies offer 100% foreign ownership, tax exemptions, simplified import/export procedures, full repatriation of profits and capital, modern infrastructure, and str- ategic locations with access to global markets.' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      {images.map((img, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`} style={{ transitionDelay: `${index === currentSlide ? '0s' : '0.5s'}` }}>
          <img src={img} alt={`Slide ${index}`} />
          <div className="slide-content">
            {index < 3 && (
              <>
                <h2 className="text-white font-bold mb-5">{contents[index].title}</h2>
                <p>{contents[index].description}</p>
                <div className="buttons">
                  <div className='mt-5'>
                    <Link to={index === 0 ? "/mainland" :  index === 1? "/freezone" :  "/freezone" }>
                      <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white border border-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-white rounded-lg shadow md:inline">
                        {index === 0 ? "Learn More..." : index === 1? "Learn More..." : "Learn More..."}
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Herosection;
