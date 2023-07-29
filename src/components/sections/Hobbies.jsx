import { useState } from 'react';
import { Spacer } from '../UI/Spacer';
import { hobbyData } from '../../data/hobbydata';
import { MediaSlider } from '../UI/MediaSlider';
import { TabContainer } from '../UI/TabContainer';

export const Hobbies = () => {
	const [currentTab, setCurrentTab] = useState(hobbyData[0].title);
	var data;
	hobbyData
		.filter((item) => item.title === currentTab)
		.map((i) => {
			data = i;
		});

	return (
		<section className="flex flex-col items-center text-center sm:px-12 md:p-0">
			<div className="mb-12 flex items-center">
				<h1 className=" mr-6">Hobbies</h1>
			</div>
			<p>I got some hobbies too, i swear</p>
			<Spacer size="mb-16" />
			<h1>3D</h1>
			<div className="media-container sm:w-3/4">
				<TabContainer
					hobbyData={hobbyData}
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				>
					<MediaSlider data={data} />
				</TabContainer>
			</div>
			<Spacer size="mb-16" />
			<h1>Music</h1>
			<p>--- wip ---</p>
		</section>
	);
};
