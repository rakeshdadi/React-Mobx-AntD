import React from 'react';
import styled from 'styled-components';
import { classNames } from '../helpers';

const Divider = ({ className }) => (
  <span className={classNames('Divider', className)} />
);

const StyledDevider = styled(Divider)`
  height: 1px;
  background-color: ${props => props.theme.color.grayLight};
  display: block;
  margin: ${props => props.space || 16}px 0px;
  ${props =>
    props.vertical &&
    `
    ${props.vertical &&
      `
      width: 1px;
      height: ${props.vertical}px;
      display: inline-block;
      margin: 0 ${props.space || 16}px;
    `}
    
  `};
`;

export default StyledDevider;
