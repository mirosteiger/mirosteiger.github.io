import { Spacer } from '../UI/Spacer';
import { ThreeD } from './3D';
import { Music } from './Music';

export const Hobbies = () => {

	return (
		<section className="flex flex-col items-center text-center sm:px-12 md:p-0">
			<div className="mb-12 flex items-center">
				<h1 className=" mr-6">Hobbies</h1>
			</div>
			<Spacer size="mb-16" />
			<ThreeD />
			<Spacer size="mb-16" />
			<Music />
		</section>
	);
};
