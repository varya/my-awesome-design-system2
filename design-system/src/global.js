import { createGlobalStyle, css } from "styled-components";
import { typography } from "./tokens";
const bodyStyles = css`
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  font-family: ${typography.paragraph3FontFamily};
  font-size: ${typography.paragraph3FontSize};
  font-weight: ${typography.paragraph3FontWeight};
  font-style: ${typography.paragraph3FontStyle};
  line-height: ${typography.paragraph3LineHeight};

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  p {
    font-family: ${typography.paragraph3FontFamily};
    font-size: ${typography.paragraph3FontSize};
    line-height: ${typography.paragraph3LineHeight};
    font-weight: ${typography.paragraph3FontWeight};
    font-style: ${typography.paragraph3FontStyle};
    letter-spacing: ${typography.paragraph3LetterSpacing};
  }

  h1 {
    font-family: ${typography.headline1FontFamily};
    font-size: ${typography.headline1FontSize};
    line-height: ${typography.headline1LineHeight};
    font-weight: ${typography.headline1FontWeight};
    font-style: ${typography.headline1FontStyle};
    letter-spacing: ${typography.headline1LetterSpacing};
  }
  h2 {
    font-family: ${typography.headline2FontFamily};
    font-size: ${typography.headline2FontSize};
    font-weight: ${typography.headline2FontWeight};
    font-style: ${typography.headline2FontStyle};
    line-height: ${typography.headline2LineHeight};
    letter-spacing: ${typography.headline2LetterSpacing};
  }
  h3 {
    font-family: ${typography.headline3FontFamily};
    font-size: ${typography.headline3FontSize};
    font-weight: ${typography.headline3FontWeight};
    font-style: ${typography.headline3FontStyle};
    line-height: ${typography.headline3LineHeight};
    letter-spacing: ${typography.headline3LetterSpacing};
  }
  h4 {
    font-family: ${typography.headline4FontFamily};
    font-size: ${typography.headline4FontSize};
    font-weight: ${typography.headline4FontWeight};
    font-style: ${typography.headline4FontStyle};
    line-height: ${typography.headline4LineHeight};
    letter-spacing: ${typography.headline4LetterSpacing};
  }
  h5 {
    font-family: ${typography.headline5FontFamily};
    font-size: ${typography.headline5FontSize};
    font-weight: ${typography.headline5FontWeight};
    font-style: ${typography.headline5FontStyle};
    line-height: ${typography.headline5LineHeight};
    letter-spacing: ${typography.headline5LetterSpacing};
  }
  h6 {
    font-family: ${typography.headline6FontFamily};
    font-size: ${typography.headline6FontSize};
    font-weight: ${typography.headline6FontWeight};
    font-style: ${typography.headline6FontStyle};
    line-height: ${typography.headline6LineHeight};
    letter-spacing: ${typography.headline6LetterSpacing};
  }
`;

/* Allow design system consumers to access font settings but control how and
 where they load the font. */

export const fontUrl =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap";

const globalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
  // prevent mouse-clicks from focusing elements
  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export default globalStyle;
