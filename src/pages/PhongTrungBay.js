import { Image } from "antd";
import Title from "antd/es/skeleton/Title";
function PhongTrungBay() {
  const Images = [
    "IMG_1777.jpg",
    "IMG_1795.jpg",
    "IMG_1799.jpg",
    "IMG_1821.jpg",
    "IMG_1823.jpg",
  ];
  const contentStyle = {
    margin: 0,
    height: "20rem",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    justifyContent: "center",
    padding: "1rem ",
    background: "white",
    borderRadius: "8px",
  };
  return (
    <div style={contentStyle}>
      <Title level={2}>Phòng Trưng Bày</Title>
      {Images.map((img) => (
        <Image width={200} src={img} />
      ))}
    </div>
  );
}
export default PhongTrungBay;
