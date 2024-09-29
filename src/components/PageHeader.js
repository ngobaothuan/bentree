import useWindowDimensions from "../hooks/useWindowDimensions";
import { Typography, Layout } from "antd";

export function PageHeader() {
  const { Header } = Layout;
  const { width } = useWindowDimensions();
  return (
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
          height: width < 540 ? "4rem" : "8rem",
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
        Vườn Tùng Vạn Niên lớn nhất Bến Tre - Chuyên Cung Cấp Sỉ Lẻ
      </Typography.Title>
    </Header>
  );
}

export default PageHeader;
