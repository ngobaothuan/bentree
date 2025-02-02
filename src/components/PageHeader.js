import { Layout, Grid } from "antd";
import { useNavigate } from "react-router-dom";

export function PageHeader() {
  const { Header } = Layout;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const navigate = useNavigate();

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
        height: "auto"
      }}
    >
      <div
        style={{
          height: screens.xs ? "8rem" : "12rem",
          marginTop: "1rem",
          cursor: "pointer"
        }}
        onClick={() => navigate("/")}
      >
        <img
          src="BentreeLogoVerticalColor.svg"
          alt="Bentree logo"
          style={{
            height: "100%",
            width: "auto"
          }}
        />
      </div>
    </Header>
  );
}

export default PageHeader;