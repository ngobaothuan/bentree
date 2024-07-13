import "./App.css";
// import Navigation from "./components/Navigation";
// import BackgroundImage from "./components/BackgroundImage";
import PhotoAndText from "./components/PhotoAndText";
import homePageItems from "./data/homePageItems.json";
import { useState } from "react";
import {
  InfoCircleOutlined,
  ContactsOutlined,
  NodeIndexOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Layout, Menu, Typography, Col, Row } from "antd";
import { green } from "@ant-design/colors";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const { width } = useWindowDimensions();
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("trangchủ");
  const { Header, Content, Footer, Sider } = Layout;

  const items = [
    {
      label: "Trang Chủ",
      key: "trangchủ",
      title: width < 768 && collapsed ? "Trang Chủ" : null,
      icon: <HomeOutlined />,
    },
    {
      label: "Tìm Hiểu Thêm",
      key: "tìmhiểuthêm",
      title: width < 768 && collapsed ? "Tìm Hiểu Thêm" : null,
      icon: <InfoCircleOutlined />,
    },
    {
      label: "Liên Hệ",
      key: "hiênhệ",
      title: width < 768 && collapsed ? "Liên Hệ" : null,
      icon: <ContactsOutlined />,
    },
    {
      label: "Địa chỉ",
      key: "dịachỉ",
      title: width < 768 && collapsed ? "Địa chỉ" : null,
      icon: <NodeIndexOutlined />,
    },
  ];

  const onNavClick = (e) => {
    console.log("click ", e);
    setCurrentPage(e.key);
  };

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
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          breakpoint="sm"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img
              src={
                collapsed
                  ? "BentreeLogoWhite.svg"
                  : "BentreeLogoHorizontalWhite.svg"
              }
              alt="Bentree logo"
              style={{ height: "2.8rem", width: "auto", margin: "1rem" }}
            />
          </div>
          <Menu
            theme="dark"
            onClick={onNavClick}
            defaultSelectedKeys={["1"]}
            selectedKeys={[currentPage]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              background: "transparent",
              padding: "1rem",
              justifyItems: "center",
              display: "grid",
              gridTemplateColumns: "1fr",
              alignContent: "center",
              width: "100%",
              height: "auto",
            }}
          >
            <div
              style={{
                height: width < 540 ? "8rem" : "15rem",
              }}
            >
              <img
                src="BentreeLogoVerticalColor.svg"
                alt="Bentree logo"
                style={{
                  height: "100%",
                  width: "auto",
                }}
              />
            </div>
            <Typography.Title
              level={2}
              style={{
                textAlign: "center",
                fontSize: width < 540 ? "1.2rem" : "1.8rem",
              }}
            >
              Let's put a paragraph here to summarise the business
            </Typography.Title>
          </Header>
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
              <PhotoAndText
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
