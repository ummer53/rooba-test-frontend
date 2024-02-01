/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function TopbarOne() {
	return (
		<div className="absolute w-full h-[6.6875rem] py-[1.875rem] px-[3.125rem] top-0 left-0 bg-white justify-between items-center inline-flex">
			<div className="w-[166px] px-[31px] py-[17px] bg-blue-500 justify-center items-center gap-2.5 flex">
				<div className="text-zinc-100 text-sm font-normal ">
					Complete Profile
				</div>
			</div>
			<div className="w-[23px] h-[22px] pr-[0.50px] pb-[0.08px] justify-center items-center flex">
				<div className="w-[22.50px] h-[21.92px] relative">
					<img src="/notify.svg" alt="notify" />
				</div>
			</div>
		</div>
	);
}
