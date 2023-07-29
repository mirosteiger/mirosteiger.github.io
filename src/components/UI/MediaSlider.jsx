import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxDot, RxDotFilled } from 'react-icons/rx';

export const MediaSlider = ({ data }) => {
	var images = data.imgs;
	const [currentIndex, setCurrentIndex] = useState(0);
	currentIndex >= images.length ? setCurrentIndex(0) : null;

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="group relative z-0 m-auto h-[450px] w-full max-w-[1400px]  py-4 sm:h-[600px]">
			{data && data.type === 'video' ? (
				<div className=" rounded-2xl object-cover px-4">
					<video src={data.imgs} controls />
				</div>
			) : (
				<div
					style={{ backgroundImage: `url(${images[currentIndex]})` }}
					className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
				/>
			)}
			{/* Left Arrow */}
			<div className="absolute left-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block sm:hidden">
				<IoIosArrowBack onClick={prevSlide} size={30} />
			</div>
			{/* Right Arrow */}
			<div className="absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block sm:hidden">
				<IoIosArrowForward onClick={nextSlide} size={30} />
			</div>
			<div className="top-4 flex justify-center py-2">
				{images.map((_, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className="cursor-pointer text-2xl"
					>
						{slideIndex === currentIndex ? <RxDotFilled /> : <RxDot />}
					</div>
				))}
			</div>
		</div>
	);
};
