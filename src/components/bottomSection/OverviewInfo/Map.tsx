/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Map() {
	return (
		<div className="w-full h-auto gap-[30px] p-[30px] flex flex-col items-start justify-between bg-white">
			<span className="text-[32px] leading-[42.24px] tracking-[-2%]">Map</span>
			<img className=" w-full h-[226px]" src="/Why invest_.png" alt="Map" />
			<span className="w-full h-auto flex flex-row items-center justify-end">
				<span className="h-[52px] w-[136px] py-[17px] p-[10px] border-[1px] flex flex-row justify-between items-center  gap-[10px] border-[#4375FB] ">
					<span className="text-[14px] w-[96px] h-[18px] font-normal tracking-tighter leading-[18.48px] text-[#4375FB] ">
						Schedule a call
					</span>
					<img
						className="w-[12px] h-[12px]"
						src="/arrow_back_ios_new.svg"
						alt="phone"
					/>
				</span>
			</span>
		</div>
	);
}
