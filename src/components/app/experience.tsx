import { PlayStoreButton } from "../ui/play-store-button";

export function Experience() {
  return (
    <div className="container">
      <div className="bg-brand-green-200 text-brand-white-100 flex py-10 rounded-3xl h-[500px] items-start mb-20 mt-56 px-10 relative">
        <img
          src="img/pattern.png"
          alt="#"
          className="absolute bottom-0 left-0"
        />

        <div className="flex flex-col space-y-7 items-start flex-1">
          <h2 className="font-matter font-bold text-5xl leading-snug">
            Experience a Browser That Works for You
          </h2>
          <p className="font-matter font-regular text-brand-white-700 text-lg tracking-wide">
            Whether you’re a user earning rewards on every click, a developer
            building cutting-edge extensions, or a partner looking to tap into a
            mobile-first, decentralized workforce, WootzApp is redefining AI
            data labeling and gig payments.
          </p>
          <PlayStoreButton bg_color="bg-brand-orange-300" />
        </div>

        <div className="flex-1 flex justify-center relative -top-72">
          <img src="img/card.png" alt="#" />
        </div>
      </div>
    </div>
  );
}
