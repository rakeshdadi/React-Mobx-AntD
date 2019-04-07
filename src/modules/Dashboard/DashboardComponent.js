import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Row, Col, Card, Icon } from 'antd';
import { Text, Progress } from '../../framework/components';
import Page from '../../layout/Page';
import TasksComponent from './TasksComponent';
import PrescriptionsComponent from './PrescriptionsComponent';
import OrdersComponent from './OrdersComponent';

const { Meta } = Card;

@inject('CommonStore')
@observer
class DashboardComponent extends React.Component {


    onClickOrderId = (id) => (param) => {
        console.log('console log', id)
    }

    defineColor = (value) => {
        switch (value) {
            case 'on_hold':
                return 'red';
            case 'in_process':
                return 'black'
        }
    }
    render() {
        const { className } = this.props;
        const { ordersList, orderStatus } = this.props.CommonStore;

        return (
            <Page pageHeaderText="Hello, Nancy" className={className}>
                <Row>
                    <Col xs={24} sm={24} md={14} lg={14}>
                        <TasksComponent
                            className={className}
                            status={orderStatus}
                            defineColor={this.defineColor}
                        />
                        <PrescriptionsComponent />
                        <OrdersComponent
                            className={className}
                            ordersList={ordersList}
                            defineColor={this.defineColor}
                            onClickOrderId={this.onClickOrderId}
                        />
                    </Col>
                    <Col md={2} lg={2}></Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <Card style={{ height: 300 }}>
                            <Meta
                                title="Your Health Plan"
                                description="Individual Deductible"
                                style={{ textAlign: 'center' }}
                            />
                            <div style={{ margin: 10, textAlign: 'center' }}>
                                <Progress type="dashboard" strokeColor="#62a095" percent={75} strokeWidth={12} />
                                <p>untill your $300 Deductble is met</p>
                            </div>
                            <Text type="span" color="red" size="small">
                                Your Insurance coverage details <Icon type="right" />
                            </Text> <br />
                            <Text type="span" color="red" size="small">
                                Your copay details <Icon type="right" />
                            </Text>
                        </Card>
                    </Col>
                </Row>
            </Page>
        )
    }
}

const StyledDashboardComponent = styled(DashboardComponent)`

`
export default withRouter(StyledDashboardComponent);