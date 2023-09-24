import { Theme } from '../../utils/styled'
import brandColors from '../colors/brandColors'

const darkTheme: Theme = {
  colors: {
    background: brandColors.borderColor,
    body: brandColors.borderColor,
    headings: brandColors.borderColor,
    white: brandColors.black,
    borders: brandColors.borderColor,
    tableOdd: brandColors.borderColor,
    brand: brandColors.selectionColor,

    textColor: brandColors.textGray,
    contentBackground: brandColors.backgroundFillWhite,
    bodyBackground: brandColors.grayScale4,
    borderColor1: brandColors.grayScale5,
    black: brandColors.grayScale1,
    selectionColor: brandColors.selectionColor,
    primaryOrange: brandColors.primaryOrange,

    attrs: {
      str: '#f44336',
      agi: '#39d402',
      int: '#01a9f4'
    }
  },
  fonts: {
    headings:
      // eslint-disable-next-line max-len
      "'Poppins_400'",
    body:
      // eslint-disable-next-line max-len
      "'Poppins_300'",
    monospace: "'Poppins_300'"
  },
  fontSizes: {
    h1: '2.441rem',
    h2: '1.953rem',
    h3: '1.563rem',
    h4: '1.25rem'
  },
  containerPadding: '1.5rem',
  borderradius: '5px',
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  widths: {
    md: '720px',
    lg: '960px',
    xl: '1140px',
    sidepanel: '300px'
  },
  heights: {
    header: '56px'
  }
}

export default darkTheme