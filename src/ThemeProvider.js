import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider as StyledThemeProvider, createGlobalStyle } from "styled-components";
import nextTheme from "./theme";

export const Base = styled.div`
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

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
`;

const ThemeProvider = ({ customTheme, customBreakpoints, ...props }) => {
  const breakpoints = customBreakpoints || nextTheme.breakpoints;
  let theme = customTheme || nextTheme;
  if (customTheme) {
    theme = {
      ...nextTheme,
      breakpoints
    };
  } else {
    theme = {
      ...nextTheme,
      breakpoints
    };
  }


  return (
      <StyledThemeProvider theme={theme}>
        <Base {...props} />
      </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  customBreakpoints: PropTypes.arrayOf(PropTypes.number)
};

ThemeProvider.defaultProps = {
  theme: nextTheme,
  customBreakpoints: nextTheme.breakpoints
};

export default ThemeProvider;
