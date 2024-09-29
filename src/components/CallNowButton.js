import { PhoneFilled, EnvironmentFilled } from "@ant-design/icons";
import { Button, Col, Flex, Row } from "antd";

export const CallNowButton = () => {
  const phoneNumber = "0916925019";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleClick = () => {
    const googleMapsUrl = "https://maps.app.goo.gl/JP79ELkpuhSQpfmW9";
    window.open(googleMapsUrl, "_blank");
  };
  return (
    <Flex gap="middle" horizontal justify="center">
      <Flex wrap gap="middle">
        <Row gutter={8}>
          <Col>
            <Button
              type="primary"
              icon={<PhoneFilled />}
              onClick={handleCall}
              className="bg-green-500 hover:bg-green-600 text-white font-bold rounded"
            >
              Liên Hệ: 0916 925 019
            </Button>
          </Col>
          <Col>
            <Button
              type="default"
              icon={<EnvironmentFilled />}
              onClick={handleClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold rounded"
            >
              Địa chỉ trên Google Maps
            </Button>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};
