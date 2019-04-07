import React from 'react';
import styled from 'styled-components';
import AntMenu from 'antd/lib/menu';
import 'antd/lib/menu/style/css';

const Menu = ({ children, ...props }) => (
  <AntMenu {...props}>{children}</AntMenu>
);

const StyledMenu = styled(Menu)`
  .Icon {
    margin-right: 8px;
    ${props =>
      props.blueIcons &&
      `
      path {
        fill: ${props.theme.color.blue};
      }
    `};
  }
  a {
    display: flex;
    align-items: center;
  }
  ${props =>
    props.links &&
    `
    .ant-dropdown-menu-item {
      padding: 4px 4px;
      &:hover {
        background-color: transparent;
      }
      & > a, & > span {
        &:hover {
          background-color: #f2f8ff;
        }
        display: flex;
        align-items: center;
        color: ${props.theme.color.blue};
        padding: 8px 10px;       
      }
    }
  `} .space-between {
    display: flex;
    justify-content: space-between;
  }
`;

StyledMenu.SubMenu = AntMenu.SubMenu;
StyledMenu.Item = AntMenu.Item;
StyledMenu.ItemGroup = AntMenu.ItemGroup;
StyledMenu.Divider = AntMenu.Divider;

export default StyledMenu;
