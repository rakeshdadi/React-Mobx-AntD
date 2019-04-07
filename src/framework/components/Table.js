import AntTable from 'antd/lib/table';
import 'antd/lib/table/style/css';
import styled from 'styled-components';

import React from 'react';

const Table = ({ children, ...props }) =>
  children ? (
    <AntTable {...props}>{children}</AntTable>
  ) : (
    <AntTable {...props} />
  );

const StyledTable = styled(Table)`
  margin-bottom: 24px;
  .ant-table-tbody > tr > td {
    color: #000000;
  }
  .ant-table-thead > tr > th {
    font-size: 12px;
    color: gray;
    padding: 8px 16px;
  }
  .ant-table-pagination.ant-pagination {
    text-align-last: center;
    float: none;
  }
`;

export default StyledTable;
