import React from 'react'
import ImageSlider from './ImageSlider'
import Title from './Title'
//lan translation
import { useTranslation } from 'react-i18next'; 
import pregnant from '../assets/pregnant.png'
 
  
const OurAim = () => {
    
    const { t } = useTranslation(["welcome"])
  return (
    <div className=' w-full md:w-[80%] lg:w-[60%] mx-auto mt-16 mb-10 shadow-xl rounded-3xl  '
    style={{ 
     backgroundImage: `url(${pregnant})`,
     backgroundSize: 'contain', 
     backgroundRepeat:'no-repeat'
 }}>
        {/* Content of the welcome section */}

        <div className='   realtive flex justify-center '>
                        <div className='flex flex-col lg:flex-row mx-auto items-center justify-around   pt-10   rounded-3xl ' style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(0, 0,0, 0.4)',
                    }}>
                            <div className='  flex flex-col items-center w-full md:w-3/5 p-5 text-white' >
                                 <Title title={t("heading")}  />
                                
                                <p className='text-sm md:text-lg pt-5'>
                                {t("body")} 
                                </p>
                            </div>

                            <div className=' w-full md:w-2/5 flex items-center justify-center  ' >
                                <ImageSlider/>  
                            </div>

                            
                        </div>
                    </div> 

    </div>
  )
}

export default OurAim