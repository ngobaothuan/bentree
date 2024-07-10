import "./App.css";
import Navigation from "./components/Navigation";
import BackgroundImage from "./components/BackgroundImage";
import PhotoAndText from "./components/PhotoAndText";
import homePageItems from "./data/homePageItems.json";
import { ConfigProvider, Row, Col } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <div className="App">
        <Row>
          <Col>
            <Navigation />
          </Col>
          {/* <BackgroundImage /> */}
          {homePageItems.map((item, index) => (
            <Col>
              <PhotoAndText
                key={`${item.title}-${index}`}
                imgSrc={item.imgSrc}
                headingText={item.title}
                descriptionText={item.description}
                imgPlacement={index % 2 === 0 ? "left" : "right"}
              />
            </Col>
          ))}
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default App;
