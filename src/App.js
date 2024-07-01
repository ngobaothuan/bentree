import "./App.css";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import PhotoAndText from "./components/PhotoAndText";
import homePageItems from "./data/homePageItems.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <BackgroundImage />
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
  );
}

export default App;
