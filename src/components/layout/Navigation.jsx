import { DarkThemeToggle } from 'flowbite-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import { BurgerIcon } from '../UI/BurgerIcon';
import { NavItem } from '../UI/NavItem';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SocialLinks } from '../UI/SocialLinks';

const Navigation = () => {
	const scrollPosition = useScrollPosition();
	const [activeLink, setActiveLink] = useState();

	const [isNavOpen, setIsNavOpen] = useState(false);

	const sections = [
		{ sectionName: 'About', anchor: '#top' },
		{ sectionName: 'Projects', anchor: '#projects' },
		{ sectionName: 'Hobbies', anchor: '#hobbies' },
	];

	return (
		<>
			<DesktopMenu
				scrollPosition={scrollPosition}
				sections={sections}
				activeLink={activeLink}
				setActiveLink={setActiveLink}
			/>

			<BurgerMenu
				scrollPosition={scrollPosition}
				setIsNavOpen={setIsNavOpen}
				isNavOpen={isNavOpen}
				sections={sections}
				activeLink={activeLink}
				setActiveLink={setActiveLink}
			/>
		</>
	);
};

export default Navigation;

const BurgerMenu = ({
	scrollPosition,
	setIsNavOpen,
	isNavOpen,
	sections,
	activeLink,
	setActiveLink,
}) => {
	return (
		<nav
			className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between py-5 backdrop-blur backdrop-filter transition-all sm:hidden 
			 ${
					scrollPosition >= 40
						? ' border-b border-green-200 bg-neutral-200 bg-opacity-30 dark:bg-neutral-800 dark:bg-opacity-70 '
						: ''
				}
`}
		>
			<section className="flex lg:hidden">
				{/* BURGER ICON */}
				<BurgerIcon setIsNavOpen={setIsNavOpen} />
				<div
					className={`absolute left-0 top-0 z-50 flex h-screen w-full translate-y-0 flex-col items-center justify-evenly bg-green-100 dark:bg-neutral-900
						${isNavOpen ? 'overflow-hidden' : 'hidden'}
					`}
				>
					<div
						className="absolute right-0 top-0 px-5 py-5"
						onClick={() => setIsNavOpen(false)}
					>
						<HiXMark className="h-8 w-8 text-gray-600" />
					</div>
					{/* Navigation Links */}
					<ul className="flex min-h-[250px] flex-col items-center justify-between">
						{sections &&
							sections.map((s, index) => {
								return (
									<NavItem
										id={index}
										to={s.anchor}
										activeLink={activeLink}
										setActiveLink={setActiveLink}
										key={s.anchor}
										setIsNavOpen={setIsNavOpen}
									>
										{s.sectionName}
									</NavItem>
								);
							})}
						<li>
							<DarkThemeToggle />
						</li>
						<SocialLinks nav />
					</ul>
				</div>
			</section>
		</nav>
	);
};

const DesktopMenu = ({
	scrollPosition,
	sections,
	activeLink,
	setActiveLink,
}) => {
	return (
		<nav className="fixed z-50 hidden w-full place-items-center justify-center sm:flex md:justify-around">
			<div
				id="navContainer"
				className={`items-center px-2 transition-all duration-300 sm:px-10 
          ${
						scrollPosition >= 50
							? 'fixed  flex justify-between rounded-xl border-2 border-green-200 bg-neutral-300 bg-opacity-30 px-10 py-3 backdrop-blur-sm backdrop-filter dark:bg-neutral-700 dark:bg-opacity-50'
							: 'fixed flex justify-between rounded-xl px-10 py-3 '
					}
        `}
			>
				{sections &&
					sections.map((s, index) => {
						return (
							<NavItem
								id={index}
								to={s.anchor}
								activeLink={activeLink}
								setActiveLink={setActiveLink}
								key={s.anchor}
							>
								{s.sectionName}
							</NavItem>
						);
					})}
			</div>

			<DarkThemeToggle
				className={` -translate-x-[9.7rem] transition-all sm:translate-x-[10rem]
        `}
			/>
		</nav>
	);
};
