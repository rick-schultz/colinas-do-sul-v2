import Casal from "../assets/images/casal.png"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  top: 13%;
  left: 65%;
`

const Image = styled.div`
  width: 105%;
`

const Button = styled.div`
  position: absolute;
  width: 50%;
  height: 10%;
  top: 93.48%;
  left: 27.5%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  color: #378A2B;
  font-weight: 700;
  padding: 2%;
  border: none;
  cursor: pointer;
  border-radius: 10%;
`

export default function SquareBig() {
 return (
       <Container className="my-4">
        <Image><img src={Casal} alt="foto casal"/></Image>
          <Button className="text-xs lg:text-base xl:text-xl"><a href="https://m.me/1821948678084329" target="_blank" rel="noreferrer">CADASTRE-SE JÁ!</a></Button>
       </Container>
 )
}
