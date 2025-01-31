import "../App.css";
import PhotoAndText from "../components/PhotoAndText";
import homePageItems from "../data/homePageItems.json";
import { Layout, Col, Row } from "antd";
import { CallNowButton } from "../components/CallNowButton";

function TrangChu() {
  const { Content } = Layout;

  return (
    <>
      <CallNowButton />
      <Content
        style={{
          justifyItems: "center",
          alignContent: "center"
        }}
      >
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
    </>
  );
}

export default TrangChu;
