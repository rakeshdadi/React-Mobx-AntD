import React from 'react';
import AntInput from 'antd/lib/input';
import styled from 'styled-components';
import 'antd/lib/form/style/css';

const Input = props => <AntInput {...props} />;

const StyledInput = styled(Input)``;

StyledInput.Search = AntInput.Search;
StyledInput.Group = AntInput.Group;

export default StyledInput;
