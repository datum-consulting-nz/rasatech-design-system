import palx from "palx";

const createMediaQuery = n => `@media screen and (min-width:${n})`;

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

export const breakpoints = [32, 40, 48, 64].map(n => n + "em");

export const mediaQueries = breakpoints.map(createMediaQuery);

const aliases = ["sm", "md", "lg", "xl"];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

export const space = [0, 4, 8, 16, 32, 64, 128];

export const font = `'Source Sans Pro',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif`;
export const headingFont = `Roboto,'Source Sans Pro', 'Helvetica Neue',Helvetica,Arial,sans-serif`;
export const monoFont = "SFMono-Regular,\"Roboto Mono\",Menlo,monospace";

export const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72];

export const medium = 400;
export const bold = 700;
// alias
export const regular = medium;

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  medium,
  bold,
  // alias
  regular
};

export const lineHeights = {
  standard: 1.5,
  display: 1.25
};

const letterSpacings = {
  normal: "normal",
  caps: "0.025em"
};

export const textStyles = {
  display8: {
    fontSize: fontSizes[8] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display7: {
    fontSize: fontSizes[7] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display6: {
    fontSize: fontSizes[6] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display5: {
    fontSize: fontSizes[5] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display4: {
    fontSize: fontSizes[4] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display3: {
    fontSize: fontSizes[3] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display2: {
    fontSize: fontSizes[2] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display1: {
    fontSize: fontSizes[1] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display
  },
  display0: {
    fontSize: fontSizes[0] + "px",
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.display,
    letterSpacing: letterSpacings.caps,
    textTransform: "uppercase"
  },
  body2: {
    fontSize: fontSizes[2] + "px",
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.standard
  },
  body1: {
    fontSize: fontSizes[1] + "px",
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.standard
  },
  body0: {
    fontSize: fontSizes[0] + "px",
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.standard
  }
};

const seedColor = "#FE1717";
export const palette = palx(seedColor);

export const brandColors = {
  primary: "#4F944D",
  lightPrimary: "#7BB45F",
  darkPrimary: "#23733B",
  accent: palette.red[6],
  lightAccent: palette.red[4],
  darkAccent: palette.red[8],
  info: palette.blue[6],
  lightInfo: palette.blue[4],
  darkInfo: palette.blue[8],
  background: "#EDF2E7",
  backgroundDark: "#304549",
  text: "#131e1a",
  transparent: "transparent"
};

export const grayColors = {
  white: "#FFF",
  lightGray: "#EDF2E7",
  buttonGray: "#BEC7C0",
  borderGray: "#8F9C98",
  gray: "#5F7071",
  darkGray: "#304549",
  black: "#000",
};

export const spectrumColors = {
  red: palette.red[5],
  orange: palette.orange[5],
  yellow: palette.yellow[5],
  lime: palette.lime[5],
  green: palette.green[5],
  teal: palette.teal[5],
  cyan: palette.cyan[5],
  blue: palette.blue[5],
  indigo: palette.indigo[5],
  violet: palette.violet[5],
  fuschia: palette.fuschia[5],
  pink: palette.pink[5]
};

export const extendedSpectrumColors = {
  lightRed: palette.red[4],
  darkRed: palette.red[7],
  lightOrange: palette.orange[4],
  darkOrange: palette.orange[7],
  lightLime: palette.lime[4],
  darkLime: palette.lime[7],
  lightGreen: palette.green[4],
  darkGreen: palette.green[7],
  lightTeal: palette.teal[4],
  darkTeal: palette.teal[7],
  lightCyan: palette.cyan[4],
  darkCyan: palette.cyan[7],
  lightBlue: palette.blue[4],
  darkBlue: palette.blue[7],
  lightIndigo: palette.indigo[4],
  darkIndigo: palette.indigo[7],
  lightViolet: palette.violet[4],
  darkViolet: palette.violet[7],
  lightFuschia: palette.fuschia[4],
  darkFuschia: palette.fuschia[7],
  lightPink: palette.pink[4],
  darkPink: palette.pink[7]
};

const colors = {
  ...brandColors,
  ...grayColors,
  ...spectrumColors,
  ...extendedSpectrumColors
};

export { colors };

export const colorStyles = {
  whiteOnText: {
    color: colors.white,
    backgroundColor: colors.text
  },
  whiteOnGray: {
    color: colors.white,
    backgroundColor: colors.gray
  },
  textOnLightGray: {
    color: colors.text,
    backgroundColor: colors.lightGray
  },
  whiteOnBlue: {
    color: colors.white,
    backgroundColor: colors.blue
  },
  blueOnLightBlue: {
    color: colors.blue,
    backgroundColor: colors.lightBlue
  },
  whiteOnGreen: {
    color: colors.white,
    backgroundColor: colors.green
  },
  greenOnLightGreen: {
    color: colors.green,
    backgroundColor: colors.lightGreen
  },
  whiteOnRed: {
    color: colors.white,
    backgroundColor: colors.red
  },
  redOnLightRed: {
    color: colors.red,
    backgroundColor: colors.lightRed
  },
  textOnOrange: {
    color: colors.text,
    backgroundColor: colors.orange
  },
  whiteOnPurple: {
    color: colors.white,
    backgroundColor: colors.purple
  },
  purpleOnLightPurple: {
    color: colors.purple,
    backgroundColor: colors.lightPurple
  },
  textOnWhite: {
    color: colors.text,
    backgroundColor: colors.white
  },
  grayOnWhite: {
    color: colors.gray,
    backgroundColor: colors.white
  },
  blueOnWhite: {
    color: colors.blue,
    backgroundColor: colors.white
  },
  greenOnWhite: {
    color: colors.green,
    backgroundColor: colors.white
  },
  redOnWhite: {
    color: colors.red,
    backgroundColor: colors.white
  },
  purpleOnWhite: {
    color: colors.purple,
    backgroundColor: colors.white
  },
  whiteOnDarkOrange: {
    color: colors.white,
    backgroundColor: colors.darkOrange
  }
};

colorStyles.info = colorStyles.textOnLightGray;
colorStyles.success = colorStyles.whiteOnGreen;
colorStyles.warning = colorStyles.textOnOrange;
colorStyles.danger = colorStyles.whiteOnRed;

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = [0, 5, 10];
export const radius = "5px";

export const maxContainerWidth = "1280px";

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
];

// animation duration
export const duration = {
  fast: `150ms`,
  normal: `300ms`,
  slow: `450ms`,
  slowest: `600ms`
};

// animation easing curves
const easeInOut = "cubic-bezier(0.5, 0, 0.25, 1)";
const easeOut = "cubic-bezier(0, 0, 0.25, 1)";
const easeIn = "cubic-bezier(0.5, 0, 1, 1)";

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn
};

// animation delay
const transitionDelays = {
  small: `150ms`,
  medium: `300ms`,
  large: `450ms`,
  xLarge: `600ms`
};

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  headingFont,
  monoFont,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  regular,
  bold,
  textStyles,
  brandColors,
  spectrumColors,
  extendedSpectrumColors,
  grayColors,
  colors,
  colorStyles,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  duration,
  timingFunctions,
  transitionDelays
};

export default theme;
