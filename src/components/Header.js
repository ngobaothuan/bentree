import logo from "../Picture1.png";

import { Row, Col, Button } from "antd";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "#597445",
        padding: "0.25rem 0",
        color: "white",
        width: "100vw",
        height: "4rem",
      }}
    >
      <Row span={24} align="middle">
        <Col sm={4}>
          <img
            src={logo}
            alt="Logo"
            style={{ maxWidth: "10rem", width: "3.5rem", height: "3rem" }}
          />
        </Col>
        <Col offset={14} sm={6}>
          <Row span={24} align="middle">
            <Col span={8}>
              <Button onClick={() => {}} ghost>
                Tìm Hiểu Thêm
              </Button>
            </Col>
            <Col span={8}>
              <Button onClick={() => {}} ghost>
                Liên Hệ
              </Button>
            </Col>
            <Col span={8}>
              <Button onClick={() => {}} ghost>
                Địa chỉ
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
