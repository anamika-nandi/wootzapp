export function SectionImg() {
	return (
		<div className='h-[430px] md:h-screen   relative'>
			<img src='img/up-shadow.png' alt='#' className='absolute top-0 z-10 right-0 left-0 w-full' />

			<img src='img/down.png' alt='#' className='absolute bottom-0 right-0 z-10 left-0 w-full opacity-70' />
			<img src='/img/section-img.png' alt='#' className='absolute -bottom-0 right-0 left-0 w-full object-cover h-full' />
		</div>
	);
}
