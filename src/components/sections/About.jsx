/* eslint-disable react/no-unescaped-entities */
import pic from '../../assets/images/miro_transparent.png';
import ColouredImage from '../UI/ColouredImage';

export const About = () => {
	return (
		<section
			id="about"
			className=" flex flex-col place-items-center items-center text-center"
		>
			<div className="place-items-center sm:flex">
				<div className=" mx-6 my-9 flex justify-center sm:w-1/3">
					<ColouredImage
						src={pic}
						rounded
						border
						colour={'red-200'}
						size={'300px'}
					/>
				</div>
				<h3 className="text-left sm:w-2/3">
					I'm Miro, and I appreciate you checking out my page. <br />
					<br />
					This website is all about my passion for coding projects, music, and
					computer graphics. As an avid coder, I love building innovative
					projects and exploring the endless possibilities of technology. You'll
					find my latest coding endeavors showcased here, from fun little
					experiments to useful tools. <br />
					<br /> When I'm not immersed in lines of code, I'm lost in the
					enchanting world of music. I'll share my musical journey, favorite
					tunes, and perhaps even some original compositions.
				</h3>
			</div>
		</section>
	);
};
