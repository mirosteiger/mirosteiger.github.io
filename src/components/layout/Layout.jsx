import Navigation from './Navigation';

const Layout = ({ children }) => {
	return (
		<div className="xl:px-30 px-4">
			<header className=" absolute left-0 right-0 top-11 md:top-6">
				<Navigation />
			</header>

			<main className="place-items-center py-24 md:p-32">{children}</main>
		</div>
	);
};

export default Layout;
