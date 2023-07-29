import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxDot, RxDotFilled } from 'react-icons/rx';
import { BiExpandAlt } from 'react-icons/bi';
import { HiXMark } from 'react-icons/hi2';

export const MediaSlider = ({ data }) => {
	var images = data.imgs;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [open, setOpen] = useState(false);

	//reset index when switching to a tab with less images than the previously selected index
	currentIndex >= images.length ? setCurrentIndex(0) : null;

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
		setCurrentIndex((index) => (index = newIndex));
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex((index) => (index = newIndex));
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex((index) => (index = slideIndex));
	};

	const toggleLightbox = () => {
		console.log('toggle!', open);
		setOpen((value) => (value = !value));
	};

	//Arrow Key Navigation
	useEffect(() => {
		const handleArrowNav = (event) => {
			if (event.key === 'ArrowLeft') {
				console.log('Left');
				prevSlide();
			} else if (event.key === 'ArrowRight') {
				console.log('Right');
				nextSlide();
			} else if (event.key === 'Escape') {
				console.log('Esc');
				toggleLightbox();
			}
			console.log(currentIndex);
		};
		window.addEventListener('keydown', handleArrowNav);

		return () => {
			window.removeEventListener('keydown', handleArrowNav);
		};
	}, []);

	return (
		<>
			<Lightbox
				open={open}
				toggleLightbox={toggleLightbox}
				src={images[currentIndex]}
				type={data.type}
				prevSlide={prevSlide}
				nextSlide={nextSlide}
			/>
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

				{/* Expand Button*/}
				<div className="absolute right-3 top-[10%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-lg  bg-black/20 p-2 text-2xl text-white group-hover:block sm:hidden">
					<BiExpandAlt onClick={toggleLightbox} size={30} />
				</div>
				{/* Left Arrow */}
				<div className="absolute left-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block sm:hidden">
					<IoIosArrowBack onClick={prevSlide} size={30} />
				</div>
				{/* Right Arrow */}
				<div className="absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block sm:hidden">
					<IoIosArrowForward onClick={nextSlide} size={30} />
				</div>

				{/* Dot Navigation */}
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
		</>
	);
};

const Lightbox = ({
	open,
	toggleLightbox,
	src,
	type,
	prevSlide,
	nextSlide,
}) => {
	return (
		<div
			className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex h-[100vh] w-[100vw]
			bg-neutral-700/95 ${open ? 'block' : 'hidden'}
			`}
		>
			<div className="flex place-items-center justify-center m-auto w-[80%] max-h-[90vh] ">
				{type === 'video' ? (
					<video controls src={src} />
				) : (
					<img src={src} width={'100%'} />
				)}
			</div>

			{/* Close Button */}
			<div className="absolute right-3 top-[10%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-lg bg-black/20 p-2 text-lg text-white ">
				<HiXMark onClick={toggleLightbox} size={30} />
			</div>

			{/* Left Arrow */}
			<div className="absolute left-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block ">
				<IoIosArrowBack onClick={prevSlide} size={30} />
			</div>
			{/* Right Arrow */}
			<div className="absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block ">
				<IoIosArrowForward onClick={nextSlide} size={30} />
			</div>
		</div>
	);
};
