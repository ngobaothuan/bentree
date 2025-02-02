import { Image, Layout, Grid, Card, Row, Col, Button } from "antd";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

function PhongTrungBay() {

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const Images = [
    "IMG_1777.jpg",
    "IMG_1795.jpg",
    "IMG_1799.jpg",
    "IMG_1821.jpg",
    "IMG_1823.jpg",
    "stump.jpg",
    "garden.jpg"
  ];

  const CarouselImages = [
    "carousel-1.jpg",
    "carousel-2.jpg",
    "carousel-3.jpg"
  ];

  return (
    <>
      <Title
        level={1}
        type={"secondary"}
        style={{
          textAlign: "center",
          fontSize: screens.xs ? "1.2rem" : "1.8rem",
          marginBottom: "2rem"
        }}
      >
        Phòng Trưng Bày
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
        <Card>
          <Row>
            {Images.map((img) => (
              <Col key={img} span={24} sm={12} md={8} lg={6} style={{ padding: "0.5rem" }}>
                <Image
                  src={img}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill"
                  }}
                />
              </Col>
            ))}
            <Col span={24} sm={12} md={8} lg={6} style={{ padding: "0.5rem" }}>
              {CarouselImages.map((img) => (
                <Col
                  key={img}
                  span={24}
                  style={{ paddingBottom: "0.5rem" }}>
                  <Image
                    key={img}
                    src={img}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                      boxSizing: "border-box"

                    }}
                  />
                </Col>
              ))}
            </Col>
          </Row>
        </Card>
      </Content>
    </>
  );
}

export default PhongTrungBay;