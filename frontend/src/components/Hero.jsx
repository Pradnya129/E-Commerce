

import React, { useEffect,useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing Font Awesome icons
import { assets } from '../assets/assets';
import 'animate.css'; // For prebuilt animations
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    const [slideHeight, setSlideHeight] = useState(getSlideHeight());
  
    function getSlideHeight() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        return 40; // Height for large screens (e.g., desktops)
      } else if (screenWidth >= 768) {
        return 40; // Height for medium screens (e.g., tablets)
      } else if (screenWidth >= 640) {
        return 50;
      } else {
        return 110; // Height for small screens (e.g., mobile devices)
      }
    }
  useEffect(() => {
    const handleResize = () => setSlideHeight(getSlideHeight());
    window.addEventListener("resize", handleResize);

    AOS.init({ duration: 1000 }); // Initialize AOS for scroll animations
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={slideHeight}
        totalSlides={4}
        isPlaying={true} // Autoplay enabled
        infinite={true} // Loop enabled
        interval={3000}
        touchEnabled={true} // Autoplay interval set to 5 seconds
        className="hero-carousel "
      >
        <Slider className='relative' >
          {/* First Slide */}
          <Slide index={0}>
            <div
             className="flex flex-col max-[320px]:text-start    overflow-hidden  sm:flex-row items-center justify-center  sm:py-0"
              data-aos="fade-up"
            >
              {/* Hero Left Side */}
              <div className="w-full h-full sm:w-1/2 flex flex-col py-8 items-center  justify-center text-[#414141] animate-slide-text-1 animate__animated animate__fadeInLeft">
                <div className="flex items-center gap-2 ">
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                  <p className="font-medium text-sm md:text-base">
                    TOP PICKS OF THE SEASON
                  </p>
                </div>
                <h1 className="prata-regular text-center text-[28px]  sm:text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                JUST LANDED
                </h1>
                <div className="flex items-center gap-2  ">
                  <p className="font-semibold text-sm md:text-base">
                    SHOP NOW
                  </p>
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                </div>
              </div>

              {/* Hero Right Side (Image) */}
              <div className="w-full sm:w-1/2  flex justify-center  items-center">
                <img
                  src={assets.hero_img1}
                  className="w-full pe-[2px] h-full  animate__animated animate__zoomIn"
                  alt="Hero Slide 1"
                />
              </div>
            </div>
          </Slide>

          {/* Second Slide */}
          <Slide index={1}>
            <div
              className="flex flex-col sm:flex-row items-center  overflow-hidden justify-center py-10 sm:py-0"
              data-aos="fade-up"
            >
              {/* Hero Left Side */}
              <div className="w-full sm:w-1/2 flex flex-col pb-6 items-center  justify-center text-[#414141] animate-slide-text-2 animate__animated animate__fadeInLeft">
                <div className="flex items-center gap-2">
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                  <p className="font-medium text-sm md:text-base">
                  EXCLUSIVE COLLECTION
                  </p>
                </div>
                <h1 className="prata-regular text-[28px]  sm:text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                  BEST SELLERS
                </h1>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm md:text-base">
                  CHECK THEM OUT
                  </p>
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                </div>
              </div>

              {/* Hero Right Side (Image) */}
              <div className="w-full sm:w-1/2  flex justify-center overflow-hidden  items-center">
                <img
                  src={assets.hero_img2}
                  className=" w-full pe-[2px]  animate__animated animate__zoomIn  object-cover object-center"
                  alt="Hero Slide 2"
                />
              </div>
            </div>
          </Slide>

          {/* Third Slide */}
          <Slide index={2}>
            <div
              className="flex flex-col sm:flex-row items-center overflow-hidden justify-center py-10 sm:py-0"
              data-aos="fade-up"
            >
              {/* Hero Left Side */}
              <div className="w-full sm:w-1/2 flex flex-col pb-6 items-center   justify-center text-[#414141] animate-slide-text-3 animate__animated animate__fadeInLeft">
                <div className="flex items-center gap-2">
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                  <p className="font-medium text-sm md:text-base">
                    NEW ARRIVALS
                  </p>
                </div>
                <h1 className="prata-regular text-[28px]  sm:text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                  LATEST TRENDS
                </h1>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm md:text-base">
                  BROWSE NOW
                  </p>
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                </div>
              </div>

              {/* Hero Right Side (Image) */}
              <div className="w-full sm:w-1/2   flex justify-center items-center">
                <img
                  src={assets.hero_img3}
                  className="w-full pe-[2px] animate__animated animate__zoomIn  object-cover object-center"
                  alt="Hero Slide 3"
                />
              </div>
            </div>
          </Slide>
          <Slide index={3}>
            <div
              className="flex flex-col sm:flex-row items-center justify-center  overflow-hidden py-10 sm:py-0"
              data-aos="fade-up"
            >
              {/* Hero Left Side */}
              <div className="w-full sm:w-1/2 flex flex-col pb-6 items-center    animate-slide-text-4 justify-center text-[#414141] animate__animated animate__fadeInLeft">
                <div className="flex items-center gap-2   ">
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                  <p className="font-medium text-sm md:text-base">
                  Shop More, Save More
                  </p>
                </div>
                <h1 className="prata-regular text-[28px]  sm:text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                BIG SAVINGS
               </h1>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm md:text-base">
                  DON'T MISS OUT
                  </p>
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                </div>
              </div>

              {/* Hero Right Side (Image) */}
              <div className="w-full  sm:w-1/2  flex justify-center items-center  ">
                <img
                  src={assets.hero_img}
                  className="w-full animate__animated  object-cover object-center animate__zoomIn"
                  alt="Hero Slide 3"
                />
              </div>
            </div>
          </Slide>
        </Slider>

        {/* Carousel Navigation Buttons */}
        <ButtonBack className="absolute left-[-50px] top-1/2 z-50 lg:block hidden transform-all -translate-y-1/2 bg-[#888787] text-white p-2 rounded-full">
          <FaArrowLeft size={24} />
        </ButtonBack>
        <ButtonNext className="absolute right-[-50px] top-1/2 lg:block hidden transform-all -translate-y-1/2 bg-[#888787] text-white p-2 rounded-full">
          <FaArrowRight size={24} />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default Hero;



