import 'styled-components'
//import styled, { createGlobalStyle } from 'styled-components'

//declare module 'styled-components' {
    export interface Theme {
        colors: {
            background: string
            body: string
            headings: string
            borders: string
            tableOdd: string
            brand: string
            black: string
            white: string,
            textColor: string,
            attrs: {
                str: string
                agi: string
                int: string
            }
        }
        fonts: {
            body: string
            headings: string
            monospace: string
        }
        fontSizes: {
            h1: string
            h2: string
            h3: string
            h4: string
        }
        containerPadding: string
        borderRadius: string
        breakpoints: {
            xs: string
            sm: string
            md: string
            lg: string
            xl: string
        }
        widths: {
            md: string
            lg: string
            xl: string
        }
        heights: {
            header: string
        }
    }
//}

//export default styled as createGlobalStyle<Theme>