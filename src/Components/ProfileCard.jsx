import React from "react";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { LiaAngleDoubleUpSolid } from "react-icons/lia";
const ProfileCard = (props) => {
  return (
    <div
      className="container mx-auto  flex justify-center my-10  relative"
      data-aos="zoom-in-up"
      aos-duration="1000"
    >
      <div
        className="  transform transition-transform duration-500   cursor-pointer shadow-gray-600 shadow-lg rounded-full overflow-hidden 
        w-[250px] h-[250px] "
      >
        <img
          className="w-full h-full object-cover"
          src={props.image}
          alt="Profile"
        />
        <div
          className={`  absolute text-gray-600 bg-white bg-opacity-60 backdrop-blur-md h-64 hover:h-72 pt-[5%] px-5 flex flex-col items-center  
        w-full transition-all duration-1000  bottom-[-155px] hover:bottom-[-35px] shadow-inner border-t border-white border-opacity-60   `}
        >
          <div className="text-xl pt-1">
            <LiaAngleDoubleUpSolid />
          </div>
          <div className="flex  ">
            <h4
              className=" tracking-wider text-center font-semibold transition-transform duration-600 opacity-100 transform translate-y-0 delay-200 pt-2 
             text-sm md:text-LG   "
            >
              Dr.{props.name}
            </h4>
          </div>
          <div className="flex pt-6 ">
            <h4
              className=" tracking-wider text-center transition-transform duration-600 font-medium  opacity-100 transform translate-y-0 delay-200 pt-2 
             text-xs md:text-LG   "
            >
              {props.position}
            </h4>
          </div>

          <div className="flex gap-4 pt-3 text-xl">
            <a href="https://www.facebook.com/yourpage">
              <TiSocialFacebook />
            </a>
            <a href="https://twitter.com/yourpage">
              <TiSocialLinkedin />
            </a>
            <a href="https://twitter.com/yourpage">
              <TiSocialTwitter />
            </a>
            <a href="https://www.instagram.com/yourpage">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
