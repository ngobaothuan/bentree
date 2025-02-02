import { Card, Image } from "antd";

const { Meta } = Card;

const PhotoAndText = ({
                        imgSrc,
                        imgAlt,
                        headingText,
                        descriptionText,
                        hoverable = false,
                        onClick = null
                      }) => {
  return (
    <Card
      onClick={onClick}
      hoverable={hoverable}
      cover={<Image alt={imgAlt} src={imgSrc} preview={false} />}
      style={{ margin: "1rem", maxWidth: "48rem" }}
    >
      <Meta title={headingText} description={descriptionText} />
    </Card>
  );
};
export default PhotoAndText;
