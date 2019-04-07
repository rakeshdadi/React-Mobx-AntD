import React from 'react';
import styled from 'styled-components';
import { Divider, Text } from '../../framework/components'
import { Icon } from 'antd';
import { READABLE_STATUSES } from '../../constants';


const TasksComponent = ({
    className,
    status,
    defineColor
}) => {

    return (
        <div className={className}>
            <h3> Your Tasks</h3>
            <Text type="span" color="red" size="medium">
                <Icon type="exclamation-circle" />
            </Text>
            <Text type="span" color="black" size="medium">
                Ask your doctor to contact us
            </Text> <br />
            <Text type="span" color="gray" size="small">
                Your order is <Text color={defineColor(status)} size="small">{READABLE_STATUSES[status]}</Text> because we need some additional information
                about the prescrition listed
            </Text>
            <Divider></Divider>
        </div>
    )
}

const StyledTasksComponent = styled(TasksComponent)`

`
export default StyledTasksComponent;