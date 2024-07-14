import useWindowDimensions from "../hooks/useWindowDimensions";
import { Typography, Layout } from "antd";

function PageHeader() {
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
  );
}

export default PageHeader;
