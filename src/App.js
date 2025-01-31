import "./App.css";
import { ConfigProvider, Layout } from "antd";
import { green } from "@ant-design/colors";
import { App as AntdApp } from "antd";
import { CarouselHome } from "./components/CarouselHome";
import { PageHeader } from "./components/PageHeader";
import { Library } from "./components/Library";
import { Route, Routes } from "react-router-dom";
import PhongTrungBay from "./pages/PhongTrungBay";
import TrangChu from "./pages/TrangChu";
import LienHe from "./pages/LienHe";
import NotFound from "./pages/NotFound";

function App() {
  const { Content, Footer } = Layout;

  return (
    <AntdApp>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: green.primary
          }
        }}
      >
        <Layout
          style={{
            minHeight: "100vh"
          }}
        >
          <Layout>
            <PageHeader />
            <Routes>
              <Route index element={<TrangChu />} />
              <Route path="/phong-trung-bay" element={<PhongTrungBay />} />
              <Route path="/lien-he" element={<LienHe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Library />
            <Footer
              style={{
                textAlign: "center"
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
