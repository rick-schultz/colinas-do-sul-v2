import Casal from "../assets/images/casal.png"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
`

const Image = styled.div`
  width: 100%;
  height: auto;
`

const Button = styled.div`
  position: absolute;
  width: 40%;
  height: 10%;
  top: 93.48%;
  left: 26.5%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  color: black;
  font-weight: 600;
  padding: 2%;
  border: none;
  cursor: pointer;
  border-radius: 10%;
`

export default function Square() {
 return (
       <Container className="my-4">
        <Image><img src={Casal} alt="foto casal"/></Image>
          <Button className="text-sm sm:text-3xl lg:text-4xl xl:text-5xl">CADASTRE-SE JÁ!</Button>
       </Container>
 )
}
