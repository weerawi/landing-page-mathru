import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_new.png';

//for traslation
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const MobileMenu = ({ mobileclick }) => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

    //for translation
  const { i18n, t } = useTranslation(["header"])

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length >2) {
      i18next.changeLanguage("en")
    }
  },[]

  )

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className='text-black h-full'
    style={{
        backdropFilter: 'blur(3px)',
        background: 'rgba(255,255,255, 0.7)' ,
      }}>
        <div className='w-[80%] max-w-[1200px] mx-auto'>
            <div className='flex flex-col items-center p-5'>
                <div className='flex items-center mb-16 p-2 rounded-2xl '  
                 
                  >
                    <img src={logo} alt='hero' width={50} />
                    <Link to='/' className='text-2xl font-poppins tracking-widest ' onClick={() => {scrollToSection('hero-section');
                 mobileclick(false);
                 }}>Mathru</Link> 
                </div>
                <div className='flex flex-col space-y-10 font-poppins '> 
                    <Link onClick={() => {scrollToSection('about-section');
                 mobileclick(false);
                 }} to='#' className=' font-normal transition-all hover:font-semibold hover:scale-110 ' 
                 style={{ fontSize: localStorage.getItem('i18nextLng') === 'ta' ? '0.6rem' : '1rem' }}
                  >{t("about")}</Link>
                    <Link onClick={() => {scrollToSection('services-section');
                 mobileclick(false);
                 }} to='#' className=' font-normal transition-all hover:font-semibold hover:scale-110 ' 
                 style={{ fontSize: localStorage.getItem('i18nextLng') === 'ta' ? '0.6rem' : '1rem' }}
                  >{t("services")}</Link>
                    <Link onClick={() => {scrollToSection('doctors-section');
                 mobileclick(false);
                 }} to='#' className=' font-normal transition-all hover:font-semibold hover:scale-110 ' 
                 style={{ fontSize: localStorage.getItem('i18nextLng') === 'ta' ? '0.6rem' : '1rem' }}
                  >{t("doctors")}</Link>
                    <Link onClick={() => {scrollToSection('blog-section');
                 mobileclick(false);
                 }} to='#' className=' font-normal transition-all hover:font-semibold hover:scale-110 ' 
                 style={{ fontSize: localStorage.getItem('i18nextLng') === 'ta' ? '0.6rem' : '1rem' }}
                  >{t("blog")}</Link>
                    <Link onClick={() => {scrollToSection('contact-section');
                 mobileclick(false);
                 }} to='#' className=' font-normal transition-all hover:font-semibold hover:scale-110 ' 
                 style={{ fontSize: localStorage.getItem('i18nextLng') === 'ta' ? '0.6rem' : '1rem' }}
                  >{t("contact")}</Link> 

                  <select value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange} className='bg-transparent border-transparent transition-all hover:font-semibold hover:scale-105 ' style={{ fontSize: localStorage.getItem('i18nextLng') === 'ta' ? '0.6rem' : '1rem' }}>
                    <option value="en">English</option>
                    <option value="ta">தமிழ்</option>
                    <option value="sn">සිංහල</option>
                  </select>  
                </div>
            </div>
        </div>

    </div>
  )
}

export default MobileMenu