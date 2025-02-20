export function Intersection() {
  return (
    <div className="h-screen pt-32 container ">
      <h2 className="text-brand-black-100 font-matter text-4xl font-bold text-center max-w-lg mx-auto">
        At the Intersection of
        <span className="text-brand-orange-200"> AI</span> Data and
        <span className="text-brand-green-100"> Decentralization</span>
      </h2>

      <div className="flex mt-16">
        <div className="flex flex-col gap-4 basis-full">
          <div className="flex flex-col gap-3 max-w-sm">
            <img src="/img/growth.png" alt="" className="size-20" />
            <h4 className="text-brand-black-100 font-matter tracking-wide font-bold text-xl">
              Explosive Market Growth
            </h4>
            <p className="text-brand-black-200 font-matter font-light text-lg">
              The AI data labeling market is projected to reach $27B, with AI
              companies spending billions annually on data—only a fraction of
              which is currently efficient.
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-sm">
            <img src="/img/payout.png" alt="" className="size-20" />
            <h4 className="text-brand-black-100 font-matter tracking-wide font-bold text-xl">
              Mobile-First Advantage
            </h4>
            <p className="text-brand-black-200 font-matter font-light text-lg">
              With 95% of emerging market users being mobile-only, traditional
              desktop-based workflows are no longer sufficient.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center basis-full">
          <img src="img/benefits.png" alt="#" className="h-full" />
        </div>

        <div className="flex flex-col gap-4 items-end basis-full">
          <div className="flex flex-col gap-3 max-w-sm">
            <img src="/img/growth.png" alt="" className="size-20" />
            <h4 className="text-brand-black-100 font-matter tracking-wide font-bold text-xl">
              Instant Payouts & Lower Costs
            </h4>
            <p className="text-brand-black-200 font-matter font-light text-lg">
              Our model uses stable coin payments that settle in minutes,
              drastically reducing transaction fees and delays compared to
              traditional gig platforms.
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-sm">
            <img src="/img/payout.png" alt="" className="size-20" />
            <h4 className="text-brand-black-100 font-matter tracking-wide font-bold text-xl">
              Strategic Distribution
            </h4>
            <p className="text-brand-black-200 font-matter font-light text-lg">
              OEM partnerships provide pre-installation on millions of devices,
              ensuring a zero-CAC, rapidly scalable user base.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
