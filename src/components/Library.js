import { Image } from "antd";
export function Library() {
  const Images = [
    "IMG_1777.jpg",
    "IMG_1795.jpg",
    "IMG_1821.jpg",
    "IMG_1823.jpg",
  ];
  const contentStyle = {
    margin: 0,
    height: "15rem",
    color: "#fff",
    display: "flex",
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    background: "white",
  };
  return (
    <div style={contentStyle}>
      {Images.map((img) => (
        <Image width={200} src={img} />
      ))}
    </div>
  );
}
