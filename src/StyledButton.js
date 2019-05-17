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
        padding: "7px 10px"
      };
    case "medium":
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: "10px 15px"
      };
    case "large":
      return {
        fontSize: `${props.theme.fontSizes[2]}px`,
        padding: "13px 20px"
      };
    default:
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: "10px 15px"
      };
  }
};

const shiftTextLeft = props => {
  switch (props.size) {
    case "small":
      return "7px 15px 7px 5px";
    case "medium":
      return "10px 22px 10px 8px";
    case "large":
      return "13px 30px 13px 10px";
    default:
      return "10px 22px 10px 8px";
  }
};

const StyledButton = mapProps(({ fullWidth, ...props }) => ({
  width: fullWidth ? 1 : undefined,
  ...props
}))(styled.button`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  line-height: 1.5;
  cursor: pointer;
  font-weight: ${props => props.theme.bold};
  color: ${props => props.theme.colors.white};
  border-width: 0;
  border-style: solid;
  background-color: ${props => props.theme.colors.darkBlue};
  box-shadow: inset 0 0 0 0 ${props => props.theme.colors.blue},
  ${props => props.theme.boxShadows[0]};
  transition: ${props => props.theme.timingFunctions.easeInOut} 
  ${props => props.theme.transitionDelays.medium};

  &:disabled {
    opacity: 0.25;
  }

  &:hover {
    box-shadow: inset ${props => props.shiftLeft} 0 0 0 ${props =>
    props.disabled ? null : props.theme.colors.blue},
    ${props => props.theme.boxShadows[2]};
    padding: ${props => shiftTextLeft(props)};
  }

  ${width} ${size} ${space};
`);

StyledButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ...width.propTypes,
  ...space.propTypes,
  fullWidth: deprecatedPropType("width"),
  shiftLeft: PropTypes.string
};

StyledButton.defaultProps = {
  theme: theme,
  shiftLeft: "96px"
};

StyledButton.displayName = "StyledButton";

export default StyledButton;
