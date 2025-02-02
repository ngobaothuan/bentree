import "../App.css";
import PhotoAndText from "../components/PhotoAndText";
import homePageItems from "../data/homePageItems.json";
import { Layout, Col, Row, Typography, Grid } from "antd";
import { ContactButtons } from "../components/ContactButtons";
import { useNavigate } from "react-router-dom";

function TrangChu() {
  const { Content } = Layout;
  const { Title } = Typography;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const onGalleryClick = () => {
    navigate("/phong-trung-bay");
  };

  return (
    <>
      <Title
        level={1}
        type={"secondary"}
        style={{
          textAlign: "center",
          fontSize: screens.xs ? "1.2rem" : "1.8rem"
        }}
      >
        Vườn Tùng Vạn Niên lớn nhất Bến Tre - Chuyên Cung Cấp Sỉ Lẻ
      </Title>
      <Content
        style={{
          alignItems: "center",
          justifyItems: "center",
          alignContent: "center",
          width: "100%",
          margin: "0 auto",
          maxWidth: "52rem"
        }}
      >
        <Row
          style={{
            justifyContent: "center",
            margin: "1rem 2rem"
          }}
        >
          <ContactButtons />
        </Row>
        <Row style={{
          justifyContent: "center",
          margin: "0 1rem"
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
          <Col span={24}
               style={{
                 justifyItems: "center"
               }}>
            <PhotoAndText
              imgSrc="carousel-1.jpg"
              imgAlt="Phòng Trưng Bày"
              headingText="Phòng Trưng Bày"
              descriptionText="Nhấn vào đây để xem khu vườn."
              onClick={onGalleryClick}
              hoverable={true}
            />
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default TrangChu;
