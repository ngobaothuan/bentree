import { Layout, Card, Row, Col, Button, Typography, Space } from "antd";
import { PhoneFilled, MailFilled } from "@ant-design/icons";
import contactDetails from "../data/contactDetails.json";
import handlePhoneNumberClick from "../utils/handlePhoneNumberClick";
import handleEmailClick from "../utils/handleEmailClick";
import handleGoogleMapLocationClick from "../utils/handleGoogleMapLocationClick";

const { Text } = Typography;
const { Content } = Layout;

function LienHe() {

  return (
    <>
      <Content
        style={{
          alignItems: "center",
          justifyItems: "center",
          alignContent: "center",
          width: "100%",
          margin: "0 auto"
        }}
      >
        <Row gutter={16}
             style={{
               width: "100%",
               maxWidth: "60rem",
               padding: "1rem"
             }}
        >
          <Col xs={24} md={12} style={{
            marginBottom: "1rem"
          }}>
            <Card title="Contact" bordered={false}>
              <Space
                direction="vertical">
                <Space>
                  <Text strong>
                    Điện thoại:
                  </Text>
                  <Text
                    copyable={{ text: contactDetails.phoneNumber }} />
                </Space>
                <Button
                  type="link"
                  icon={<PhoneFilled />}
                  onClick={handlePhoneNumberClick}
                >
                  {contactDetails.phoneNumber}
                </Button>
                <Space direction={"horizontal"}>
                  <Text strong>
                    Email:
                  </Text>
                  <Text
                    copyable={{ text: contactDetails.email }} />
                </Space>
                <Button
                  type="link"
                  icon={<MailFilled />}
                  onClick={handleEmailClick}
                >
                  {contactDetails.email}
                </Button>
                <Space direction={"horizontal"}>
                  <Text strong>
                    Address:
                  </Text>
                  <Text
                    copyable={{ text: `${contactDetails.address.street}, ${contactDetails.address.town}, ${contactDetails.address.district}, ${contactDetails.address.province}, ${contactDetails.address.country}` }} />
                </Space>
                <Space
                  direction={"vertical"}
                  style={{
                    paddingLeft: "1rem"
                  }}
                >
                  <Space direction={"horizontal"}>
                    <Text>
                      {contactDetails.address.street},
                    </Text>
                    <Text>
                      {contactDetails.address.town}
                    </Text>
                  </Space>
                  <Text>
                    {contactDetails.address.district}
                  </Text>
                  <Text>
                    {contactDetails.address.province}
                  </Text>
                  <Text>
                    {contactDetails.address.country}
                  </Text>
                </Space>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card hoverable
                  onClick={handleGoogleMapLocationClick}
                  title="Location on Google Maps"
                  bordered={false}
            >
              <iframe
                title={"Bentree Google Maps Location"}
                src={contactDetails.googleMapsURL.embedLink}
                width="100%" height="400rem"
                style={{ border: "0" }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Card>
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default LienHe;
