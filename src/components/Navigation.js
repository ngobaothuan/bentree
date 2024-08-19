import { Menu, Layout } from "antd";
import { useState } from "react";
import {
  InfoCircleOutlined,
  ContactsOutlined,
  NodeIndexOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

function Navigation() {
  const { width } = useWindowDimensions();
  const [collapsed, setCollapsed] = useState(true);
  const [currentPage, setCurrentPage] = useState("trangchủ");

  const useNavClick = (e) => {
    console.log("click ", e);
    useNavigate(`/${e.key}`);
  };
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
    {
      label: "Library",
      key: "library",
      title: width < 768 && collapsed ? "Library" : null,
      icon: <NodeIndexOutlined />,
    },
  ];

  return (
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
        // onClick={useNavClick}
        defaultSelectedKeys={["1"]}
        selectedKeys={[currentPage]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}

export default Navigation;
