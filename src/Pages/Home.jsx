import React  from 'react'

//hero section
import Hero from '../Components/Hero'
import mother from '../assets/homebg1.jpg' 

//about-section 
import About from '../Components/About'

import ProfileCard from '../Components/ProfileCard'



//doctors-section
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import profile from '../assets/profile.png'; 

//welcome-section 




//blog-section
import BlogPost from '../Components/BlogPost' 
import blog from '../assets/blog1.png'

//contact-section
import Contact from './Contact' 
import { MdCall, MdEmail } from "react-icons/md";



//lan translation
// import { useTranslation } from 'react-i18next';
import Title from '../Components/Title'
import OurAim from '../Components/OurAim'


const Home = () => {

  // const { t } = useTranslation(["welcome"])

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

      <div id="hero-section"  >
        {/* Content of the hero section */} 
        <Hero/> 
        
      </div>
        


      {/* About section */}

      <div id="about-section" className=' mt-24'
      > 

        <About/> 
      </div>


        {/* doctors section */}

      <div className=' items-center mt-24 h-[100vh] my-atuo md:mb-20'>

          <div style={{backgroundColor: 'rgb(211, 211, 211) '}}id="doctors-section" className='py-5 
          rounded-tl-[100px] sm:rounded-tl-[130px] md:rounded-tl-[180px] xl:rounded-tl-[250px] 
            rounded-tr-[100px] sm:rounded-tr-[130px] md:rounded-tr-[180px] xl:rounded-tr-[250px]  '>
              {/* Content of the doctors section */}
                

              <Title title="Our Team" />

              


              <div className='py-10'>
                  <Swiper {...params} >
                      <div><ProfileCard image={profile} name="Kapila Jayaratne" position="National Programme Manager - Child Morbidity & Mortality" /></div>
                      <div><ProfileCard image={profile} name="Professor Vajira Dissanayake" position="Geneticist / Dean - Faculty of Medicine, University of Colombo" /></div>
                      <div><ProfileCard image={profile} name="Chithramalee de Silva" position="Director – Maternal & Child Health" /></div>
                      <div><ProfileCard image={profile} name="Chamli Pushpakumara" position="Dean - Faculty of Computing and Technology, University of Kelaniya" /></div>
                      <div><ProfileCard image={profile} name="Dineshani Hettiarachchi" position="Senior Lecturer" /></div>
                      <div><ProfileCard image={profile} name="R.R.L.U.I. Rajapaksha" position="Senior Lecturer" /></div>
                      <div><ProfileCard image={profile} name="MRM Rishard" position="Honorary Consultant & Senior Lecturer" /></div>
                      <div><ProfileCard image={profile} name="Roshan Hewapathirana" position="Senior Lecturer" /></div>
                      <div><ProfileCard image={profile} name="P. W. Prasad Chathurangana" position="Honorary Consultant & Senior Lecturer" /></div>
                      <div><ProfileCard image={profile} name="Kaushalya Kasturiarachchi" position="National Programme Manager – Monitoring & Evaluation" /></div>
                      <div><ProfileCard image={profile} name="Sidath R. Liyanage" position="Senior Lecturer" /></div>
                  </Swiper>
              </div>
              

              
          </div>
          <svg className=' ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  >
              <path fill="rgb(211, 211, 211)" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
      </div>




 
         {/*welcome section   */}

         <div className='min-h-screen my-10 flex items-center ' 
         data-aos="zoom-in-up" data-aos-delay="200"  > 
                {/* Content of the welcome section */} 

                    <OurAim/>
  
         </div>


         {/* <TestiMonials/> */}
    

        {/* blog section */}

      <div id="blog-section" className=' min-h-screen  
      rounded-br-[100px] sm:rounded-br-[130px] md:rounded-br-[200px] xl:rounded-br-[300px]
      '
      style={{
        backgroundImage: `url(${mother})`,
        backgroundSize:'cover',
        backgroundColor: `rgba(0, 0, 0, 0.17)`,
        boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
      
      
      }}>
          {/* Content of the blog section */}

          <div className='pt-10 pb-24    rounded-br-[100px] sm:rounded-br-[130px] md:rounded-br-[200px] xl:rounded-br-[300px]' 
          style={{ 
            background: `rgba(0, 0, 0, 0.37)`,
             
          }}>
           <Title title="blog" />

            <div className=' grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px] max-w-[1300px] mx-auto'
            > 
               
               
              <BlogPost 
              image={blog} 
              title="Ai sarosh" 
              description="jbsdfkj jsdg ksgdhf skhdf shdfsdhufios" /> 
              <BlogPost 
              image={blog} 
              title="Ai sarosh" 
              description="jbsdfkj jsdg ksgdhf skhdf shdfsdhufios" /> 
              <BlogPost 
              image={blog} 
              title="Ai sarosh" 
              description="jbsdfkj jsdg ksgdhf skhdf shdfsdhufios" /> 
               
                
            </div> 
          </div> 
      </div>

  

       
        {/* contact section */}

      <div id="contact-section"  
      >
        {/* Content of the contact section */} 
        
        <Title title="contact us" />
        
        <div className='grid grid-cols-1 lg:grid-cols-2   items-cente justify-center max-w-[1300px] mx-auto'>

          <div className='flex flex-col items-center justify-center gap-4 text-white'> 
            <div data-aos="zoom-in-up" data-aos-delay="100"  className='bg-cyan-900 rounded-2xl p-3 w-96 flex justify-center'>
            <MdCall /> contact</div>
            <div data-aos="zoom-in-up" data-aos-delay="200" className='bg-cyan-900 rounded-2xl p-3 w-96 flex justify-center'>
            <MdEmail />email</div>
            <div data-aos="zoom-in-up" data-aos-delay="300" className='bg-cyan-900 rounded-2xl p-3 w-96 flex justify-center'>
              email</div>
            <div data-aos="zoom-in-up" data-aos-delay="400" className='bg-cyan-900 rounded-2xl p-3 w-96 flex justify-center'>
              email</div> 
             
          </div> 


          <div data-aos="zoom-in-up">
            <Contact/>
          </div>
          

        </div>

        
        
      </div>



    </div>
  )
}

export default Home