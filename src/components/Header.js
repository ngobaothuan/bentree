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
        <Col sm={20}>
          <Row justify="end">
            <Button style={{ marginRight: "1rem" }} onClick={() => {}} ghost>
              Tìm Hiểu Thêm
            </Button>
            <Button style={{ marginRight: "1rem" }} onClick={() => {}} ghost>
              Liên Hệ
            </Button>
            <Button style={{ marginRight: "1rem" }} onClick={() => {}} ghost>
              Địa chỉ
            </Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
