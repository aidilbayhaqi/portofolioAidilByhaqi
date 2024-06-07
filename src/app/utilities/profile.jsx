import Image from "next/image";
import React from "react";
import profil from "@/app/assets/profile.jpeg";
import location from "@/app/assets/location.png";
import email from "@/app/assets/Email.png";
import whatsapp from "@/app/assets/whatsapp.png";
import linked from "@/app/assets/linked.png";
import insta from "@/app/assets/insta.png";
import github from "@/app/assets/github.svg";

const profile = () => {
  const profileSide = {
    lokasi: {
      name: "Depok,Jawa Barat,Indonesia",
      icon: location,
    },
    email: {
      name: "m.aidilbayhaqi@gmail.com",
      icon: email,
      link: "mailto:m.aidilbayhaqi@gmail.com",
    },
    Telp: {
      name: "0895-0432-2572",
      icon: whatsapp,
      link: "https://wa.me/6289504322572",
    },
    linkedIn: {
      name: "aidil-bayhaqi",
      icon: linked,
      link: "https://www.linkedin.com/in/aidil-bayhaqi-8246882ba/",
    },
    instagram: {
      name: "@aidilbayhaqi",
      icon: insta,
      link: "https://www.instagram.com/aidilbayhaqi._/?next=%2F",
    },
    github: {
      name: "aidilbayhaqi",
      icon: github,
      link: "https://github.com/aidilbayhaqi",
    },
  };
  return (
    <div className="profile">
      <div className="">
        <Image
          src={profil}
          alt="test"
          width={200}
          height={200}
          className="photo"
        />
        <h1 className="font-bold pt-5 pb-3 text-center">
          MUHAMMAD AIDIL BAYHAQI
        </h1>
        <h3 className="pb-3 text-center">WEB DEVELOPER | IT ENGINEER</h3>
        <hr />
        <div className="side-profile">
          <div className="side flex">
            <a href="">
              <Image
                src={profileSide.lokasi.icon}
                alt="."
                width={24}
                height={24}
              ></Image>
            </a>
            <p>{profileSide.lokasi.name}</p>
          </div>
          <div className="side flex">
            <a href={profileSide.email.link}>
              <Image
                src={profileSide.email.icon}
                alt="."
                width={24}
                height={24}
              ></Image>
            </a>
            <p>{profileSide.email.name}</p>
          </div>
          <div className="side flex">
            <a href={profileSide.Telp.link}>
              <Image
                src={profileSide.Telp.icon}
                alt="."
                width={24}
                height={24}
              ></Image>
            </a>
            <p>{profileSide.Telp.name}</p>
          </div>
          <div className="side flex">
            <a href={profileSide.linkedIn.link}>
              <Image
                src={profileSide.linkedIn.icon}
                alt="."
                width={24}
                height={24}
              ></Image>
            </a>
            <p>{profileSide.linkedIn.name}</p>
          </div>
          <div className="side flex">
            <a href={profileSide.instagram.link}>
              <Image
                src={profileSide.instagram.icon}
                alt="."
                width={24}
                height={24}
              ></Image>
            </a>
            <p>{profileSide.instagram.name}</p>
          </div>
          <div className="side flex">
            <a href={profileSide.github.link}>
              <Image
                src={profileSide.github.icon}
                alt="."
                width={24}
                height={24}
              ></Image>
            </a>
            <p>{profileSide.github.name}</p>
          </div>
        </div>
        <div className="flex justify-center items-center m-auto">
          <a href="/contact#connect">
            <button className="btn-prof">LETS CONNECT!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default profile;
