/* eslint-disable react/no-unescaped-entities */
import pic from '../../assets/images/miro_transparent.png';
import ColouredImage from '../UI/ColouredImage';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { SocialLinks } from '../UI/SocialLinks';

export const About = () => {
	const scrollPosition = useScrollPosition();
	return (
		<section className="px-4 md:px-4 lg:px-32 xl:px-48">
			<div className="gap-8 pt-8 sm:flex ">
				{/* Waving Hand */}
				<div
					id="greets"
					className={`fixed left-1/2 top-24 col-span-2 flex -translate-x-1/2 items-center  sm:top-32 transition-all${
						scrollPosition >= 70 ? ' opacity-0' : ' opacity-100 '
					}`}
				>
					<span className="mr-6 animate-wiggle-hand text-5xl">👋🏼</span>
					<h1 className=" mr-6">Gude</h1>
				</div>

				{/* IMAGE & LINKS */}

				<div className="mx-6 my-9 flex justify-center px-6 sm:w-1/3">
					<div className=" ">
						<ColouredImage src={pic} rounded border size={'300px'} />
						<SocialLinks />
					</div>
				</div>

				{/* Description */}
				<div className="pt-12">
					<h3 className=" text-left ">
						I'm Miro, and I appreciate you checking out my page. <br />
						<br />
						This website serves as a collection of my previous projects and as a
						little archive for my other stuff. You'll find my latest projects
						below, from fun little experiments and pages to useful tools. <br />
						<br /> When I'm not chilling in my browser, I'm lost in the
						enchanting world of music. I'll maybe share my musical inspirations,
						favorite tunes, and perhaps even some original compositions at a
						later point. <br />
						<br /> I also really love 3D stuff, so i maybe put some of this
						stuff here as well.{' '}
						<span className="relative -z-10 opacity-40 ">
							(Even if it's not very good)
						</span>
					</h3>
				</div>
			</div>
		</section>
	);
};
