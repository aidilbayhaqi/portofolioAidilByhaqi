  'use client'
  import Link from 'next/link'
  import React, { useEffect, useState } from 'react'
  import linked from '@/app/assets/linked.png'
  import email from '@/app/assets/Email.png'
  import WA from '@/app/assets/whatsapp.png'
import Image from 'next/image'

  const navbar = () => {

    const [scrolled, setScrolled] = useState (false)
    const[open,setOpen]=useState(false)

    useEffect(()=>{
      const onScroll = ()=>{
        if(window.scrollY>50){
          setScrolled(true)
        }else {
          setScrolled(false)
        }
      }
      window.addEventListener('scroll', onScroll)
      return ()=>window.removeEventListener('scroll', onScroll)
    }, [])
    const toggleButton = ()=>{
      setOpen(!open)
    }
    
    return (
      <>
        <div className={`navbar fixed ${scrolled ? `scrolled` : ``}`}>
          <div className="container-navbar flex flex-wrap items-center justify-between relative">
            <Link href={"/"} className="navbar-logo">
              AidilByhaqi
            </Link>
            <div className="block lg:hidden">
              <button
                onClick={toggleButton}
                className="flex items-center px-3 py-2 text-white hover:text-white "
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0z" />
                </svg>
              </button>
            </div>
            <div className={`menu ${open ? "block" : "hidden"}`}>
              <ul className="flex items-center menu-items">
                <li className="nav-item items-center">
                  <Link href={"/"} className="link">
                    HOME
                  </Link>
                  <Link href={"/about"} className="link">
                    ABOUT
                  </Link>
                  <Link href={"/portofolio"} className="link">
                    PORTOFOLIO
                  </Link>
                  <Link href={"contact"} className="link">
                    CONTACT
                  </Link>
                </li>
              </ul>
              <div className="icon-img gap-4">
                <a href="https://www.linkedin.com/in/aidil-bayhaqi-8246882ba/">
                  <Image src={linked} width={40} height={40}></Image>
                </a>
                <a href="mailto:m.aidilbayhaqi@gmail.com">
                  <Image src={email} width={40} height={40}></Image>
                </a>
                <a href="https://wa.me/6289504322572">
                  <Image src={WA} width={40} height={40}></Image>
                </a>
              </div>
              <a href="">
                <Image src={""} alt=""></Image>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default navbar