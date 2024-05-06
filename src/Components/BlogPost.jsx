import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import mother from '../assets/circlecontent.jpg'
import blog1 from '../assets/blog1.png'
import BGV from '../assets/fetus.mp4'; // Path to your video file
import { LiaAngleDoubleUpSolid } from "react-icons/lia";

const BlogPost = ( ) => {
  
  // for different hover bottom margin in text area
  const [bottomClass, setBottomClass] = useState('bottom-[-80px]');

  useEffect(() => {
    const setResponsiveClass = () => {
      if (window.innerWidth >= 1024) {
        setBottomClass('lg:hover:bottom-[-50px]');
      } else if (window.innerWidth >= 768) {
        setBottomClass('md:hover:bottom-[-80px]');
      } else {
        setBottomClass('hover:bottom-[-130px]');
      }
    };

    setResponsiveClass();
    window.addEventListener('resize', setResponsiveClass);

    return () => {
      window.removeEventListener('resize', setResponsiveClass);
    };
  }, []);

    return (
         
      <div className="  mx-auto  flex justify-center my-20  relative  ">
      


      <div className="card transform transition-transform duration-500   cursor-pointer shadow-gray-600 shadow-lg rounded-full overflow-hidden 
      lg:w-[500px] lg:h-[500px] md:w-[350px] md:h-350px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] ">
        
        
        {/* Video Background */}
        {/* <video autoPlay="autoplay" loop="loop" muted  className='absolute  w-full h-full object-cover rounded-full '>
            <source src={BGV} type="video/mp4" />
        </video> */}
        {/* Background Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-60 rounded-full"></div> */}
        
        <div className=' '>
          <img src={blog1} alt='' height={100} />
        </div>
        
        {/* <img className="w-full h-full object-cover" src={mother} alt="Profile" /> */}
        <div className={`card-content absolute text-gray-600 bg-white bg-opacity-60 backdrop-blur-md h-80   px-5 flex justify-center 
        w-full transition-all duration-1000  bottom-[-250px] md:bottom-[-180px]  lg:bottom-[-180px] ${bottomClass} 
        shadow-inner border-t border-white border-opacity-60 flex flex-col items-center justify-start`}>
          <div className='text-xl '>
            <LiaAngleDoubleUpSolid />
           </div>
          <h2 className=''> Ai sarosh </h2>
          <h4 className=" tracking-wider text-center transition-transform duration-800 font-medium 
          opacity-100 transform translate-y-0 delay-300  
            text-xs sm:text-sm md:text-base   ">
            
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos possimus ad, atque corporis maiores
            </h4>
        </div>
      </div>
    </div>
    );
  };
  

export default BlogPost