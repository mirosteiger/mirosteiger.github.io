export const NavItem = ({
	children,
	id,
	to,
	activeLink,
	setActiveLink,
	setIsNavOpen,
}) => {
	const handleLinkClick = (id) => {
		setActiveLink(id);
		setIsNavOpen(false);
	};
	return (
		<li
			id={`item-slot-${id}`}
			className="active:border-1 mx-4 w-auto cursor-pointer list-none"
			onClick={handleLinkClick}
		>
			<a href={to} className="text-center">
				<p
					className={`before:font-bold hover:scale-105 hover:font-bold ${
						activeLink === id ? 'scale-105 font-bold underline' : ''
					}`}
				>
					{children}
				</p>
			</a>
		</li>
	);
};
