import React from 'react';
import ProfileBox from './ProfileBox';

export default function Profile() {
	return (
		<div className="w-[473px] h-[961px] gap-[5px] flex flex-col bg-white overflow-y-scroll shadow">
			<ProfileBox />
		</div>
	);
}
