import { Spacer } from '../UI/Spacer';
import { ImageCard } from '../UI/ImageCard';
import { projectData } from '../../data/projectData';

export const Projects = () => {
	return (
		<section id="projects" className="flex flex-col items-center text-center px-4 sm:px-32 md:px-0">
			<div className="mb-12 flex items-center">
				<h1 className=" mr-6">Projects</h1>
			</div>
			<p>Here are some selected projects i worked on:</p>
			<Spacer size="mb-16" />
			<CardContainer />
		</section>
	);
};

const CardContainer = () => {
	return (
		<div
			id="projectContainer"
			className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 "
		>
			{projectData &&
				projectData.map((data) => {
					return <ImageCard data={data} key={data.title} />;
				})}
		</div>
	);
};
