import { PhoneFilled, EnvironmentFilled } from "@ant-design/icons";
import { Button, Space, Col, Grid } from "antd";

export const ContactButtons = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const buttonSize = screens.xs ? "middle" : "large";

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
          block
          type="primary"
          size={buttonSize}
          icon={<PhoneFilled />}
          onClick={handleCall}
        >
          ĐT: {phoneNumber}
        </Button>
        <Button
          block
          type="default"
          size={buttonSize}
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