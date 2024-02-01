'use client';
import { useState } from 'react';

const sideBarChildrenLinks = [
	{
		name: 'Cart',
		path: '#',
	},
	{
		name: 'Market',
		path: '#',
	},
	{
		name: 'Settings',
		path: '#',
	},
	{
		name: 'Logout',
		path: '#',
	},
];

export default function SidebarChildren() {
	const [activeLink, setActiveLink] = useState('');
	return (
		<div className="flex flex-col gap-[0.3125rem]">
			{sideBarChildrenLinks.map((link) => {
				return (
					<div
						className={`h-[8.90625rem] w-[20rem] flex justify-center items-center bg-white ${
							activeLink === link.name
								? 'text-black'
								: 'text-zinc-300 hover:bg-zinc-100'
						} `}
						key={link.name}
					>
						<a onClick={() => setActiveLink(link.name)} href={link.path}>
							{link.name}
						</a>
					</div>
				);
			})}
		</div>
	);
}
