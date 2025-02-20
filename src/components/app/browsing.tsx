import { browserData } from "@site/src/data";
import React from "react";

export function Browsing() {
  return (
    <div className="relative">
      <img
        src="img/home-shade.png"
        alt="#"
        className="absolute bottom-0 left-0 size-52"
      />

      <div className="bg-brand-white-200">
        <div className="container pt-16 pb-20">
          <h2 className="text-brand-black-100 font-matter text-4xl font-bold text-center max-w-lg mx-auto">
            Turn Your Daily{" "}
            <span className="text-brand-orange-200">Browsing</span> into Instant{" "}
            <span className="text-brand-green-100">Earnings</span>
          </h2>

          <div className="flex mt-20 gap-16  items-center justify-center">
            <div className="max-w-3xl">
              <img src="/img/earning.png" alt="#" />
            </div>

            <div className="flex flex-col gap-8">
              {browserData.map((data, index) => {
                return (
                  <div key={index} className="flex flex-col gap-3">
                    <img src={data.img} alt="" className="size-20" />
                    <h4 className="text-brand-black-100 font-matter tracking-wide font-bold text-xl">
                      {data.heading}
                    </h4>
                    <p className="text-brand-black-200 font-matter font-light max-w-xl text-lg">
                      {data.para}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
