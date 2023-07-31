import { useState } from 'react';
import { TabContainer } from '../UI/TabContainer';
import { playlists } from '../../data/musicData';

export const Music = () => {
	const [currentTab, setCurrentTab] = useState(playlists[0].title);
	var data;
	playlists
		.filter((item) => item.title === currentTab)
		.map((i) => {
			data = i;
		});
	return (
		<>
			<h1 className="mb-8">Music</h1>
			<TabContainer
				music
				data={playlists}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
				src={`https://open.spotify.com/embed/playlist/${data.id}?utm_source=generator&theme=4`}
			>
				<iframe
					style={{ borderRadius: '12px', minHeight: '666px' }}
					src={`https://open.spotify.com/embed/playlist/${data.id}?utm_source=generator&theme=0`}
					width="100%"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</TabContainer>
		</>
	);
};
