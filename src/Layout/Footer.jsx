 
import React from "react"; 
import sarosh from '../assets/aisarosh.png'
import logo from '../assets/logo_new.png';
 
 
const Footer = () => {
    return (
        <footer 
         className="bg-gray-300  text-gray-800 pt-8 pb-3 relative  ">

        <svg 
          className="absolute top-0 w-full h-5 -mt-4  lg:-mt-8 lg:h-8   sm:-mt-6 sm:h-6 text-gray-300  "
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path  
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>


        <div> 

          <div className="flex items-center justify-around pb-8   ">
            <div>
              <img src={logo} alt="" width={100}/>
            </div>
            
            <div className="flex items-center justify-center pb-8 ">  
                <img src={sarosh} alt="" width={100}/>
            </div>
               
          </div>
          <div className="flex items-center justify-center pb-8 "> 
              <p className="text-base font-semibold  ">© 2024 Mathru. All rights reserved</p>
          </div>
        </div>

        

            
        </footer>
    );
};

export default Footer;