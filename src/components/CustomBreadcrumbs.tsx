import { Breadcrumbs } from '@material-tailwind/react';
import React from 'react';

const breadcrumbLinks = [
	{ title: 'jMarket', href: '#' },
	{ title: 'Category 1', href: '#' },
	{ title: 'Theme park site', href: '#' },
];

export default function CustomBreadcrumbs() {
	return (
		<div className="w-full h-[3.1875rem] bg-white flex flex-row items-center justify-start">
			<Breadcrumbs
				className="text-[0.875rem] leading-[1.155rem] text-neutral-500"
				separator=">"
				fullWidth
				placeholder={undefined}
			>
				{breadcrumbLinks.map((link) => {
					return (
						<a className="m-[0.3125rem]" key={link.title} href={link.href}>
							{link.title}
						</a>
					);
				})}
			</Breadcrumbs>
		</div>
	);
}
