const data = [
  {
    head: "Custom Extension Framework",
    para: "Built on an enhanced Manifest V3, our API enables developers to create mobile-first extensions. Deploy custom AI data workflows in minutes—not weeks.",
    img: "/img/extension.png",
  },

  {
    head: "Robust API & SDK",
    para: "Our comprehensive toolkit integrates seamlessly with our native in‑browser task orchestration, automating validation, rewards distribution, and secure data collection.",
    img: "/img/sdk.png",
  },
];

export function PartnerShip() {
  return (
    <div className="min-h-screen pt-24 relative pb-16">
      <img
        src="img/partnership-shadow.png"
        alt="#"
        className="absolute -top-10 -right-44"
      />

      <div className="container">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-brand-black-100 font-matter text-4xl font-bold text-center max-w-2xl mx-auto leading-normal">
            A Platform Built on Extensibility and
            <span className="text-brand-orange-200 block">
              Global Partnerships
            </span>
          </h2>
          <p className="text-brand-black-200 font-matter font-light max-w-4xl text-lg">
            At the heart of WootzApp is our unique extension system—a
            first-of-its-kind solution on mobile. This allows AI companies to
            design custom, iterative, non-standard labeling workflows, while
            enabling developers to rapidly deploy and iterate on tasks.
          </p>
        </div>

        <div className="flex mt-16 gap-8">
          {data.map((e) => {
            return (
              <div className="flex bg-brand-white-100 p-5 gap-4 rounded-md">
                <img src={e.img} alt="#" className="object-cover size-20" />
                <div className="flex gap-4 flex-col justify-start">
                  <h4 className="text-brand-black-100 font-matter text-xl font-bold max-w-3xl leading-normal tracking-wide">
                    {e.head}
                  </h4>
                  <p className="text-[#4D4846] font-matter font-light max-w-xl text-lg">
                    {e.para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-end mt-14 justify-center gap-10 ">
          <div className="basis-full">
            <img src="img/hero-img.png" alt="#" className="size-[650px]" />
          </div>

          <div className="bg-brand-white-500 p-5 rounded-md flex gap-5 basis-full">
            <img
              src={"img/code.png"}
              alt="#"
              className="object-cover size-20"
            />
            <img src="img/preview.png" alt="#" className="max-w-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
