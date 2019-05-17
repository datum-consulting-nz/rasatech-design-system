import styled from "styled-components";
import Button from "./Button";
import theme from "./theme";

const AccentButton = styled(Button)`
  background-color: ${props => props.theme.colors.accent};

  &:hover {
    background-color: ${props =>
  props.disabled ? null : props.theme.colors.darkAccent};
  }
`;

AccentButton.defaultProps = {
  theme: theme
};

AccentButton.displayName = "AccentButton";

export default AccentButton;
