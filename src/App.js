import "./App.css";
// import BackgroundImage from "./components/BackgroundImage";
import { ConfigProvider, Layout } from "antd";
import { green } from "@ant-design/colors";
import Navigation from "./components/Navigation";
import { App as AntdApp } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import TrangChu from "./pages/TrangChu";
import TimHieuThem from "./pages/TimHieuThem";
import LienHe from "./pages/LienHe";
import DiaChi from "./pages/DiaChi";
import NotFound from "./pages/NotFound";

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
          <Router>
            <Navigation />
            <Layout>
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
                <Routes>
                  <Route path="/" element={<TrangChu />} />
                  <Route path="/timhieuthem" element={<TimHieuThem />} />
                  <Route path="/lienhe" element={<LienHe />} />
                  <Route path="/diachi" element={<DiaChi />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Content>
              <Footer
                style={{
                  textAlign: "center",
                }}
              >
                Bentree ©{new Date().getFullYear()}
              </Footer>
            </Layout>
          </Router>
        </Layout>
      </ConfigProvider>
    </AntdApp>
  );
}

export default App;
