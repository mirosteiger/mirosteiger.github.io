import psychonauts from '../assets/images/psychonauts.png';
import step from '../assets/images/stepsequencer.png';
import thesis from '../assets/images/thesis.png';

export const projectData = [
	{
		title: 'Psychonauts',
		imgUrl: psychonauts,
		description:
			'This is a landingpage for a ficitional music festival i would enjoy. It has implemented a user login, a database, state management as well as a shopping cart functionality.',
		ghLink: 'https://github.com/mirosteiger/festival-landingpage',
		liveLink: 'https://mirosteiger.github.io/festival-landingpage/',
		tags: ['typescript', 'react', 'firebase', 'zustand'],
	},
	{
		title: 'Online Step Sequencer',
		imgUrl: step,
		description:
			'I tried to utilize the web audio api using the ToneJs Framework to build a simple step sequencer. Still a little buggy at the moment. May fix this in the future.',
		ghLink: 'https://github.com/mirosteiger/react-stepsequencer',
		liveLink: 'https://mirosteiger.github.io/react-stepsequencer/',
		tags: ['javascript', 'react', 'audio'],
	},
	{
		title: 'Bachelor Thesis',
		imgUrl: thesis,
		description:
			'My thesis was about creating an efficient and realistic particle system in the Unity-Engine to render fire and smoke in a VR environment. Nailed it!',
		ghLink: 'https://github.com/mirosteiger/bachelor-thesis/tree/main',
		liveLink:
			'https://drive.google.com/file/d/1ELUMXIF8bbF-x9TsSAflr_rVCmgpb9Ai/view?usp=sharing',
		tags: ['c#', 'vr', 'volume rendering', 'ray marching', 'real time'],
	},
];
