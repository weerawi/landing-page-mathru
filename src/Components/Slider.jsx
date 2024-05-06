import React, { useState, useRef, useEffect } from 'react';
import ProfileCard from './ProfileCard';

const names = ["Tharindu", "Samitha", "Ajinstha", "Tharindu", "Samitha", "Ajinstha", "Tharindu"];

const Slider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(scrollRef.current.scrollLeft);
  };

  useEffect(() => {
    if (scrollPosition >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [scrollPosition]);

  return (
    <>
      <div id="doctors-section" className='py-5 bg-gray-300'>
        <div className='flex items-center justify-center'>
          <div className='py-5'>
            <h1 className='font-bold tracking-widest lg:text-3xl Sm:text-2xl text-xl uppercase text-gray-700'>Our Specialised Team</h1>
          </div>
        </div>

        <div 
          className='w-full flex flex-row overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'
          onScroll={handleScroll}
          ref={scrollRef}
        >
          {names.map((name, index) => (
            <ProfileCard key={index} name={name}/>
          ))}
        </div>
      </div>
      {/* ... */}
    </>
  );
};

export default Slider;