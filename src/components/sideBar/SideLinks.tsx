const sideBarChildrenLinks = [
	{
		name: 'Cart',
		path: '/cart',
	},
	{
		name: 'Market',
		path: '/market',
	},
	{
		name: 'Settings',
		path: '/settings',
	},
	{
		name: 'Logout',
		path: '/logout',
	},
];

export default function SidebarChildren() {
	return (
		<div className="flex flex-col gap-[0.3125rem]">
			{sideBarChildrenLinks.map((link) => {
				return (
					<div
						className="h-[8.90625rem] w-[20rem] flex justify-center items-center bg-white"
						key={link.name}
					>
						<a href={link.path}>{link.name}</a>
					</div>
				);
			})}
		</div>
	);
}
