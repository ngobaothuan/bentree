import { Row, Col, Typography } from "antd";
import useWindowDimensions from "../hooks/useWindowDimensions";

const { Paragraph } = Typography;

const PhotoAndText = ({
  imgSrc,
  headingText,
  descriptionText,
  imgPlacement,
}) => {
  const { width } = useWindowDimensions();

  return (
    <div style={{ padding: "1rem " }}>
      <Row gutter={16}>
        {(imgPlacement === "left" || width < 768) && (
          <Col sm={24} md={12}>
            <img
              src={imgSrc}
              alt="garden"
              style={{ maxWidth: "100%", width: "28rem" }}
            />
          </Col>
        )}
        <Col sm={24} md={12}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "28rem",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Paragraph
              style={{
                fontSize: "1.5rem",
                color: "black",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              {headingText}
            </Paragraph>
            <Paragraph
              style={{ fontSize: "1rem", color: "black", textAlign: "center" }}
            >
              {descriptionText}
            </Paragraph>
          </div>
        </Col>
        {imgPlacement === "right" && width > 768 && (
          <Col sm={24} md={12}>
            <img
              src={imgSrc}
              alt="garden"
              style={{ maxWidth: "100%", width: "28rem" }}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default PhotoAndText;
