import "./App.css";
import Navigation from "./components/Navigation";
import BackgroundImage from "./components/BackgroundImage";
import PhotoAndText from "./components/PhotoAndText";
import homePageItems from "./data/homePageItems.json";
import { ConfigProvider } from "antd";

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
        <Navigation />
        <header className="App-header">
          {/* <BackgroundImage /> */}
          {homePageItems.map((item, index) => (
            <PhotoAndText
              key={`${item.title}-${index}`}
              imgSrc={item.imgSrc}
              headingText={item.title}
              descriptionText={item.description}
              imgPlacement={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </header>
      </div>
    </ConfigProvider>
  );
}

export default App;
