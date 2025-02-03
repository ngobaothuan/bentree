import { PhoneFilled, EnvironmentFilled } from "@ant-design/icons";
import { Button, Space, Col, Grid } from "antd";
import handlePhoneNumberClick from "../utils/handlePhoneNumberClick";
import handleGoogleMapLocationClick from "../utils/handleGoogleMapLocationClick";
import contactDetails from "../data/contactDetails.json";

export const ContactButtons = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const buttonSize = screens.xs ? "middle" : "large";

  return (
    <Col span={24}>
      <Space.Compact block>
        <Button
          block
          type="primary"
          size={buttonSize}
          icon={<PhoneFilled />}
          onClick={handlePhoneNumberClick}
        >
          ĐT: {contactDetails.phoneNumber}
        </Button>
        <Button
          block
          type="default"
          size={buttonSize}
          varient="outlined"
          icon={<EnvironmentFilled />}
          onClick={handleGoogleMapLocationClick}
        >
          Google Maps
        </Button>
      </Space.Compact>
    </Col>
  );
};