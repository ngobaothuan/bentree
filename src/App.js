import "./App.css";
import { ConfigProvider, Layout, Menu } from "antd";
import { green } from "@ant-design/colors";
import { App as AntdApp } from "antd";
import { PageHeader } from "./components/PageHeader";
import { Route, Routes } from "react-router-dom";
import PhongTrungBay from "./pages/PhongTrungBay";
import TrangChu from "./pages/TrangChu";
import LienHe from "./pages/LienHe";
import NotFound from "./pages/NotFound";
import { Link, useLocation } from "react-router-dom";

const items = [
  {
    label: <Link to="/">Trang Chủ</Link>,
    key: "trangchu"
  },
  {
    label: <Link to="/phong-trung-bay">Phòng Trưng Bày</Link>,
    key: "phong-trung-bay"
  },
  {
    label: <Link to="/lien-he">Liên Hệ</Link>,
    key: "lien-he"
  }
];

function App() {
  const { Footer, Header } = Layout;
  const location = useLocation();

  const getSelectedKey = (pathname) => {
    switch (pathname) {
      case "/":
        return "trangchu";
      case "/phong-trung-bay":
        return "phong-trung-bay";
      case "/lien-he":
        return "lien-he";
      default:
        return "";
    }
  };

  return (
    <AntdApp>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: "#FFFFFF"
            }
          },
          token: {
            colorPrimary: green.primary
          }
        }
        }
      >
        <Layout>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center"
            }}
          >
            <div style={
              {
                height: "2.5rem",
                width: "auto",
                paddingRight: "1rem",
                display: "flex",
                alignItems: "center"
              }
            }>
              <img
                src="BentreeLogo.svg"
                alt="Bentree logo"
                style={{
                  height: "100%",
                  width: "auto"
                }}
              />
            </div>
            <Menu
              theme="light"
              mode="horizontal"
              selectedKeys={[getSelectedKey(location.pathname)]}
              items={items}
              style={{
                flex: 1,
                minWidth: 0
              }}
            />
          </Header>
          <PageHeader />
          <Routes>
            <Route index element={<TrangChu />} />
            <Route path="/phong-trung-bay" element={<PhongTrungBay />} />
            <Route path="/lien-he" element={<LienHe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer
            style={{
              textAlign: "center"
            }}
          >
            Bentree ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </ConfigProvider>
    </AntdApp>
  );
}

export default App;
