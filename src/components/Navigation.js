import { Menu, Button } from "antd";
import { useState } from "react";
import {
  InfoCircleOutlined,
  ContactsOutlined,
  NodeIndexOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Navigation() {
  const { width } = useWindowDimensions();
  const items = [
    {
      label: "Trang Chủ",
      key: "trangchủ",
      icon: <HomeOutlined />,
    },
    {
      label: "Tìm Hiểu Thêm",
      key: "tìmhiểuthêm",
      icon: <InfoCircleOutlined />,
    },
    {
      label: "Liên Hệ",
      key: "hiênhệ",
      icon: <ContactsOutlined />,
    },
    {
      label: "Địa chỉ",
      key: "dịachỉ",
      icon: <NodeIndexOutlined />,
    },
  ];

  const [currentPage, setCurrentPage] = useState("trangchủ");
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const onNavClick = (e) => {
    console.log("click ", e);
    setCurrentPage(e.key);
  };

  return (
    <div style={{ width: width < 768 ? "50rem" : "100%" }}>
      {width < 768 && (
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      )}
      <Menu
        onClick={onNavClick}
        selectedKeys={[currentPage]}
        mode={width < 768 ? "inline" : "horizontal"}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}

export default Navigation;
