import styled from "styled-components";
import PropTypes from "prop-types";
import { width, space } from "styled-system";
import theme from "./theme";
import { mapProps, deprecatedPropType } from "./utils";

const size = props => {
  switch (props.size) {
    case "small":
      return {
        fontSize: `${props.theme.fontSizes[0]}px`,
        padding: "7px 12px"
      };
    case "medium":
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: "9.5px 18px"
      };
    case "large":
      return {
        fontSize: `${props.theme.fontSizes[2]}px`,
        padding: "12px 22px"
      };
    default:
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: "9.5px 18px"
      };
  }
};

const Button = mapProps(({ fullWidth, ...props }) => ({
  width: fullWidth ? 1 : undefined,
  ...props
}))(styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: ${props => props.theme.bold};
  line-height: 1.5;
  cursor: pointer;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color]};
  border-width: 0;
  border-style: solid;
  box-shadow: ${props => props.boxShadow==="none" ? "none" : props.theme.boxShadows[0]};

  &:disabled {
    opacity: 0.25;
  }

  &:hover {
    color: ${props => props.theme.colors[props.hoverColor]}
    background-color: ${props =>
    props.disabled ? null : props.theme.colors[props.hoverBg]};
    box-shadow: ${props => props.boxShadow==="none" ? "none" : props.theme.boxShadows[2]};
  }

  ${width} ${size} ${space};
`);

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ...width.propTypes,
  ...space.propTypes,
  fullWidth: deprecatedPropType("width"),
  color: PropTypes.string,
  bg: PropTypes.string,
  hoverBg: PropTypes.string
};

Button.defaultProps = {
  theme: theme,
  color: "white",
  hoverColor: "white",
  bg: "primary",
  hoverBg: "darkPrimary",
  boxShadow: "yes"
};

Button.displayName = "Button";

export default Button;
