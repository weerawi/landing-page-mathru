import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_new.png';

const MobileMenu = ({ mobileclick }) => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };


  return (
    <div className='text-gray-300 h-full'
    style={{
        backdropFilter: 'blur(3px)',
        background: 'rgba(0,0,0, 0.1)' ,
      }}>
        <div className='w-[80%] max-w-[1200px] mx-auto'>
            <div className='flex flex-col items-center p-5'>
                <div className='flex items-center mb-16 p-2 rounded-2xl '  
                style={{
                    backdropFilter: 'blur(3px)',
                    background: 'rgba(255,255,255, 0.5)' ,
                  }}
                  >
                    <img src={logo} alt='hero' width={50} />
                    <Link to='/' className='text-2xl font-poppins tracking-widest ' onClick={() => {scrollToSection('hero-section');
                 mobileclick(false);
                 }}>Mathru</Link> 
                </div>
                <div className='flex flex-col space-y-10 font-poppins '> 
                    <Link onClick={() => {scrollToSection('about-section');
                 mobileclick(false);
                 }} to='#' className=' font-normal transition-all hover:font-semibold hover:scale-110 ' >About</Link>
                    <Link onClick={() => {scrollToSection('services-section');
                 mobileclick(false);
                 }} to='#' className=' font-normal transition-all hover:font-semibold hover:scale-110 ' >Services</Link>
                    <Link onClick={() => {scrollToSection('doctors-section');
                 mobileclick(false);
                 }} to='#' className=' font-normal transition-all hover:font-semibold hover:scale-110 ' >Doctors</Link>
                    <Link onClick={() => {scrollToSection('blog-section');
                 mobileclick(false);
                 }} to='#' className=' font-normal transition-all hover:font-semibold hover:scale-110 ' >Blog</Link>
                    <Link onClick={() => {scrollToSection('contact-section');
                 mobileclick(false);
                 }} to='#' className=' font-normal transition-all hover:font-semibold hover:scale-110 ' >Contact</Link> 
                        
                </div>
            </div>
        </div>

    </div>
  )
}

export default MobileMenu