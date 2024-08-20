import "../App.css";
import { Layout, Typography } from "antd";

const { Title } = Typography;

function TimHieuThem() {
  const { Content } = Layout;

  return (
    <>
      <Content
        style={{
          margin: "0 1rem",
          justifyContent: "center",
          justifyItems: "center",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
        }}
      >
        <Title level={2}>Tìm Hiểu Thêm</Title>
      </Content>
    </>
  );
}

export default TimHieuThem;
