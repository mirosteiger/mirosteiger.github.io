import { useState } from 'react';
import { MediaSlider } from '../UI/MediaSlider';
import { TabContainer } from '../UI/TabContainer';
import { hobbyData } from '../../data/hobbydata';

export const ThreeD = () => {
	const [currentTab, setCurrentTab] = useState(hobbyData[0].title);
	var data;
	hobbyData
		.filter((item) => item.title === currentTab)
		.map((i) => {
			data = i;
		});

	return (
		<>
			<h1 className='mb-8'>3D</h1>
			<div className="media-container sm:w-3/4">
				<TabContainer
					data={hobbyData}
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				>
					<MediaSlider data={data} />
				</TabContainer>
			</div>
		</>
	);
};
