import "./App.css";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import StumpPhotoAndText from "./components/StumpPhotoAndText";
import GardenPhotoAndText from "./components/GardenPhotoAndText";



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <BackgroundImage/>
        <StumpPhotoAndText/>
        <GardenPhotoAndText/>
      </header>
    </div>
  );
}

export default App;