import styled from "styled-components";
import StyleButton from "./StyledButton";
import theme from "./theme";

const InfoStyledButton = styled(StyleButton)`
  background-color: ${props => props.theme.colors.darkInfo};
  box-shadow: inset 0 0 0 0 ${props => props.theme.colors.info},
  ${props => props.theme.boxShadows[0]};

  &:hover {
    box-shadow: inset ${props => props.shiftLeft} 0 0 0 ${props =>
  props.disabled ? null : props.theme.colors.info},
    ${props => props.theme.boxShadows[2]};
  }
`;

InfoStyledButton.defaultProps = {
  theme: theme,
  shiftLeft: "96px"
};

InfoStyledButton.displayName = "InfoStyledButton";

export default InfoStyledButton;
