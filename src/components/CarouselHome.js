import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "20rem",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#347928",
  justifyContent: "center",
};
export const CarouselHome = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <img src="carousel-1.jpg" alt="carousel-photo1"></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="carousel-2.jpg" alt="carousel-photo2"></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="carousel-3.jpg" alt="carousel-photo3"></img>
        </h3>
      </div>
    </Carousel>
  );
};
