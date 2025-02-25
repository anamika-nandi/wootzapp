import {PlayStoreButton} from "../ui/play-store-button";

export default function Hero() {
	return (
		<div className='relative w-full h-full'>
			<div className='absolute -top-32 md:-top-40'>
				<img src='img/home-shade.png' className=' object-cover  h-[170px]' alt='#' />
			</div>
			<div className='absolute  w-full h-full'>
				<img src='img/mobile_vector.png' className=' md:hidden object-cover w-full h-full' alt='#' />
				<img src='img/desktop_vector.png' className='hidden md:block object-cover w-full h-full  ' alt='#' />
			</div>

			<div className='container-custom relative z-10'>
				<div className='flex justify-between pt-16 max-xl:gap-10 max-md:flex-col'>
					<div className='basis-full flex flex-col gap-6 justify-start items-start mt-24 max-lg:mt-0 max-md:text-center max-md:items-center'>
						<h1 className='[@media(max-width:425px)]:text-3xl max-sm:text-4xl max-lg:text-5xl max-lg:leading-normal text-6xl xl:max-w-xl max-xl:text-6xl max-xl:leading-relaxed font-bold font-matter leading-snug'>
							<span className='bg-gradient-to-r from-brand-orange-200 to-orange-300 bg-clip-text text-transparent mr-2'>WootzApp</span>
							<span>-</span> The Crypto Browser that Pays You
						</h1>

						<p className='font-matter text-brand-black-200 ~text-base/lg max-w-2xl'>
							A lightweight, Chromium‑based mobile browser that lets you earn crypto and stablecoins while you surf—no extra apps, no extra hassle.
						</p>

						<PlayStoreButton />
					</div>

					<div className='contain-inline-size basis-full flex flex-col items-end gap-10 relative max-md:w-full'>
						<img src='/img/twitter-img.png' alt='#' className='w-full max-w-[450px] max-md:mx-auto md:max-w-[450px] lg:max-w-[500px]' />
						<img src='/img/hero-img.png' alt='#' className='w-full max-w-[520px] max-md:mx-auto md:max-w-[450px] lg:max-w-[600px]' />
						<img src='/img/arrow.png' alt='#' className=' absolute -left-10 top-28 max-md:hidden' />
					</div>
				</div>
			</div>
		</div>
	);
}
