import "./App.css";
// import BackgroundImage from "./components/BackgroundImage";
import { ConfigProvider, Layout } from "antd";
import { green } from "@ant-design/colors";
import { App as AntdApp } from "antd";
import { CarouselHome } from "./components/CarouselHome";
import { PageHeader } from "./components/PageHeader";
import { CallNowButton } from "./components/CallNowButton";
import homePageItems from "./data/homePageItems.json";
import { Library } from "./components/Library";
import HomePageItem from "./components/HomePageItem";

function App() {
  const { Content, Footer } = Layout;

  return (
    <AntdApp>
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
          <Layout>
            <PageHeader />
            <CarouselHome />
            <CallNowButton />
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
                  imgAlt={item.imgAlt}
                  headingText={item.title}
                  descriptionText={item.description}
                  imgPlacement={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </Content>
            <Library />
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
    </AntdApp>
  );
}

export default App;
