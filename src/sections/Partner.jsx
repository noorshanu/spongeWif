import React from "react";
import Marquee from "react-fast-marquee";

function Partner() {
  return (
    <section className=" mt-8">
      <div className=" container-wrapper">
        <div className=" py-3">
          <h2 className="font-groot-one text-2xl sm:text-5xl my-2 text-[#ffffff] text-center">
            Our Partners
          </h2>
        </div>

        <Marquee>
          <img src="part/bsc.svg" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img2.png" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img3.png" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img4.png" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img5.png" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img6.png" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img7.png" alt="" className=" w-[180px] h-auto px-4" />
          <img src="part/img8.png" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img9.png" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img10.png" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img11.png" alt="" className=" w-[180px] h-auto  px-4" />
          <img src="part/img12.png" alt="" className=" w-[180px] h-auto  px-4" />
          <img src="part/raid.svg" alt="" className=" w-[180px] h-auto  px-4" />
          <img src="part/img14.png" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img15.png" alt="" className=" w-[180px] h-auto px-4 " />
          <img src="part/img16.png" alt="" className=" w-[180px] h-auto px-4 " />
        </Marquee>
      </div>
    </section>
  );
}

export default Partner;
