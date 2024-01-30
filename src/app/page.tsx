/* eslint-disable @next/next/no-img-element */
'use client';
import CustomBreadcrumbs from '@/components/CustomBreadcrumbs';
import BottomSection from '@/components/bottomSection';
import PriorityInfo from '@/components/priorityInfo';

export default function Home() {
	return (
		<main className=" absolute w-full h-[807px] text-3xl overflow-y-scroll top-[219px] bg-white p-[60px]">
			<CustomBreadcrumbs />
			<img
				src="/unsplash_s2wjvuA_mFY.png"
				alt="unsplash_s2wjvuA_mFY.png"
				className="w-[62.1875rem] h-[23.1875rem] mx-auto"
			/>
			<div className="w-full flex flex-col bg-white mx-auto gap-[10px] mt-[5px] border-[5px] border-zinc-300">
				{/*put pInfo and BS in same comp to give border , not to image and bradcrumb */}
				<PriorityInfo />
				<BottomSection />
			</div>
		</main>
	);
}
