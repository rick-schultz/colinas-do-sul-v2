import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Colina from "../assets/images/logo.png"
import Campos from "../assets/images/campo.png"
import Casal from "../assets/images/casal.png"
import Icones from "../assets/images/icones.png"
import Marca from "../assets/images/marca.png"

export default function Main() {
 useEffect(() => {
  Aos.init({})
   }, []);
 return (
  <>
   <div
  className="container mx-auto flex flex-wrap py-6"
  data-aos="zoom-in"
  data-aos-duration="1200"
>
  <div className="container mx-auto flex flex-wrap py-6 mt-8">
    <span id="square">
      <img
        className="m-auto"
        src={Colina}
        alt="logo colinas do sul"
      />
    </span>

    <span id="text" className="text-white text-3xl font-bold mt-14 ml-6"
      >O FRESCOR DO CAMPO PRÓXIMO À CIDADE!</span
    >
  </div>
  <span id="campo"><img src={Campos} alt="" /></span>
  <span id="casal"><img src={Casal} alt="" /></span>
  <span id="button"><button>CADASTRE-SE JÁ!</button></span>
</div>
<span id="icones"><img src={Icones} alt="" /></span>

<div id="brand"><img src={Marca} alt="" /></div>

<div id="space"></div>

  </>
 )
}