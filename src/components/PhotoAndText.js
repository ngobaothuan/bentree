import { Card } from "antd";

const { Meta } = Card;

const PhotoAndText = ({
                        imgSrc,
                        imgAlt,
                        headingText,
                        descriptionText
                      }) => {
  return (
    <Card
      cover={<img alt={imgAlt} src={imgSrc} />}
      style={{ margin: "1rem", maxWidth: "30rem" }}
    >
      <Meta title={headingText} description={descriptionText} />
    </Card>
  );
};
export default PhotoAndText;
