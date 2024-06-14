import React from "react";
import HeroImg from "../../assets/banner-coffee-pic.png";
function Home() {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      {" "}
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Section */}
          <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              We serve the richest{" "}
              <span className="text-primary font-cursive">Coffee</span> in the
              city
            </h1>
            <div>
              <button className="text-white bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 hover:scale-105 duration-200">
                Coffee & Cookies
              </button>
            </div>
          </div>
          {/* Img Section   */}
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={HeroImg}
              alt=""
              className="spin w-[300px] sm:w-[450px] sm:scale-110 mx-auto"
            />
            <div className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
              <h1>Hey Coder</h1>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl">
              <h1>Dark Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
