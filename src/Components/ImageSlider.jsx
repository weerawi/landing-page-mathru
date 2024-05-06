import React, { useState }  from 'react';
import slide_data from '../assets/slide_data.js';
import SimpleImageSlider from "react-simple-image-slider";
 

 

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    // Function to handle slide change
    const handleSlideChange = (index) => {
        setCurrentIndex(index - 1);
    };

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
                onChange={handleSlideChange} // Pass the entire event object
            /> 
        </div>
    );
};

export default ImageSlider;


 
