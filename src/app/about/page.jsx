"use client";
import React, { useState } from "react";
import Profile from "../utilities/profile";
import {
  code,
  dataPersonal,
  hardskills,
  softskills,
  serti,
  experience,
} from "../utilities/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const about = () => {
  return (
    <>
      <div className="about" id="about">
        <h1>
          ABOUT <span className="text-[#461111]">ME</span>
        </h1>
        <hr />
        <div className="container-about grid grid-cols-1 relative md:grid-cols-2">
          <div className="infoAbout p-5">
            <ul className="pb-5">
              {dataPersonal.map(({ title, desc }, index) => {
                return (
                  <li key={index} className="pt-5">
                    <span className="colorspan">{title}</span>
                    <span>{desc}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* skill */}
      <div className="skill" id="skill">
        <h1>
          <span className="text-[#461111]">MY</span> SKILL
        </h1>
        <hr />
        <div className="container-skill p-5 grid grid-cols-1 relative md:grid-cols-2 pt-5 font-bold">
          <div className="hardskill">
            <h2>HARDSKILL</h2>
            <ul className="">
              {hardskills.map(({ title, desc, level }, index) => {
                return (
                  <li key={index} className="pt-5 grid">
                    <h3 className="pb-3">{title}</h3>
                    <div className=" rounded-full h-4 overflow-hidden mr-0 md:mr-10 border">
                      <div
                        className="bg-[#461111] h-full rounded-full"
                        style={{ width: `${level}` }}
                      ></div>
                    </div>
                    <span className="pt-2">{level}</span>
                    <span className="">{desc}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hardskill pt-10 md:pt-0">
            <h2>SOFTSKILL</h2>
            <ul>
              {softskills.map(({ title, desc, level }, index) => {
                return (
                  <li key={index} className="pt-5 grid">
                    <h3 className="pb-3">{title}</h3>
                    <div className=" rounded-full h-4 overflow-hidden mr-0 md:mr-10 border">
                      <div
                        className="bg-[#461111] h-full rounded-full"
                        style={{ width: `${level}` }}
                      ></div>
                    </div>
                    <span className="pt-2">{level}</span>
                    <span className="">{desc}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr />

        <div className="code" id="code">
          <h2>
            <span className="text-[#461111]">USE</span> CODE
          </h2>
          <div className="container-code flex items-center justify-center relative">
            <div className=" grid grid-cols-2 pt-5 gap-5 relative md:grid-cols-5">
              {code.map(({ title, img }, index) => {
                return (
                  <div
                    key={index}
                    className="card-code p-10 rounded-xl justify-center items-center grid"
                  >
                    <Image
                      src={img}
                      width={50}
                      height={50}
                      className="items-center justify-center m-auto"
                    />
                    <h3 className="pt-5 text-center items-center font-bold">
                      {title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* setificate */}
      <div className="certificate mt-10 pt-10">
        <h1>CERTIFICATE</h1>
        <hr />
        <div className="container-certificate mt-0 md:mt-5">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 30000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {serti.map(({ img, link, desc }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="justify-center items-center grid serti-card">
                    <a
                      href={link}
                      className="hover:opacity-50 items-center justify-center grid"
                    >
                      <Image
                        src={img}
                        width={500}
                        height={500}
                        className="img-serti items-center justify-center mt-5"
                      ></Image>
                    </a>
                    <h2 className="text-center justify-center font-bold mt-5">
                      {desc}
                    </h2>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* experience */}
      <div className="experience">
        <h1>EXPERIENCE</h1>
        <hr />
        <div className="container-experience">
          {experience.map(({ title, company, desc }, index) => {
            return (
              <div className="card-experience p-5" key={index}>
                <h2>{title}</h2>
                <h3>{company}</h3>
                <div>
                  {desc.map((descItem) => (
                    <li key={descItem.id}>{descItem.job}</li>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default about;
