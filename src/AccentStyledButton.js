import styled from "styled-components";
import StyleButton from "./StyledButton";
import theme from "./theme";

const AccentStyledButton = styled(StyleButton)`
  background-color: ${props => props.theme.colors.darkAccent};
  box-shadow: inset 0 0 0 0 ${props => props.theme.colors.accent},
  ${props => props.theme.boxShadows[0]};

  &:hover {
    box-shadow: inset ${props => props.shiftLeft} 0 0 0 ${props =>
    props.disabled ? null : props.theme.colors.accent},
    ${props => props.theme.boxShadows[2]};
  }
`;

AccentStyledButton.defaultProps = {
  theme: theme,
  shiftLeft: "96px"
};

AccentStyledButton.displayName = "AccentStyledButton";

export default AccentStyledButton;
