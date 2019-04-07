import React from 'react';
import styled from 'styled-components';
import AppLayout from './AppLayout';
import { Row, Col, Icon } from 'antd';
import { Text } from '../framework/components';

const Page = ({ className, children, pageHeaderText, pageName }) => (
  <AppLayout className={className}>
    <div className="main-content">
      <Row>
        <Col xs={12} sm={18} md={18} lg={18}>
          <h3><b>{pageHeaderText}</b></h3>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Text type="span" color="red" size="medium" style={{float: 'right'}}>
            Go to the full site <Icon type="right" />
          </Text>
        </Col>
      </Row>
      <div className="content">{children}</div>
    </div>
  </AppLayout>
);

const StyledPage = styled(Page)`
.main-content{
  margin-top : 100px;
}
@media only screen and (max-device-width: 414px) {
  .main-content{
    margin-top : 50px;
  }
}
`;

export default StyledPage;
