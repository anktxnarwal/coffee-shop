import { data } from "autoprefixer";
import React from "react";
import Slider from "react-slick";
const testimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.quos asperiores neque repellendus possimus? Laboriosam!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Ankit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.quos asperiores neque repellendus possimus? Laboriosam!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Shubham",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.quos asperiores neque repellendus possimus? Laboriosam!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.quos asperiores neque repellendus possimus? Laboriosam!",
    img: "https://picsum.photos/103/103",
  },
];

function Reviews() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* head Section  */}
        <div className="text-center mb-10">
          <h1 className="text-xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>
        {/* Card Section  */}
        <div>
          <Slider {...settings}>
            {testimonialData.map((data, index) => {
              return (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                    {/* image section  */}
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt="DP"
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    {/* text section  */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/70 font-cursive0">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
