import { Menu, Button, Layout, theme } from "antd";
import { useState } from "react";
import {
  InfoCircleOutlined,
  ContactsOutlined,
  NodeIndexOutlined,
  HomeOutlined,
  MenuOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";
import useWindowDimensions from "../hooks/useWindowDimensions";

const { Header, Content, Footer, Sider } = Layout;

function Navigation() {
  const { width } = useWindowDimensions();
  const [collapsed, setCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState("trangchủ");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
    <>
      {/* {width < 768 && (
        <Button
          type="text"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuOutlined /> : <LeftCircleOutlined />}
        </Button>
      )} */}
      <Sider
        collapsible={width < 768 ? true : false}
        collapsed={width < 768 ? collapsed : false}
        onCollapse={(value) => setCollapsed(value)}
        width="100%"
      >
        <Menu
          onClick={onNavClick}
          selectedKeys={[currentPage]}
          mode={width < 768 ? "inline" : "horizontal"}
          items={items}
          width="100%"
        />
      </Sider>
    </>
  );
}

export default Navigation;
