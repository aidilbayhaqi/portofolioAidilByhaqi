"use client";
import React, { useState } from "react";
import Image from "next/image";
import WA from "@/app/assets/WA.png";
import Linked from "@/app/assets/LinkedIn2.png";
import email from "@/app/assets/email3.png";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("contact/mail", {
        // Perbarui URL di sini
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("email successfully");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("failed to send");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="contact mt-24 bg-[#121212] rounded-3xl p-5" id="contact">
        <h1 className="font-bold text-6xl text-center">
          CONTACT <span className="text-[#461111]">ME</span>
        </h1>
        <div className="container-contact p-5 pt-8">
          <h1 className="font-bold text-4xl">
            <span className="text-[#461111]">LETS WORK </span>TOGETHER
          </h1>
          <p className="pt-3 italic text-[#696969]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a!
            Sint quibusdam quod quia voluptate? Excepturi nobis officia
            perspiciatis odio!
          </p>
          <div className="contact-button mt-5 font-bold">
            <a href="https://wa.me/6289504322572">
              <button className="p-3 mr-5">GETS CALL</button>
            </a>
          </div>
          <div className="location w-full mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 ">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.087890155221!2d106.80821168930206!3d-6.382656731142835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e952d106ab99%3A0x9674822ff1f3928f!2sGg.%20Barokah%2C%20Tanah%20Baru%2C%20Kecamatan%20Beji%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016426!5e0!3m2!1sid!2sid!4v1682956902374!5m2!1sid!2sid"
              className="justify-center items-center m-auto w-full"
            ></iframe>
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              aliquid voluptates iure natus fugit. Blanditiis quis qui esse
              aperiam aspernatur?
            </h1>
          </div>
        </div>
        <hr />
        <div className="contact-sosmed mt-5 p-5" id="connect">
          <h1 className="font-bold text-6xl text-center pb-7">
            <span className="text-[#461111]">LETS</span> CONNECT
          </h1>
          <div className="card-sosmed grid grid-cols-1 gap-4 md:grid-cols-3 ">
            <a href="https://www.linkedin.com/in/aidil-bayhaqi-8246882ba/">
              <Image src={Linked} alt="." width={100}></Image>
            </a>
            <a href="https://wa.me/6289504322572">
              <Image src={WA} alt="." width={100}></Image>
            </a>
            <a href="mailto:m.aidilbayhaqi@gmail.com">
              <Image src={email} alt="." width={100}></Image>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-[#121212] p-8">
        <h1 className="font-bold text-center text-6xl pb-3">
          {" "}
          FORM
          <span className="text-[#461111]"> CONTACT</span>
        </h1>
        <hr />
        <div className="contact-form mt-5 flex flex-col">
          <form action="" onSubmit={handleSubmit} className="">
            <div className="card-form p-5 ">
              <label htmlFor="" className="text-center">
                NAME
              </label>
              <input
                type="text"
                className="input-form w-full border-[#121212] rounded-3xl h-10"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="card-form p-5">
              <label htmlFor="">EMAIL</label>
              <input
                type="text"
                className="input-form w-full border-[#121212] rounded-3xl h-10 "
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="card-form p-5">
              <label htmlFor=""> FROM COMPANY</label>
              <input
                type="text"
                className="input-form w-full border-[#121212] rounded-3xl h-10"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="card-form p-5">
              <label htmlFor=""> SUBJECT</label>
              <textarea
                type="text"
                className="input-form w-full border-[#121212] rounded-3xl"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="contact-button ml-5 mt-5 font-bold">
              <button type="submit" className="">
                Send
              </button>
            </div>
            {status && <p className="text-center mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
