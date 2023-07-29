import { turntable } from '../assets/images/3d/turntable';
import hammer from '../assets/images/3d/mjölnir.png';
import wheeler from '../assets/videos/5wheeler.mp4';
import { ufo } from '../assets/images/3d/ufo';
import { knoop } from '../assets/images/3d/knoopit';

export const hobbyData = [
	{
		type: 'image',
		title: 'Turntable',
		imgs: turntable,
		tags: ['3d'],
	},
	{
		type: 'image',
		title: 'Hammer',
		imgs: [hammer],
		tags: ['3d'],
	},
	{
		type: 'image',
		title: 'Ufo',
		imgs: ufo,
		tags: ['3d'],
	},
	{
		type: 'video',
		title: '5-Wheeler ',
		imgs: [wheeler],
		tags: ['3d'],
	},
	{
		type: 'image',
		title: 'Knoop.it',
		imgs: knoop,
		tags: ['3d'],
	},
];
