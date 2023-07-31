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
			<div className="media-container sm:w-3/4">
				<TabContainer
					music
					data={playlists}
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				>
					<iframe
						className="min-h-[666px] rounded-2xl border-2 border-neutral-800 dark:border-green-200 box-border"
						src={`https://open.spotify.com/embed/playlist/${data.id}?utm_source=generator&theme=0`}
						width="100%"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</TabContainer>
			</div>
		</>
	);
};
