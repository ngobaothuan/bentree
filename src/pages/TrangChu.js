import "../App.css";
import HomePageItem from "../components/HomePageItem";
import homePageItems from "../data/homePageItems.json";
import { Layout } from "antd";
import PageHeader from "../components/PageHeader";
import CallNowButton from "../components/CallNowButton";

function TrangChu() {
  const { Content } = Layout;

  return (
    <>
      <PageHeader />
      <CallNowButton />
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
          <HomePageItem
            key={`${item.title}-${index}`}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            headingText={item.title}
            descriptionText={item.description}
            imgPlacement={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </Content>
    </>
  );
}

export default TrangChu;
