import { createGlobalStyle } from 'styled-components';
import Background from '../images/bg-gramado.png';
import BackgroundMobile from '../images/bg-gramado-mob.png';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

@media screen and (max-width:767px) {
  body {
    margin: 0;
    padding: 0;
    background: url(${BackgroundMobile});
    background-repeat: repeat-y;
    background-size: cover;
    font-family: karla;
  }
}

@media screen and (min-width:768px) {
  body {
    margin: 0;
    padding: 0;
    background: url(${Background});
    background-repeat: repeat-y;
    background-size: cover;
    font-family: karla;
  }
}
`;
export default GlobalStyle;
