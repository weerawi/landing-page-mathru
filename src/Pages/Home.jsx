import React, { useEffect, useState } from 'react'

//hero section
import Hero from '../Components/Hero'
import mother from '../assets/homebg1.jpg'
import mother2 from '../assets/homebg2.jpg' 
import CircleContent from '../Components/CircleContent'

//about-section
import ImageSlider from '../Components/ImageSlider'
import About from '../Components/About'

import ProfileCard from '../Components/ProfileCard'
import BlogPost from '../Components/BlogPost' 


//doctors-section
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';

//contact-section
import Contact from './Contact'


const Home = () => {

    //Our tema swiper params in doctors section
 
    const params = {
        slidesPerView: 3, 
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }, 
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1, 
          },
          // when window width is >= 480px
          580: {
            slidesPerView: 2, 
          },
          // when window width is >= 640px
          740: {
            slidesPerView: 3, 
          },
          // when window width is >= 640px
          1060: {
            slidesPerView: 4, 
          }
        }
      };

  return (
    <div>

        {/* Hero section */}

      <div id="hero-section" >
        {/* Content of the hero section */} 
        <Hero/> 
        
      </div>
        


      {/* About section */}

      <div id="about-section" className=' mt-24'>
       
        

        <About/>



         


        {/* doctors section */}

        <div className=' items-center h-[100vh] my-atuo '>

            <div style={{backgroundColor: 'rgb(211, 211, 211) '}}id="doctors-section" className='py-5 
             rounded-tr-[100px] sm:rounded-tr-[130px] md:rounded-tr-[180px] xl:rounded-tr-[250px] rounded-tl-[100px] sm:rounded-tl-[130px] md:rounded-tl-[180px] xl:rounded-tl-[250px]  '>
                {/* Content of the doctors section */}
                <div className='flex items-center justify-center py-5'>
                    <div className='py-5'>
                        <h1 className=' p-5  font-semibold text-3xl md:5xl text-gray-500 tracking-widest flex justify-center uppercase'>Our Specialised Team</h1>
                    </div> 
                </div>


                <div className='py-10'>
                    <Swiper {...params} >
                        <div><ProfileCard image={doctor1} name="Ajinstha"/></div>
                        <div><ProfileCard image={doctor2} name="Samitha"/></div>
                        <div><ProfileCard image={doctor3} name="Tharindu"/></div>
                        <div><ProfileCard image={doctor1} name="Ajinstha"/></div>
                        <div><ProfileCard image={doctor2} name="Samitha"/></div>
                        <div><ProfileCard image={doctor3} name="Tharindu"/></div>
                        <div><ProfileCard image={doctor1} name="Tharindu"/></div>
                    </Swiper>
                </div>
                

                
            </div>
            <svg className=' ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  >
                <path fill="rgb(211, 211, 211)" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>

     


      </div>




 

        

         {/*welcome section   */}

         <div className='h-screen flex items-center'>
         
         
                <div className=' w-full md:w-[80%] lg:w-[60%] mx-auto  mb-10 shadow-xl rounded-2xl  ' style={{ 
                    backgroundImage: `url(${mother})`,
                    backgroundSize: 'cover',
                }}
                
                >
                {/* Content of the welcome section */}

                    <div className='   realtive flex justify-center p-5'>
                        <div className='flex flex-col md:flex-row mx-auto items-center justify-around my-5 pt-10   rounded-3xl ' style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(0, 255, 255, 0.4)',
                    }}>
                            <div className='  flex flex-col items-center w-full md:w-3/5 p-5' >
                                <h1 className='text3xl md:text-4xl tracking-wider capitalize font-semibold'>Welcome to the Healthy Pregnancy Center! </h1>
                                <p className='text-sm md:text-lg pt-5'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus quos similique reprehenderit, suscipit culpa nesciunt voluptate in laudantium, ut veniam nisi adipisci excepturi est atque fugit, consectetur minima iste.
                                </p>
                            </div>

                            <div className=' w-full md:w-2/5 flex items-center justify-center' >
                                <ImageSlider/>  
                            </div>

                            
                        </div>
                    </div> 

                </div>
         
         </div>
         




        {/* blog section */}

      <div id="blog-section" className='py-10 bg-gray-300'>
          {/* Content of the blog section */}

          <div>

          <h1 className=' p-5  font-semibold text-3xl md:5xl text-gray-500 tracking-widest flex justify-center uppercase'>Blog</h1>
           

            <div className='grid grid-rows-1 lg:grid-cols-2 '>
            <BlogPost  />
            <BlogPost  />
            <BlogPost  />
            <BlogPost  />
           
          </div>
          </div>

          
      </div>

  

       
        {/* contact section */}

      <div id="contact-section">
        {/* Content of the contact section */}

        <Contact/>
      </div>



    </div>
  )
}

export default Home