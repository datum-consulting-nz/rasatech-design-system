import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider as StyledThemeProvider, createGlobalStyle } from "styled-components";
import nextTheme from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
  }
`

export const Base = styled.div`
  color: ${props => props.theme.brandColors.text};
  font-family: ${props => props.theme.font};
  line-height: ${props => props.theme.lineHeights.standard};
  font-weight: ${props => props.theme.fontWeights.medium};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.headingFont};
  }
`;

const ThemeProvider = ({ customTheme, customBreakpoints, ...props }) => {
  const breakpoints = customBreakpoints || nextTheme.breakpoints;
  let theme = customTheme || nextTheme;
  if (customTheme) {
    theme = {
      ...theme,
      breakpoints
    };
  } else {
    theme = {
      ...theme,
      breakpoints
    };
  }


  return (
    <>
      <GlobalStyle/>
      <StyledThemeProvider theme={theme}>
        <Base {...props} />
      </StyledThemeProvider>
    </>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  customBreakpoints: PropTypes.arrayOf(PropTypes.string)
};

ThemeProvider.defaultProps = {
  theme: nextTheme,
  customBreakpoints: nextTheme.breakpoints
};

export default ThemeProvider;
