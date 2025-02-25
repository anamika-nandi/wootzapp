export function SectionImg() {
	return (
		<div className='h-[430px] md:h-screen section-img relative'>
			<img src='img/up-shadow.png' alt='#' className='absolute top-0 right-0 left-0 w-full' />

			<img src='img/down.png' alt='#' className='absolute bottom-0 right-0 left-0 w-full opacity-70' />
		</div>
	);
}
