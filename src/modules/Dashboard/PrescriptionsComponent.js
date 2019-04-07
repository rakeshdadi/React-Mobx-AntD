import React from 'react';
import styled from 'styled-components';
import { Divider, Text, Label, Input } from '../../framework/components';
import { Icon, Row, Col } from 'antd';

const Search = Input.Search;

class PrescriptionsComponent extends React.Component {

    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <h3>Your Prescriptions </h3>
                <Text type="p" color="red" size="medium">
                    3 Prescriptions ready for Refill
                    <Icon type="right" />
                </Text>
                <Label>Find a new medication</Label>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Search
                            placeholder="Enter drug name"
                            enterButton="Search"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </Col>
                </Row>

                <Divider></Divider>
            </div>
        )
    }
}

const StyledPrescriptionsComponent = styled(PrescriptionsComponent)`
.ant-btn-primary {
    color: white;
    background-color: ${props => props.theme.color.red};
    border-color : ${props => props.theme.color.red};
    &:hover {
      color: white;
      background-color: ${props => props.theme.color.red};
      border-color : ${props => props.theme.color.red};
    }
  }
`
export default StyledPrescriptionsComponent;