export const TabContainer = ({
	music,
	data,
	children,
	currentTab,
	setCurrentTab,
}) => {
	return (
		<div className="w-full sm:px-4">
			<ul className="flex flex-wrap  text-center text-sm font-medium text-gray-500  dark:text-gray-400">
				{!music &&
					data &&
					data.map((item, index) => {
						// map through all entries to get tab names
						return (
							<li
								className={`mr-2 cursor-pointer
                            ${item.title === currentTab ? 'active' : ''}`}
								key={index}
								onClick={() => {
									setCurrentTab(item.title);
								}}
							>
								<span
									className={`inline-block rounded-t-lg p-4 hover:bg-neutral-200/30 active:bg-neutral-200/20
                                ${
																	item.title === currentTab
																		? ' bg-neutral-200/30 font-bold'
																		: ''
																}`}
								>
									{item.title}
								</span>
							</li>
						);
					})}
				{music &&
					data &&
					data.map((item, index) => {
						// map through all entries to get tab names
						return (
							<li
								className={`mr-2 cursor-pointer
                            ${item.title === currentTab ? 'active' : ''}`}
								key={index}
								onClick={() => {
									setCurrentTab(item.title);
								}}
							>
								<p
									className={`inline-block cursor-pointer rounded-t-lg p-4 hover:bg-neutral-200/30 active:bg-neutral-200/20
                                ${
																	item.title === currentTab
																		? ' bg-neutral-200/30 font-bold'
																		: ''
																}`}
								>
									{item.title}
								</p>
							</li>
						);
					})}
			</ul>

			{children}
		</div>
	);
};
