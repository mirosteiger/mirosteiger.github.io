import { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const ImageSlider = ({ images }) => {
	const maxScrollWidth = useRef(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const carousel = useRef(null);

	const moveNext = () => {
		console.log('moveNext');
		console.log('offsetWidth: ', carousel.current.offsetWidth);
		console.log('currentIndex', currentIndex);
		console.log('maxScrollWidth', maxScrollWidth.current);
		if (
			carousel.current !== null &&
			carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
		) {
			setCurrentIndex((prevState) => prevState + 1);
		}
		console.log(currentIndex);
	};

	const movePrev = () => {
		console.log('movePrev');
		if (currentIndex > 0) {
			setCurrentIndex((prevState) => prevState - 1);
		}
	};

	useEffect(() => {
		if (carousel !== null && carousel.current !== null) {
			carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
		}
	}, [currentIndex]);

	useEffect(() => {
		maxScrollWidth.current = carousel.current
			? carousel.current.scrollWidth - carousel.current.offsetWidth
			: 0;
	}, []);
    
	return (
		<div className="relative w-1/2 overflow-hidden">
			<div className="top left absolute flex h-full w-full justify-between">
				{/* Button Slide left */}
				<button
					onClick={movePrev}
					className=" z-10 m-0 h-1/3 w-10 self-center p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-green-200/75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
				>
					<IoIosArrowBack size={'32px'} />
					<span className="sr-only">Prev</span>
				</button>

				{/* Button Slide right */}
				<button
					onClick={moveNext}
					className="z-10 m-0 h-1/3 w-10 self-center p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-green-200/75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
				>
					<IoIosArrowForward size={'32px'} />
					<span className=" sr-only">Next</span>
				</button>
			</div>
			<div
				ref={carousel}
				className="carousel-container relative z-0 flex touch-pan-x snap-x snap-mandatory gap-1 overflow-hidden scroll-smooth md:px-48"
			>
				{/* Mapping through all images */}
				{images.map((resource, index) => {
					return (
						<div
							key={index}
							className="carousel-item relative min-w-full snap-start text-center"
						>
							<img src={resource} className="w-full h-full" />
						</div>
					);
				})}
			</div>
		</div>
	);
};
