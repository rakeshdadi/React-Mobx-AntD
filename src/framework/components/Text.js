import React from 'react';
import styled from 'styled-components';

const Text = ({ type, block, highlight, noHref, children, ...props }) => {
  const Element = <span {...props}>{children}</span>;
  switch (type) {
    case 'span':
      return Element;
    case 'p':
      return <p {...props}>{children}</p>;
    case 'link':
      if (noHref) return <span {...props}>{children}</span>;
      return <a {...props}>{children}</a>;
    default:
      return Element;
  }
};

const StyledHeading = styled(Text)`
  ${({ type = 'span', theme }) => `
    font-size: ${theme.text[type].size};
    font-weight: ${theme.text[type].weight};
    color: ${theme.text[type].color};
  `} ${({ color, theme }) => color && `color: ${theme.color[color]};`} ${({
      block
    }) => block && 'display: block;'} ${({ size }) =>
      size && `font-size: ${size};`} ${({ weight }) =>
      weight && `font-weight: ${weight};`} ${({ highlight, theme }) =>
      highlight &&
      `
    background-color: ${
      typeof highlight === 'string'
        ? theme.color[highlight]
        : theme.color.yellowLight
    };
    padding: 0 .4rem;
  `};
`;

export default StyledHeading;
