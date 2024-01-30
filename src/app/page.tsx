'use client';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import MainImg from '@/components/MainImg';
import BottomSection from '@/components/bottomSection';
import PriorityInfo from '@/components/priorityInfo';

export default function Home() {
	return (
		<main className=" absolute w-[1115px] h-[807px] text-3xl overflow-y-scroll top-[219px] bg-white p-[60px]">
			<div className="w-[995px] flex flex-col bg-white mx-auto gap-[10px]">
				<CustomBreadcrumbs />
				<MainImg />
				<PriorityInfo />
				<BottomSection />
			</div>
		</main>
	);
}
