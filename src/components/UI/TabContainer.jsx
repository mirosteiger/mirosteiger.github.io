import { useEffect, useState } from 'react';

export const TabContainer = ({
	hobbyData,
	children,
	currentTab,
	setCurrentTab,
}) => {
	

	return (
		<div className="sm:px-4">
			<ul className="flex flex-wrap border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
				{hobbyData &&
					hobbyData.map((item, index) => {
						// map through all entries to get tab names
						return (
							<li
								className={`mr-2
                            ${item.title === currentTab ? 'active' : ''}`}
								key={index}
								onClick={() => {setCurrentTab(item.title)}}
							>
								<p
									className={`inline-block cursor-pointer rounded-t-lg p-4 hover:bg-neutral-200/30 active:bg-neutral-200/20
                                ${item.title === currentTab ? ' font-bold bg-neutral-200/30' : ''}`}
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
