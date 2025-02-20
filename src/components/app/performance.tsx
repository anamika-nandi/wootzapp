import { performanceData } from "@site/src/data";

export function Performance() {
  return (
    <div className="min-h-screen bg-brand-black-100 pt-16 pb-20">
      <div className="container flex flex-col justify-center gap-16">
        <h2 className="text-brand-white-100 font-matter text-4xl font-bold text-center max-w-3xl mx-auto leading-normal">
          Built for High{" "}
          <span className="text-brand-orange-200">Performance</span>, {' '}
          <span className="text-brand-orange-300">Security</span>,
          and <span className="text-brand-green-100">Scalability</span>
        </h2>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 max-w-3xl mx-auto">
          {performanceData.map((data, index) => {
            const res = index === 2 ? "col-span-2" : "";

            return (
              <div className={`flex flex-col gap-5 ${res}`}>
                <img src={data.img} alt="#" className="size-24" />
                <h4 className="text-brand-white-100 font-matter font-bold text-2xl max-w-xs">
                  {data.head}
                </h4>
                <p className="text-lg text-brand-white-400 font-matter">
                  {data.para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
