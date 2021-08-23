import Colina from "../assets/images/logo.png"
import styled from "styled-components"

const WhiteSquare = styled.span`
background-color: white;
box-shadow: inset 0px 10px 10px #0000004F, 0px 3px 6px #0000009C;
border: 1px solid #707070;
border-radius: 0px 46px;
opacity: 1;
`

export default function SquareBig() {
 return (
       <WhiteSquare className="w-3/6 z-10">
      <img
        className="p-8"
        src={Colina}
        alt="logo colinas do sul"
      />
    </WhiteSquare>
 )
}
