import React from 'react';
import OverviewInfo from './OverviewInfo';
import Profile from './Profile';
import PriorityInfo from '../priorityInfo';

export default function BottomSection() {
	return (
		<div className="w-[985px] h-[530px] flex flex-row gap-[5px] border-zinc-300 border-[5px] bg-zinc-300 mx-auto overflow-y-scroll">
			<OverviewInfo />
			<Profile />
		</div>
	);
}
