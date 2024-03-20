import React from 'react';
import { Row, Col, Typography } from 'antd';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Typography.Title> 
{title}
</Typography.Title> 



    // <Row
    //   justify="center"
    //   align="middle"
    //   style={{ height: 64, backgroundColor: '#f0f2f5', width: '100%' }}
    // >
    //   <Col>
    //     <Typography.Title level={2}>{title}</Typography.Title>
    //   </Col>
    // </Row>
  );
};

export default Header;
