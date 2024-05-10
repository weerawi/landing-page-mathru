import React  from 'react';
import slide_data from '../assets/slide_data.js';
import SimpleImageSlider from "react-simple-image-slider";
 

 

const ImageSlider = () => {
    

    return (
        <div className="  items-center my-3   ">
            <SimpleImageSlider
                width={300}
                height={200}
                images={slide_data.map((slide) => (
                    slide ? { url: slide.image, id: slide.id } : null
                ))}
                showBullets={true} 
                autoPlay={true}
                autoPlayDelay={3}
                loop={true} 
            /> 
        </div>
    );
};

export default ImageSlider;


 
