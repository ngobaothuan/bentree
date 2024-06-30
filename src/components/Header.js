import logo from "../Picture1.png";

import { Row, Col } from 'antd';

function Header() {
  return (
    <div style={{ backgroundColor: '#597445', padding: '0.25rem 0', color: 'white', width:"100vw", height:'4rem' }}>
        <Row align="middle">
        <Col span ={1}>
          <img src={logo} alt="Logo" style={{ maxWidth: '10rem',width: '3.5rem', height: '3rem' }} />
        </Col>
         {/* <Col span ={2} offset ={8}>
          <a href="google.com" style={{ color: 'white' }}>Tìm Hiểu Thêm</a>
        </Col>
        <Col span ={1}>
          <a href="google.com" style={{ color: 'white' }}>Liên Hệ</a>
        </Col>
        <Col span ={1}>
        <a href="google.com" style={{ color: 'white' }}>Địa chỉ</a>
        </Col> */}
        <Col span={4} offset ={16} style={{ textAlign: 'right', fontSize:'1.2rem' }}>
          <a href="https://google.com" style={{ color: 'white', marginRight: '1rem' }}>Tìm Hiểu Thêm</a>
          <a href="https://google.com" style={{ color: 'white', marginRight: '1rem' }}>Liên Hệ</a>
          <a href="https://google.com" style={{ color: 'white' }}>Địa chỉ</a>
        </Col>
        </Row>
    </div>
  );
}

export default Header;
