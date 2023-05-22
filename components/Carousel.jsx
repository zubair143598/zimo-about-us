import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "../assistes/Rectangle-1.png",
    "../assistes/Rectangle-2.png",
    "../assistes/Rectangle-3.png",
    "../assistes/Rectangle-4.png",
    "../assistes/Rectangle-5.png",
    "../assistes/Rectangle-6.png",
    "../assistes/Rectangle-7.png",
    "../assistes/Rectangle-8.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className=" mt-[60px] lg:mt-[160px] ">
      <div className="flex lg:ml-[60px] px-3 justify-between ">
        <p className="lg:text-[30px] mb-[40px] mt-4 lg:mb-[90px]" >OUR CATEGORIES</p>

        <div className=" mr-[60px] ">
          <button
            className="p-2 rounded-full  text-white"
            onClick={previousSlide}
          >
            <img className=" w-[20px] mr-[60px]  lg:mr-[90px] "  src="../assistes/left.png" alt="" />
          </button>
          <button
            className="p-2 rounded-full text-white"
            onClick={nextSlide}
          >
            <img className=" w-[20px] " src="../assistes/right.png" alt="" />
          </button>
        </div>
      </div>
      <div className="flex">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <div key={index} className="w-1/4 p-4">
            <img className="" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
