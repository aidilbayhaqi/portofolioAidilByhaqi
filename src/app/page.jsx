import Image from "next/image";
import Navbar from "./utilities/navbar";
import Profile from '@/app/utilities/profile'
import Resume from '@/app/components/home'



export default function Home() {
  return (
    <>
      <div className="container">
        <div className="profile-wrapper">
          <Profile />
        </div>
        <div className="content-wrapper">
            <Resume/>
          </div>
      </div>
    </>
  );
}
