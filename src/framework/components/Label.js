import React from 'react';
import styled from 'styled-components';
import { classNames } from '../helpers';

const Label = ({ className, children }) => (
  <span className={classNames('Label', className)}>{children}</span>
);

const StyledLabel = styled(Label)`
  display: inline-block;
  margin-bottom: 8px;
  color: ${props => props.theme.color.gray};
  ${props => props.width && `min-width: ${props.width}px;`} ${props =>
      props.marginBottom && `margin-bottom: ${props.marginBottom}px;`};
`;

export default StyledLabel;
