import React from 'react';
import AntInput from 'antd/lib/input';
import styled from 'styled-components';
import 'antd/lib/input/style/css';

const TextArea = props => <AntInput.TextArea {...props} />;

const StyledTextArea = styled(TextArea)``;

export default StyledTextArea;
