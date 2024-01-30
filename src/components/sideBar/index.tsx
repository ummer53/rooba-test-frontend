import SidebarChildren from './SideLinks';
import TopChild from './TopChild';

export default function SideBar() {
	return (
		<div className="w-[20rem] flex flex-col gap-[0.3125rem] h-[63.75rem] justify-start items-center m-[0.3125rem] bg-gray-300">
			<TopChild />
			<SidebarChildren />
		</div>
	);
}
