import React from 'react'
import Mobile from '../assets/homebg2.jpg' 
const About = () => {
  return ( 
      <div className='max-w-[1000px] mx-auto py-10  h-[100vh] flex items-center justify-center'>
        <div class=" realtive ">
      
          <div className='container mx-auto xl:px-0'>
            <div className='flex flex-col xl:flex-row text-center xl:text-left justify-between items-center
            gap-8 cl:gap-[74px]'>
              <div className='bgpink-200 flex-1 order-2 xl:order-none'>


              <h1 className=' p-5  font-semibold text-3xl md:5xl text-gray-500 tracking-widest flex justify-center uppercase'>About Us</h1>
           
              <p className='font-roboto tracking-wider' 
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                
                A population-based Birth Cohort Study will be conducted in the Western Province of Sri Lanka
            with a Maternal Health Enhancement (MHE) mobile application. The app includes AI predictive 
            models capable of predicting preterm birth, low birth weight, preeclampsia, perinatal mortality, 
            and postpartum depression in advance. MHE will deliver health advice/alerts directly to 
          the pregnant mother's mobile phone through push notifications with simultaneous alerts for 
          healthcare providers. AI models will also be used in data analysis.
                </p>
              </div>

                <div className='order-1 cl:oreder-none max-w-[453px] '
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1400">
                  <img  src={Mobile} alt='hero' className='rounded-br-[100px] sm:rounded-br-[130px] md:rounded-br-[200px] xl:rounded-br-[300px]
                  rounded-tl-[100px] sm:rounded-tl-[130px] md:rounded-tl-[200px] xl:rounded-tl-[300px]' />
                </div>

              
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default About