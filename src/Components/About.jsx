import React from 'react'
import Mobile from '../assets/western.png' 
//for translation
import { useTranslation } from 'react-i18next';
import Title from './Title';

const About = () => {
  //for translation
  const { t } = useTranslation(["about"])

  return ( 
      <div className='max-w-[1000px] mx-auto py-10  min-h-[100vh] flex items-center justify-center'>
        <div class=" realtive ">
      
          <div className='container mx-auto xl:px-0'>
            <div className='flex flex-col xl:flex-row text-center xl:text-left justify-between items-center
            gap-8 cl:gap-[74px]'>
              <div className='bgpink-200 flex-1 order-2 xl:order-none'>

              <Title title={t("heading")}/>
              
              <p className='font-roboto tracking-wider' 
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                
                {t("body")}
                </p>
              </div>

                <div className='order-1 cl:oreder-none max-w-[453px] '
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1400">
                  <img  src={Mobile} alt='hero' className='rounded-br-[50px] sm:rounded-br-[80px] md:rounded-br-[100px] xl:rounded-br-[150px]
                  rounded-tl-[50px] sm:rounded-tl-[80px] md:rounded-tl-[100px] xl:rounded-tl-[150px]' />
                </div>

              
            </div>
          </div>
        </div>





        
      </div>
    
  )
}

export default About