import { DarkThemeToggle } from 'flowbite-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useState } from 'react';

const Navigation = () => {
	const scrollPosition = useScrollPosition();
	const [activeLink, setActiveLink] = useState();

	return (
		<nav className="fixed flex w-full place-items-center justify-center md:justify-around">
			<div
				id="greets"
				className={`-mb-48 flex items-center transition-all md:mb-0 ${
					scrollPosition >= 30 ? ' opacity-0' : ' opacity-100 '
				}`}
			>
				<span className="mr-6 animate-wiggle-hand text-5xl">👋🏼</span>
				<h1 className=" mr-6">Gude</h1>
			</div>
			<div
				id="navContainer"
				className={`xs:px-1 items-center px-2 transition-all duration-300 sm:px-10
          ${
						scrollPosition >= 50
							? 'fixed z-10 flex justify-between rounded-xl border-2 border-red-200 bg-gray-900 bg-opacity-30 px-10 py-3 backdrop-blur-sm backdrop-filter'
							: 'fixed flex justify-between rounded-xl px-10 py-3 '
					}
        `}
			>
				<NavItem
					id={1}
					to="#top"
					activeLink={activeLink}
					setActiveLink={setActiveLink}
				>
					About
				</NavItem>
				<NavItem
					id={2}
					to="#projects"
					activeLink={activeLink}
					setActiveLink={setActiveLink}
				>
					Projects
				</NavItem>
				<NavItem
					id={3}
					to="#hobbies"
					activeLink={activeLink}
					setActiveLink={setActiveLink}
				>
					Hobbies
				</NavItem>
			</div>
			{/* <NavItem id={4}>
				</NavItem> */}
			<DarkThemeToggle
				className={` translate-x-20 transition-all sm:translate-x-56
        `}
			/>
		</nav>
	);
};

const NavItem = ({ children, id, to, activeLink, setActiveLink }) => {
	return (
		<div
			id={`item-slot-${id}`}
			className="active:border-1 mx-4 w-auto cursor-pointer active:border-red-400 "
			onClick={() => setActiveLink(id)}
		>
			<a
				href={to}
				className="text-center text-white no-underline hover:text-white "
			>
				<p
					style={{ textShadow: '2px 2px 2px black' }}
					className={`before:font-bold hover:scale-105 hover:font-bold ${
						activeLink === id ? 'scale-105 font-bold underline' : ''
					}`}
				>
					{children}
				</p>
			</a>
		</div>
	);
};
export default Navigation;
