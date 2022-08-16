import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Helvetica Neue';
  src: url('/public/fonts/HelveticaNeueCyr-Medium.otf');
  font-weight: 400;
}
@font-face {
  font-family: 'Helvetica Neue';
  src: url('/public/fonts/HelveticaNeueCyr-Bold.otf');
  font-weight: 700;
}
*{
  font-family: 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyles;
