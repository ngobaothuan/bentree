import { Row, Col, Typography } from 'antd';

const { Paragraph } = Typography;

const GardenPhotoAndText = () => (
    <div style={{ padding: '1rem ', }}>
  <Row gutter={16}>
    
    <Col span={12}>
    <div style={{ display: 'flex', alignItems: 'center', height: '28rem', justifyContent: 'center' ,flexDirection: 'column' }}>
    <Paragraph style={{ fontSize: '1.5rem', color: 'black', textAlign: 'center',marginBottom: '1rem' }}>Vườn lớn nhất Bến Tre hơn 1000 cây Tùng</Paragraph>
    <Paragraph style={{ fontSize: '1rem', color: 'black', textAlign: 'center' }}>Vườn chuyên bỏ sỉ Tùng Vạn Niên Dáng Trực</Paragraph>
    </div>
    </Col>
    <Col span={12}>
      <img src="garden.jpg" alt="garden-photo" style={{ maxWidth: '100%',width: '28rem' }} />
    </Col>
   
  </Row>
  </div>
);

export default GardenPhotoAndText;
