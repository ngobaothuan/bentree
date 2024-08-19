import { Image } from "antd";
function Library() {
  const Images = [
    "IMG_1777.jpg",
    "IMG_1789.jpg",
    "IMG_1795.jpg",
    "IMG_1798.jpg",
    "IMG_1821.jpg",
    "IMG_1823.jpg",
  ];
  return (
    <div>
      {Images.map((img) => (
        <Image width={200} src={img} />
      ))}
    </div>
  );
}
export default Library;
