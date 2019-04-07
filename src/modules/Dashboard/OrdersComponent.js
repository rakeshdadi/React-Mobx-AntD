import React from 'react';
import styled from 'styled-components';
import { Icon, Row, Col } from 'antd';
import { Text, Table, Divider, } from '../../framework/components'
import { READABLE_STATUSES } from '../../constants';


const OrdersComponent = ({
    className,
    ordersList,
    defineColor,
    onClickOrderId,
}) => {

    const orderDetails = (
        defineColor,
        onClickOrderId
    ) => {
        return [{
            title: '',
            dataIndex: 'orderNumber',
            key: 'orderNumber',
            render: (text, record) => (
                <u>
                    <Text onClick={onClickOrderId(record.orderNumber)} type="link" color="black" size="medium">
                        Order {text}
                    </Text>
                </u>
            )
        }, {
            title: '',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <span>Placed on {record.date} for {record.name} </span>
            )
        }, {
            title: '',
            dataIndex: 'strips',
            key: 'strips',
            render: (text) => (
                <span>{text}</span>
            )
        }, {
            title: '',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => (
                <Text size="small" color={defineColor(record.status)}>{READABLE_STATUSES[record.status]}</Text>
            )
        }
        ]
    }
    return (
        <div className={className}>
            <h3> {ordersList.length} Recent Orders </h3>
            <Table
                loading={false}
                showHeader={false}
                columns={orderDetails(defineColor, onClickOrderId)}
                dataSource={ordersList && ordersList.toJS()}
                rowKey={(record, index) => index}
                pagination={false}
            />
            {
                ordersList.map((record, index) => {
                    return <div key={index} className="mobile-orders-wrap">
                        <Row gutter={24} justify="space-around">
                            <Col xs={18} sm={18}>
                                <u>
                                    <Text type="link" color="black" size="small" onClick={onClickOrderId(record.orderNumber)}>
                                        Order {record.orderNumber}
                                    </Text>
                                </u>
                            </Col>
                            <Col xs={6} sm={6}>
                                <Text size="small" color={defineColor(record.status)}>
                                    {READABLE_STATUSES[record.status]}
                                </Text>
                            </Col>
                            <Col xs={18} sm={218}>
                                <Text size="small">
                                    Placed on {record.date} for {record.name}
                                </Text>
                            </Col>
                            <Col xs={6} sm={6}>
                                <Text size="small">
                                    {record.strips}
                                </Text>
                            </Col>
                        </Row>
                    </div>
                })
            }
            <Text type="p" color="red" size="large">
                View all orders <Icon type="right" />
            </Text>
            <Divider></Divider>
        </div>
    )
}

const StyledOrdersComponent = styled(OrdersComponent)`
.mobile-orders-wrap {
    display : none;
}
@media only screen and (max-device-width: 414px) {
    .ant-table-wrapper {
        display : none
    }
    .mobile-orders-wrap {
        display : -webkit-box;
        flex-wrap: nowrap;
    }
}
`
export default StyledOrdersComponent;