import { PhoneFilled, EnvironmentFilled } from "@ant-design/icons";
import { Button, Col, Space } from "antd";

export const ContactButtons = () => {
  const phoneNumber = "0916 925 019";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleClick = () => {
    const googleMapsUrl = "https://maps.app.goo.gl/JP79ELkpuhSQpfmW9";
    window.open(googleMapsUrl, "_blank");
  };
  return (
    <Col span={24}>
      <Space.Compact block>
        <Button
          type="primary"
          size="large"
          icon={<PhoneFilled />}
          onClick={handleCall}
        >
          ĐT: {phoneNumber}
        </Button>
        <Button
          type="default"
          size="large"
          varient="outlined"
          icon={<EnvironmentFilled />}
          onClick={handleClick}
        >
          Google Maps
        </Button>
      </Space.Compact>
    </Col>
  );
};