import React from 'react';
import OverviewInfo from './OverviewInfo';
import Profile from './Profile';
import PriorityInfo from '../priorityInfo';

export default function BottomSection() {
	return (
		<div className="w-full h-[530px] flex flex-row gap-[5px] bg-zinc-300 mx-auto overflow-auto">
			<OverviewInfo />
			<Profile />
		</div>
	);
}
