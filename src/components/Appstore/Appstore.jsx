import React from "react";
import BgImg from "../../assets/Background.png";
import AppStore from "../../assets/app_store.png";
import PlayStore from "../../assets/play_store.png";
const backgroundStyle = {
  background: `url(${BgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
function Appstore() {
  return (
    <>
      <div style={backgroundStyle} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div className="space-y-6 max-w-xl mx-auto">
              {/* text  */}
              <h1 className="text-2xl text-center sm:text-left  sm:text-4xl font-semibold pl-3 text-white/90">
                BlackCafe is available for Andriod and IOS
              </h1>
              {/* logo-section  */}
              <div className="flex flex-wrap justify-center sm:justify-start items-start">
                <a href="#">
                  <img
                    src={AppStore}
                    alt="Apple-Store-Logo"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={PlayStore}
                    alt="Apple-Store-Logo"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appstore;
