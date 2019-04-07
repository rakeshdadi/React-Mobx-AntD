import React from 'react';
import AntCard from 'antd/lib/card';
import 'antd/lib/card/style/css';
import styled from 'styled-components';

const Card = ({ children, ...props }) => (
  <AntCard {...props}>{children}</AntCard>
);

const StyledCard = styled(Card)`
  border-radius: 4px;
  .ant-card-head {
    padding: 0 16px;
    border-bottom: none;
  }
  .ant-card-head-title {
    padding: 12px 0;
  }

  &.ant-card-wider-padding .ant-card-body {
    padding: 16px;
  }

  .ant-card-body,
  .ant-card-wider-padding {
    padding: ${props => (props.title ? '4px 16px 16px 16px' : '16px')};
  }

  &.ant-card-wider-padding .ant-card-head {
    padding: 0 16px;
  }
`;

export default StyledCard;
