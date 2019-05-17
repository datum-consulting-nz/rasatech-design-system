import styled from "styled-components";
import Button from "./Button";
import theme from "./theme";

const InfoButton = styled(Button)`
  background-color: ${props => props.theme.colors.info};

  &:hover {
    background-color: ${props =>
  props.disabled ? null : props.theme.colors.darkInfo};
  }
`;

InfoButton.defaultProps = {
  theme: theme
};

export default InfoButton;
