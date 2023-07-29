import { Spacer } from '../UI/Spacer';
import { hobbyData } from '../../data/hobbydata';
import { ImageSlider } from '../UI/ImageSlider';

export const Hobbies = () => {
	/* 
		hobbyData Structure:
			type: string 
			title: string,
			imgs: string[],
			tags: string[]
	*/

	return (
		<section className="flex flex-col items-center px-12 text-center md:p-0">
			<div className="mb-12 flex items-center">
				<h1 className=" mr-6">Hobbies</h1>
			</div>
			<p>I got some hobbies too, i swear</p>
			<Spacer size="mb-16" />
			{hobbyData &&
				hobbyData.map((e, index) => {
					return e.type == 'video' ? (
						<video src={e.imgs} controls key={index} />
					) : (
						<ImageSlider images={e.imgs} key={index} />
					);
				})}
			<Spacer size="mb-16" />
		</section>
	);
};
