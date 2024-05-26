import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./Slider.css"; 

import image1 from '../../shared/assets/image1.png';
import image2 from '../../shared/assets/image2.png';
// import image3 from '../../shared/assets/your-image3.jpg';

function Slider() {
    return (
        <div className="m_carousel-container">
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                interval={3000}
                transitionTime={500}
            >
                {/* Слайд 1 */}
                <div>
                    <img src={image1} alt="Slide 1" />
                    <p className="m_legend">Описание слайда 1</p>
                </div>
                {/* Слайд 2 */}
                <div>
                    <img src={image2} alt="Slide 2" />
                    <p className="m_legend">Описание слайда 2</p>
                </div>
                {/* Слайд 3 */}
                {/* <div>
                    <img src={image3} alt="Slide 3" />
                    <p className="legend">Описание слайда 3</p>
                </div> */}
            </Carousel>
        </div>
    );
}

export default Slider;
