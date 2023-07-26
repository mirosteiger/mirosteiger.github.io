import { Spacer } from './components/UI/Spacer';
import Layout from './components/layout/Layout';
import { About } from './components/sections/About';
import { Hobbies } from './components/sections/Hobbies';
import { Projects } from './components/sections/Projects';

function App() {
	return (
		<Layout>
			<Spacer size="h-24 md:h-16" />
			<About />
			{/* <Spacer size="h-36" />
			<div className="border-2 border-green-300 py-12 text-center">
				<h3> --- Hier ne lustige schmale 3D-Sache rein vielleicht ---</h3>
			</div> */}
			<Spacer id="projects" size="h-36" />
			<Projects />
			<Spacer id="hobbies"size="h-36" />
			<Hobbies />
		</Layout>
	);
}

export default App;
