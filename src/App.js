import "./App.css";
// import BackgroundImage from "./components/BackgroundImage";
import HomePageItem from "./components/HomePageItem";
import homePageItems from "./data/homePageItems.json";
import { ConfigProvider, Layout } from "antd";
import { green } from "@ant-design/colors";
import Navigation from "./components/Navigation";
import PageHeader from "./components/PageHeader";

function App() {
  const { Content, Footer } = Layout;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: green.primary,
        },
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Navigation />
        <Layout>
          <PageHeader />
          <Content
            style={{
              margin: "0 1rem",
              justifyContent: "center",
              justifyItems: "center",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
          >
            {homePageItems.map((item, index) => (
              <HomePageItem
                key={`${item.title}-${index}`}
                imgSrc={item.imgSrc}
                headingText={item.title}
                descriptionText={item.description}
                imgPlacement={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Bentree ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
