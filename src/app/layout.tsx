import SideBar from '@/components/sideBar';
import './globals.css';
import TopbarOne from '@/components/Topbar/TopbarOne';
import TopbarTwo from '@/components/Topbar/TopbarTwo';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-zinc-300">
				<SideBar />
				<span className="relative bg-zinc-300 h-full w-full m-[0.3125rem] flex flex-col gap-[0.3125rem]">
					<TopbarOne />
					<TopbarTwo />
					{children}
				</span>
			</body>
		</html>
	);
}
