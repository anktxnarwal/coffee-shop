import React from "react";
import Img2 from "../../assets/banner-coffee-pic.png";


const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Intense and pure, a bold embrace,Espresso's essence, in a small space.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "A brew so stark, with a heart of fire, An Americano stirs the soul, a liquid desire.",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Steamed milk meets dark, rich espresso, A warm sip, a frothy kiss, a cappuccino caresso.",
    aosDelay: "100",
  },
];
function Serivices() {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* head title */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>{" "}
          {/* service section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="rounded-xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
                >
                  <div className="h-[122px]">
                    <img
                      src={data.img}
                      alt="coffee picture"
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Serivices;
