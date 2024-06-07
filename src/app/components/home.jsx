import Image from "next/image";
import React from "react";
import Profile from '@/app/assets/profile.jpeg'
import { code, porto } from "../utilities/data";

const resume = () => {
  const limitCode = code.slice(0,6)
  const limitPorto = porto.slice(0,3)


  return (
    <>
      <div className="container-home p-5">
        <div className="content-home">
          <h1>HI IM AIDIL BAYHAQI</h1>
          <h2>Website Developer | IT engineer</h2>
          <p className="pt-5 text-justify">
            A vocational high school graduate majoring in computer and network
            engineering.interested and enthusiastic about IT. Web developer and
            an IT technician. I have experience in troubleshooting PC and
            networks. I also learned a lot about programming such as HTML, CSS,
            JAVASCRIPT, NODE, REACT, NEXT, etc.
          </p>

          <blockquote className="pt-5 italic">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            saepe temporibus corrupti sit ea qui quam modi aliquid commodi
            adipisci!"
          </blockquote>
          <h3 className="font-bold mt-5">LETS SEE MY PORTOFOLIO</h3>
          <div className="btn">
            <button className="btn-home">
              <a href={"/about"}>ABOUT ME</a>
            </button>
            <button className="btn-home">
              <a href={"/contact"}>
                CONTACT ME
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="skill-home">
        <div className="grid grid-cols-2">
          <h1>SKILL</h1>
          <a href="/about#code" className="text-end mt-3 px-5">
            view all
          </a>
        </div>
        <div className="grid grid-cols-2 pt-10 gap-3 relative md:grid-cols-3">
          {limitCode.map(({ title, img }, index) => {
            return (
              <div key={index} className="">
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
      <div className="portofolio-home">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <h1>PORTOFOLIO</h1>
          <a href="/portofolio" className="text-start pt-3 md:text-end ">
            view all
          </a>
        </div>
        <div className="grid grid-cols-1 pt-10 gap-3 relative md:grid-cols-3">
          {limitPorto.map(({ title, img }, index) => {
            return (
              <div key={index} className="border p-5">
                <Image
                  src={img}
                  width={250}
                  height={250}
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
    </>
  );
};

export default resume;
