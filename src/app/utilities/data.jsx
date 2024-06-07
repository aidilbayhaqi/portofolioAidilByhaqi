import React from 'react'
import HTML from '@/app/assets/HTML.png'
import CSS from '@/app/assets/CSS.png'
import JS from '@/app/assets/JS.png'
import BS from '@/app/assets/bootstrap.png'
import REACT from '@/app/assets/REACT.png'
import NODE from '@/app/assets/NODE.png'
import NEXT from '@/app/assets/NEXT.png'
import SQL from '@/app/assets/MYSQL.png'
import VITE from '@/app/assets/vite.png'
import TAILWIND from '@/app/assets/Tailwind.png'
import sertiFE from '@/app/assets/sertiFE.jpg'
import sertiWEBFE from '@/app/assets/SERTIWEBFE.jpg'
import sertiJS from '@/app/assets/SERTIJS.jpg'
import byanime from '@/app/assets/byanimelist.png'
import citter from '@/app/assets/CITTER.png'
import bycoffe from '@/app/assets/bycoffe.png'
import byproject from '@/app/assets/byproject.png'
import portofolio from '@/app/assets/portofolioreact.png'
import booklist from '@/app/assets/booklist.png'
import searcmov from '@/app/assets/searchmovie.png'

export const dataPersonal = [
    {
    id:1,
    title: 'Name : ',
    desc:'MUHAMMAD AIDIL BAYHAQI'},
    {
    id:2,
    title: 'Age : ',
    desc:'19'},
    {
    id:3,
    title: 'Nationality : ',
    desc:'Indonesia'},
    {
    id:4,
    title: 'Location : ',
    desc:'Beji, Depok'},
    {
    id:5,
    title: 'language : ',
    desc:'Bahasa Indonesia, English'},
    {
    id:6,
    title: 'email : ',
    desc:'m.aidilbayhaqi@gmail.com'},
    {
    id:7,
    title: 'phone : ',
    desc:'+62 895-0432-2572'},
]

export const hardskills = [
  {
    id: 1,
    title: "FRONTEND WEB DEVELOPER",
    desc: "excellent",
    level: "100%",
  },
  { id: 2, title: "SYSTEM COMPUTER", desc: "excellent", level: "95%" },
  {
    id: 3,
    title: "TROUBLESHOOTING HARDWARE AND SOFTWARE",
    desc: "excellent",
    level: "98%",
  },
  { id: 4, title: "MIKROTIK", desc: "good", level: "85%" },
  { id: 5, title: "NETWORKING", desc: "good", level: "80%" },
];
export const softskills = [
  { id: 1, title: "ADAPTIVE", desc: "excellent", level: "100%" },
  { id: 2, title: "TEAMWORK", desc: "excellent", level: "95%" },
  { id: 3, title: "PROBLEM SOLVING", desc: "excellent", level: "100%" },
  { id: 4, title: "ENTHUSIAST", desc: "excellent", level: "100%" },
  { id: 5, title: "LEADERSHIP", desc: "good", level: "80%" },
];

export const code =[
  {id:1,
    img:HTML,
    title:'HTML'
  },
  {id:2,
    img:CSS,
    title:'CSS'
  },
  {id:3,
    img:JS,
    title:'JAVASCRIPT'
  },
  {id:4,
    img:BS,
    title:'BOOTSTRAP'
  },
  {id:5,
    img:REACT,
    title:'REACT'
  },
  {id:6,
    img:NEXT,
    title:'NEXT'
  },
  {id:7,
    img:NODE,
    title:'NODE'
  },
  {id:8,
    img:SQL,
    title:'MySQL'
  },
  {id:9,
    img:VITE,
    title:'VITE JS'
  },
  {id:10,
    img:TAILWIND,
    title:'TAILWIND'
  },
]

export const serti = [
  {
    id: 1,
    img: sertiFE,
    link: "https://www.dicoding.com/certificates/ERZR11MW2ZYV",
    desc: "CERTIFCATE OF FRONTEND WEB BY DICODING",
  },
  {
    id: 2,
    img: sertiWEBFE,
    link: "https://www.dicoding.com/certificates/GRX5O9ER3P0M",
    desc: "CERTIFCATE OF WEB DEVELOPER BY DICODING",
  },
  {
    id: 3,
    img: sertiJS,
    link: "https://www.dicoding.com/certificates/KEXL10Y4RXG2",
    desc: "CERTIFCATE OF JAVASCRIPT BY DICODING",
  },
];

export const experience = [
  {
    id: 1,
    title: "IT SUPPORT",
    company: "STIMA IMMI",
    desc: [
      { id: 1, job: "Troubleshooting PC and network" },
      { id: 2, job: "Repairing hardware and software computers" },
      { id: 3, job: "Installation network" },
      { id: 4, job: "Microsoft Office" },
      { id: 5, job: "Monitoring device" },
      { id: 6, job: "IP networking" },
      { id: 7, job: "Data entry" },
    ],
  },
];

export const porto = [
  {
    id: 1,
    title: "ByAnimeList",
    img: byanime,
    link: "https://by-anime-list.vercel.app/",
    desc: "",
  },
  { id: 2, title: "Theater Landing Page", img: citter, link: "", desc: "" },
  { id: 3, title: "ByCoffe E-Commerce Page", img: bycoffe, link: "", desc: "" },
  {
    id: 4,
    title: "ByProject Company Page",
    img: byproject,
    link: "",
    desc: "",
  },
  {
    id: 5,
    title: "Portoflio Page with React",
    img: portofolio,
    link: "",
    desc: "",
  },
  { id: 6, title: "Search Movie API", img: searcmov, link: "", desc: "" },
];