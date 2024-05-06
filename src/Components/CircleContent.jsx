import React, { useEffect, useState } from 'react'
import mother from '../assets/circlecontent.jpg'
import BGV from '../assets/fetus.mp4'; // Path to your video file

const CircleContent = (props) => {


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
    <div className="  mx-auto  flex justify-center my-20  relative ">
      


      <div className="card transform transition-transform duration-500   cursor-pointer shadow-gray-600 shadow-lg rounded-full overflow-hidden 
      lg:w-[500px] lg:h-[500px] md:w-[350px] md:h-350px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] ">
        
        
        {/* Video Background */}
      <video autoPlay="autoplay" loop="loop" muted  className='absolute  w-full h-full object-cover rounded-full '>
            <source src={BGV} type="video/mp4" />
        </video>
        {/* Background Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-60 rounded-full"></div> */}
        
        {/* <img className="w-full h-full object-cover" src={mother} alt="Profile" /> */}
        <div className={`card-content absolute text-gray-600 bg-white bg-opacity-60 backdrop-blur-md h-80 pt-[5%] px-5 flex justify-center 
        w-full transition-all duration-1000  bottom-[-250px] md:bottom-[-220px]  lg:bottom-[-200px] ${bottomClass} 
        shadow-inner border-t border-white border-opacity-60`}>
          <h4 className=" tracking-wider text-center transition-transform duration-800 font-medium 
          opacity-100 transform translate-y-0 delay-300 pt-2 
            text-xs sm:text-sm md:text-base   ">
            
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos possimus ad, atque corporis maiores
           sed cum animi reiciendis pariatur a qui nostrum repudiandae quod suscipit veniam necessitatibus assumenda magni magnam.</h4>
        </div>
      </div>
    </div>
  )
}

export default CircleContent