import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Logo from "../assets/images/logo-primary-dark.png"

export default function NavBar() {
 useEffect(() => {
Aos.init({})
 }, []);
 return (
<nav className="w-full py-3 bg-white mt-8">
  <div className="w-full flex">
    <nav id="logo-itude" data-aos="fade-right" data-aos-duration="1000">
      <a href="https://itude.com.br" target="_blank" rel="noreferrer">
        <img
          src={Logo}
          alt="logo itude"
          style={{height: "4rem"}}
        />
      </a>
    </nav>
  </div>
</nav>
 )
}
