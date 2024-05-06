// Hero.jsx

import React from 'react'; 
import hero from '../assets/hero.png'
import wavy from '../assets/wavy1.png'
import { ReactTyped } from "react-typed";


const Hero = () => {
   

  return (
    <div className='relative ' 
     >
   
    <div
    className='h-[80vh]  relative  flex items-center overflow-hidden rounded-br-[100px] sm:rounded-br-[130px] md:rounded-br-[200px] xl:rounded-br-[300px]'
    style={{ 
      backgroundImage: `url(${hero})`,
      backgroundSize: 'cover',   
    }}
    data-aos="fade-down"
    data-aos-duration="900"
  >
       
    <div className='h-full flex items-center w-full'  style={{ 
          backdropFilter: 'blur(1px)',
          background: `linear-gradient(to bottom right, rgba(25, 167, 206, 0.4) 10%, rgba(0, 139, 139, 0.5)40%, rgba(144, 224, 239, 0.6) 90%)`,
        }}
       >
      {/* Hero Content */}
          <div className='z-10 flex text-gray-100 justify-center lg:p-32 sm:p-20 p-10 mx-auto'>
            <div className='flex md:flex-row flex-col items-center md:gap-44 gap-10 w-full'>
              <div className='flex flex-col items-center font-semibold gap-5  ' 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-anchor-placement="center-bottom" >
                <h1 className='lg:text-8xl md:text-6xl text-5xl tracking-widest font-poppins'>Mathru</h1>

                <ReactTyped
                  strings={[
                    "Welcome to Mathru",
                    
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  attr="placeholder"
                  loop
                >
                  <input
                    className="ml-2 bg-transparent text-white text-xl md:text-2xl"
                    type="text"  
                    disabled 
                  />
                </ReactTyped>

                {/* <ReactTyped
                  startWhenVisible
                  strings={[
                    "If <strong>startWhenVisible</strong> is <strong>true</strong>, We’ll help guide you through every pregnancy possibility.",
                  ]}
                  typeSpeed={40}
                /> */}


                <p className='lg:text-lg md:text-base text-sm font-roboto w-auto md:w-[500px]'> Have questions about Getting Pregnant ?,
                    How to have a Healthy Pregnancy ,
                    How to explore options for an Unplanned Pregnancy?, 
                    We’ll help guide you through every pregnancy possibility.</p>
                <div class="my-5 flex items-center space-x-3"  
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
                >
                  <a href="/" class="w-32 transition duration-300 hover:shadow-lg">
                    <img src="https://kitwind.io/assets/kometa/app-store.png" class="object-cover object-top w-full h-auto mx-auto" alt="" />
                  </a>
                  <a href="/" class="w-32 transition duration-300 hover:shadow-lg">
                    <img src="https://kitwind.io/assets/kometa/google-play.png" class="object-cover object-top w-full h-auto mx-auto" alt="" />
                  </a>
                </div>
              </div>

              {/* <div 
                className='sm:w-2/3  w-full  ' 
        >
                <img src={hero} alt='hero' width={1000} />
                
              </div>  */}
            </div>
          </div>
    
    </div>
      

    </div> 
   
    </div>
    
  );
};

export default Hero;
 