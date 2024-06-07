import React from 'react'
import { porto } from '../utilities/data';
import Image from 'next/image';
import Link from 'next/link';

const Portofolio = () => {
  return (
    <div className="portofolio" id="portofolio">
      <h1 className="font-bold">
        <span className="text-[#461111]">MY</span>PORTOFOLIO
      </h1>
      <hr />
      <div className="pt-5">
        <h2 className='text-center font-bold text-4xl'>WEBSITE</h2>
        <div className="container-porto grid grid-cols-1 gap-5 pt-5 md:grid-cols-3">
          {porto.map(({ img, title, desc, link }, index) => {
            return (
              <div key={index} className="card-porto grid border p-3">
               <a href={link}>
                <Image src={img} width={500} height={500}></Image>
               </a>
                <h3 className='text-center font-bold pt-3'>{title}</h3>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portofolio