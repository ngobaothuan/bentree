import "../App.css";
import PhotoAndText from "../components/PhotoAndText";
import homePageItems from "../data/homePageItems.json";
import { Layout, Col, Row } from "antd";
import { ContactButtons } from "../components/ContactButtons";

function TrangChu() {
  const { Content } = Layout;

  return (
    <Content
      style={{
        justifyItems: "center",
        alignContent: "center"
      }}
    >
      <Row
        style={{
          margin: "0 2rem",
          maxWidth: "60rem",
          justifyItems: "center",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <ContactButtons />
      </Row>
      <Row style={{
        justifyContent: "center",
        margin: "1rem"
      }}>
        {homePageItems.map((item, index) => {
          const key = `${item.title}-${index}`;
          return (
            <Col key={key} sm={24} md={12}
                 style={{
                   justifyItems: "center"
                 }}>
              <PhotoAndText
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                headingText={item.title}
                descriptionText={item.description}
              />
            </Col>
          );
        })}
      </Row>
    </Content>
  );
}

export default TrangChu;
