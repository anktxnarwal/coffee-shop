import React from "react";
import MainImg from "../../assets/coffee-white-.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <>
      <div id="about" className="bg-gray-200">
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image Section  */}
            <div>
              <img
                src={MainImg}
                alt="Banner Image"
                className="max-w-[430px] w-full mx-auto spin drop-shadow-xl]"
              />
            </div>
            {/* text section  */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              {" "}
              <h1 className="text-3xl sm:text-4xl font-bold font-cursive">
                Premium Blend Coffee
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                Coffee is the common man's gold, and like gold, it brings to
                every person the feeling of luxury and nobility
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Premium Coffee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                    <span>Hot Coffee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span>Cold Coffee</span>
                  </div>
                </div>
                <div className="space-y-3 border-l-4 border-primary/50 pl-6">
                  <h1 className="text-2xl font-semibold font-cursive">
                    Tea Lover
                  </h1>
                  <p className="text-sm text-gray-500">
                    Tea, though ridiculed by those who are naturally coarse in
                    their nervous sensibilities, will always be the favorite
                    beverage of the intellectual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
