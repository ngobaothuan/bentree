import { Row, Col, Typography } from 'antd';

const { Paragraph } = Typography;

const StumpPhotoAndText = () => (
    <div style={{ padding: '1rem ', }}>
  <Row gutter={16}>
    <Col span={12}>
      <img src="stump.jpg" alt="Stump-Image" style={{ maxWidth: '100%',width: '28rem' }} />
    </Col>
    <Col span={12}>
    <div style={{ display: 'flex', alignItems: 'center', height: '28rem', justifyContent: 'center',flexDirection: 'column'  }}>
    <Paragraph style={{ fontSize: '1.5rem', color: 'black', textAlign: 'center' }}>Vạn Niên Tùng gốc siêu lớn lên tới 100cm</Paragraph>
    <Paragraph style={{ fontSize: '1rem', color: 'black', textAlign: 'center' }}>Những cây Tùng Vạn Niên được chăm sóc cẩn thận trong 20 năm, đường kính gốc từ 50-100cm</Paragraph>

    </div>
    </Col>
   
  </Row>
  </div>
);

export default StumpPhotoAndText;
