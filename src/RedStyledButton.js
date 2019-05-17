import styled from "styled-components";
import StyleButton from "./StyledButton";
import theme from "./theme";

const RedStyledButton = styled(StyleButton)`
  background-color: ${props => props.theme.colors.darkRed};
  box-shadow: inset 0 0 0 0 ${props => props.theme.colors.red},
  ${props => props.theme.boxShadows[0]};

  &:hover {
    box-shadow: inset ${props => props.shiftLeft} 0 0 0 ${props =>
  props.disabled ? null : props.theme.colors.red},
    ${props => props.theme.boxShadows[2]};
  }
`;

RedStyledButton.defaultProps = {
  theme: theme,
  shiftLeft: "96px"
};

RedStyledButton.displayName = "RedStyledButton";

export default RedStyledButton;
