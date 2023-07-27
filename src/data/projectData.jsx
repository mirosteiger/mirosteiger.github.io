import psychonauts from '../assets/images/projectThumbnails//psychonauts.png';
import step from '../assets/images/projectThumbnails//stepsequencer.png';
import thesis from '../assets/images/projectThumbnails//thesis.png';
import knoop1 from "../assets/images/projectThumbnails//knoop1.png"
import knoop2 from "../assets/images/projectThumbnails//knoop2.png"
import fairify from "../assets/images/projectThumbnails//fairify.png"
import pyGam from "../assets/images/projectThumbnails//pyGam.png"

export const projectData = [
	{
		title: 'Psychonauts',
		imgUrl: psychonauts,
		description:
			'This is a landingpage for a ficitional music festival i would enjoy. It has implemented a user login, a database, state management as well as a shopping cart functionality (which is currently a WIP).',
		ghLink: 'https://github.com/mirosteiger/festival-landingpage',
		liveLink: 'https://mirosteiger.github.io/festival-landingpage/',
		tags: ['typescript', 'react', 'firebase', 'zustand'],
	},
	{
		title: 'Online Step Sequencer',
		imgUrl: step,
		description:
			'I tried to utilize the web audio api using the ToneJs Framework to build a simple step sequencer. ⇧ + Click on a tile to add triplets. (Bug: You have to initially click on a sample to hear something. Going to fix ths later) 🫡. ',
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
	{
		title: 'ADV-Scripts',
		imgUrl: pyGam,
		description:
			'A set of terminal based python tools to update, create and automate actions in the Google AdManager via its Pyhton API. It minimizes manual effort in updating thousands of line items for various time consuming tasks.',
		ghLink: 'https://github.com/mirosteiger/Google-AdManager-Python-Tools',
		tags: ['python', 'Google API',  ],
	},
	{
		title: 'Knoop.it',
		imgUrl: knoop2,
		description:
			'Knoop.it (Dutch for "knot it") was a student project. We built a web app for generating 3D-Materials by creating Shaders with a Node-Editor. The editing was based on a realtime database to allow online collaboration.',
		ghLink: 'https://github.com/samimaa/Knoopit',
		tags: ['3D-rendering', 'realtime collaboration', 'firebase', 'react', 'state management', 'threeJS'	],
	},
	{
		title: 'Fairify',
		imgUrl: fairify,
		description:
			'Another student group project. A web application to take part in an online trade fair. It implements essential features of a trade fair. Exhibitors have opportunities to advertise products or services, make contacts and listen to or give presentations via video call.',
		ghLink: 'https://github.com/josbek/fairify',
		tags: ['react', 'typescript', 'full stack', 'nodeJS', 'mongo db', 'threeJS'],
	},
];
