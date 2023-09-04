import { createGlobalStyle } from 'styled-components'

import {
    Poppins_300,
    Poppins_400,
    Poppins_500,
    Poppins_600
} from './fonts/Poppins'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: "Poppins_300";
        src: local("Poppins_300"),
        url(${Poppins_300}) format("truetype");
        font-weight: 300;
    }
    @font-face {
        font-family: "Poppins_400";
        src: local("Poppins_400"),
        url(${Poppins_400}) format("truetype");
        font-weight: 400;
    }
    @font-face {
        font-family: "Poppins_500";
        src: local("Poppins_500"),
        url(${Poppins_500}) format("truetype");
        font-weight: 500;
    }
    @font-face {
        font-family: "Poppins_600";
        src: local("Poppins_600"),
        url(${Poppins_600}) format("truetype");
        font-weight: 600;
    }
`
export default FontStyles