import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [currentDate, setCurrentDate] = useState({
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
          second: undefined,
        })
      );
      setCurrentDate(
        new Date().toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (<div className="bg-cover hero  bg-local bg-center bg-no-repeat">
    <div className=" grid lg:grid-cols-3 grid-cols-2    justify-between lg:px-[60px] pl-[20px] pt-[24px] lg:pt-[68px]">
      <div className=" flex">
        <img
          className="  lg:w-[65.96px] w-[25px] h-[20px] lg:h-[50px]  "
          src="/assistes/1.png"
          alt="asd"
        />
        <img className="  lg:w-[184.9px] w-[25px] h-[20px] lg:h-[50px] lg-ml-[30px] ml-3 lg:mr-[39px] mr-3  " src="/assistes/3.png" alt="asd" />
        <p className=" text-white uppercase  lg:mt-[25px] text-xs tracking-[2px] ">about</p>
      </div>
      <div>
        <img className="  lg:w-[204.38px]  w-[100px] h-[20px] lg:h-[50px]  " src="/assistes/2.png" alt="asd" />
      </div>
      <div className="flex lg-mt-0 mt-5 justify-between ">
        <div className="text-white ">
          <p className=" text-sm tracking-[2px] ">
            {currentTime} <span className=" lg:text-sm text-xs ml-2 tracking-[2px]  ">LONDON UNITED KINGDOM</span>
          </p>
          <p className="text-end text-sm tracking-[2px] ">{`${currentDate} `}</p>
        </div>
        <div className="text-white   flex  ">
          <img src="/assistes/4.png" className=" w-[37.31px] h-[25px] ml-3 lg:ml-[20px] "  />

          <img src="/assistes/6.png" className="w-[20.89px] h-[25px] ml-3  lg:ml-[40px]" alt="sad" />

          <img src="/assistes/5.png" className="w-[20.89px] h-[25px] ml-3 lg:ml-[40px]" alt="asdasd" />
        </div>
      </div>
    </div>
    <div className="lg:mt-[65px] text-white flex">
      <img src="/assistes/back.png" className=" w-[22px] mt-2 mr-2 ml-[60px] h-[16px] " alt="asdas" />
      <p className=" uppercase text-[22px] tracking-[4px] ">back</p>
    </div>
    <div className=" text-white">
      <p className=" uppercase text-[30px] ml-[60px] tracking-[4px] lg:mt-[265px] mt-[100px] lg:text-[40px]" >discover</p>
      <p className=" uppercase text-[40px]  ml-[60px] text-[]  lg:text-[60px] tracking-[3px]" >A NEW WORLD</p>
      <p className=" uppercase text-[18px]  ml-[60px]  text-[#A9A6A6] tracking-[3px]  " >FOR THOSE WHO WISH FOR MORE...</p>
    </div>
    <div className=" grid   grid-cols-1  ">
      <p className=" text-[#A9A6A6] text-center text-[18px] mt-[264px] tracking-[3px] ">Bringing the world closer together</p>
      <img src="/assistes/down.png" className=" justify-self-center w-[40px] mb-5 mt-[40px] " alt="" />
    </div>
    </div>
  );
};

export default Hero;
