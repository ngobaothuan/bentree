import { Image } from "antd";
function Library() {
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
      {Images.map((img) => (
        <Image width={200} src={img} />
      ))}
    </div>
  );
}
export default Library;
