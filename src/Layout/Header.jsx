import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import mobilebg from '../assets/contactfront.jpg'
import logo from '../assets/logo_new.png';
import { Drawer, makeStyles } from '@material-ui/core';
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from './MobileMenu';


const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250, 
    backgroundImage: `url(${mobilebg})`,//bg image for drawer
    backgroundSize: 'cover', // Cover the entire area of the drawer
    backgroundPosition: 'center', // Center the image
  },
}));

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsFixed(true);
      } else {
        setIsScrolled(false);
        setIsFixed(false);
      }
    
       
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <header 
    style={{
        backdropFilter: 'blur(9px)',
        background: !isScrolled || !isFixed ? 'transparent' : 'rgba(255,255,255, 0.8)',
        borderBottom: !isScrolled || !isFixed ? '1px solid rgba(0,0,0, 0.15)' : '1px solid rgba(0,0,0, 0.25) ',
        transition: "background 0.5s ease-in-out",
        position: isFixed ? 'fixed' : '', 
        zIndex:100,
        
        boxShadow: ' rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
      }}

      
    
    className=' text-gray-700 p-1 transition-all w-full tracking-widest '>
      <Drawer
        anchor="left" // Set the anchor to the left side
        open={mobileMenu}
        onClose={() => setMobileMenu(false)}
        classes={{
          paper: classes.drawerPaper, // Use the defined styles for the paper
        }}
        //  style={{backgroundColor: 'cyan'}}
        >
          <MobileMenu mobileclick={setMobileMenu}/>

      </Drawer>
      
      
        <div className='w-[80%] max-w-[1200px] mx-auto top-[5%] font-poppins  '>
            <div className='flex justify-between items-center p-5'>
                <div className='flex items-center gap-5'>
                    <img src={logo} alt='hero' width={50} /> 
                    <Link onClick={() => scrollToSection('hero-section')} to='#' className='text-3xl  tracking-widest'>Mathru</Link>
                </div>
                <div className='  gap-5 hidden lg:flex text-base lg:text-lg'>  
                    
                    <Link onClick={() => scrollToSection('about-section')} to='#' className='   transition-all hover:font-semibold hover:scale-105 '>About</Link>
                    {/* <Link onClick={() => scrollToSection('welcome-section')} to='#' className='   transition-all hover:font-semibold hover:scale-105 '>Welcome</Link> */}
                    <Link onClick={() => scrollToSection('services-section')} to='#' className='   transition-all hover:font-semibold hover:scale-105 '>Services</Link>
                    <Link onClick={() => scrollToSection('doctors-section')} to='#' className='   transition-all hover:font-semibold hover:scale-105 '>Doctors</Link>
                    <Link onClick={() => scrollToSection('blog-section')} to='#' className='   transition-all hover:font-semibold hover:scale-105 '>Blog</Link>
                    <Link onClick={() => scrollToSection('contact-section')} to='#' className='   transition-all hover:font-semibold hover:scale-105 '>Contact</Link> 
                </div>

                {/* Mobile icon start */}
                <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full flex lg:hidden justify-center 
                    items-center text-gray-500 bg-gray-300 hover:bg-gray-500 hover:text-gray-200 cursor-pointer   shadow-gray-800 shadow-inner "
                    
                    onClick={() => setMobileMenu(!mobileMenu)}
                    > 
                    
                      {mobileMenu ? (
                          <VscChromeClose
                              className="text-[16px]"
                          />
                      ) : (
                          <BiMenuAltRight
                              className="text-[20px] z-10"
                              // onClick={() => setMobileMenu(true)}
                          />
                      )}
                  </div>
                  {/* Mobile icon end */}


            </div>
        </div>

        
    </header>
  )
}

export default Header