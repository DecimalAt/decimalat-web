import { Theme } from '../../utils/styled'
import brandColors from '../colors/brandColors'

const darkTheme: Theme = {
  colors: {
    background: brandColors.gray75,
    body: brandColors.gray10,
    headings: brandColors.gray5,
    black: brandColors.black,
    white: brandColors.white,
    borders: brandColors.borderColor,
    tableOdd: brandColors.borderColor,
    brand: brandColors.red,
    textColor: brandColors.white,
    attrs: {
      str: '#f44336',
      agi: '#39d402',
      int: '#01a9f4'
    }
  },
  fonts: {
    headings:
      // eslint-disable-next-line max-len
      "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif",
    body:
      // eslint-disable-next-line max-len
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif',
    monospace: "'IBM Plex Mono', Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace, monospace"
  },
  fontSizes: {
    h1: '2.441rem',
    h2: '1.953rem',
    h3: '1.563rem',
    h4: '1.25rem'
  },
  containerPadding: '1.5rem',
  borderRadius: '5px',
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
    xl: '1140px'
  },
  heights: {
    header: '60px'
  }
}

export default darkTheme