import styled from "styled-components";
import StyleButton from "./StyledButton";
import theme from "./theme";

const GreenStyledButton = styled(StyleButton)`
  background-color: ${props => props.theme.colors.darkGreen};
  box-shadow: inset 0 0 0 0 ${props => props.theme.colors.green},
  ${props => props.theme.boxShadows[0]};

  &:hover {
    box-shadow: inset ${props => props.shiftLeft} 0 0 0 ${props =>
    props.disabled ? null : props.theme.colors.green},
    ${props => props.theme.boxShadows[2]};
  }
`;

GreenStyledButton.defaultProps = {
  theme: theme,
  shiftLeft: "96px"
};

GreenStyledButton.displayName = "GreenStyledButton";

export default GreenStyledButton;
