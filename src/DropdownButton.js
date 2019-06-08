import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import "rc-dropdown/assets/index.css";
import React, { PureComponent } from "react";
import Button from "./Button";
import styled from "styled-components";
import theme from "./theme";


const StyledDropDownMenu = styled(Menu)`
  transition: ${theme.timingFunctions.easeInOut} 
  ${theme.transitionDelays.medium};
  &.rc-dropdown-menu {
    margin: 0;
    border: 0;
    border-radius: 7.5px;
    box-shadow: ${theme.boxShadows[2]};
    
    .rc-dropdown-menu-item {
      cursor:pointer; 
      padding: 10px 12px;
      font-weight: ${theme.bold};
      color: ${theme.colors.text};
      &:hover, &-active  {
        color: #4F944D;
        background: ${theme.colors.white};
      } 
      &-selected {
        color: #23733B;
        background: ${theme.colors.white};
        &:after {
          content: none;
        }
      }
    }
    
    .rc-dropdown-menu-item:first-child {
      border-top-left-radius: ${theme.radius};
      border-top-right-radius: ${theme.radius};
    }
    
    .rc-dropdown-menu-item:last-child {
      border-bottom-left-radius: ${theme.radius};
      border-bottom-right-radius: ${theme.radius};
    }
  }
`;

// https://github.com/react-component/dropdown/blob/master/assets/index.less
// https://github.com/react-component/menu/blob/41b1cd2a75c8f380bff16c0a8de32ef87ef91d73/assets/index.less
const StyledButton = styled(Button)`
  &:after {
    content: "▼";
    color: ${theme.colors.accent}
  }
  font-size: ${theme.fontSizes[3]}px;
`;

const DropdownButton = (props) => {
  const menuItems = [
    <MenuItem key="1" onClick={() => window.open("/?path=/story/card--box-shadows-with-default-border")}>1st item aaaaaa</MenuItem>,
    <MenuItem key="2">2st item aaaaaa</MenuItem>,
    <MenuItem key="3">3nd item cccccc</MenuItem>
  ];
  const menu = (
    <StyledDropDownMenu>
      {menuItems}
    </StyledDropDownMenu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <StyledButton
          color={"text"}
          hoverColor={"darkPrimary"}
          bg={"white"}
          hoverBg={"white"}
          boxShadow={"none"}
        >
          {props.children}
        </StyledButton>
      </Dropdown>
    </div>
  );
};

export default DropdownButton;