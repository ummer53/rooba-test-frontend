import React from 'react';
import Landmarks from './Landmarks';
import Map from './Map';
import WhyWhatOverview from './WhyWhatOverview';

export default function OverviewInfo() {
	return (
		<>
			<div className="w-[507px] h-[530px] gap-[5px] flex flex-col bg-zinc-300  overflow-y-scroll">
				<WhyWhatOverview />
				<Landmarks />
				<Map />
			</div>
		</>
	);
}
