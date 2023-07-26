export const BurgerIcon = ({ setIsNavOpen }) => {
	return (
		<div
			className="ml-8 space-y-2"
			onClick={() => {
				setIsNavOpen((prev) => !prev);
			}}
		>
			<span className="block h-0.5 w-8 bg-gray-600"></span>
			<span className="block h-0.5 w-8 bg-gray-600"></span>
			<span className="block h-0.5 w-8 bg-gray-600"></span>
		</div>
	);
};
