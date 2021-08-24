import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Campos from "../assets/images/campo.png"
import CasalBig from "./CasalBig"
import Icones from "../assets/images/icones.png"
import Marca from "../assets/images/marca.png"
import SquareBig from './SquareBig';
import styled from "styled-components"

const Hidden = styled.div`
@media (max-width: 768px) {
  display: none;
 }
`
const Zindex = styled.div`
z-index: -1;
width: 50%;
`

const Brand = styled.div`
position: absolute;
top: 90%;
left: 82%;
`

const Text = styled.div`
 inline-size: 33%;
`

const Imagem = styled.div`
width: 30%;
`

export default function MainBig() {
useEffect(() => {
Aos.init({})
}, []);
return (
<Hidden>
<div className="container mx-auto flex flex-wrap px-4"
data-aos="zoom-in"
data-aos-duration="1200">


  <div className="container flex my-4">
<CasalBig/>

    <SquareBig />

  <Text>
    <p className="text-white text-2xl font-bold text-center mx-auto my-2 lg:text-3xl lg:mt-8">
    O FRESCOR DO CAMPO PRÓXIMO À CIDADE!</p>
  </Text>

    </div>

    <div className="container flex my-4 space-x-6 justify-center mb-12">
    
    <Imagem><img src={Icones} alt="lago, localização privilegiada, lotes a partir de 180m² e pagamento facilitado" /></Imagem>
    
    <Zindex>
      <div>
             <img className="-mt-20" src={Campos} alt="imagem de um campo" />
             </div>
    </Zindex>

    <Brand><img className="w-96" src={Marca} alt="" /></Brand>
</div>

</div>
</Hidden>
)
}