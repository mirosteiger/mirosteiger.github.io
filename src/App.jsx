import { Spacer } from './components/UI/Spacer';
import Layout from './components/layout/Layout';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';

function App() {
	return (
		<Layout>
			<Spacer size="h-24" />
			<About />
			<Spacer size="h-36" />
			<div className="border-2 border-green-300 py-12">
				<h3> --- Hier ne lustige schmale 3D-Sache rein vielleicht ---</h3>
			</div>
			<Spacer size="h-36" />
			<Projects />
		</Layout>
	);
}

export default App;
