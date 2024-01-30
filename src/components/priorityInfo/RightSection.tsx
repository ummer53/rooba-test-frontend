/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function RightSection() {
	return (
		<div className="grow shrink basis-0 flex-col justify-start items-end gap-2.5 inline-flex">
			<div className="w-[273px] flex-col justify-between items-end flex gap-[5px]">
				<div className="w-[273px] h-[52px] px-[31px] py-[17px] bg-blue-500 justify-center items-center gap-2.5 inline-flex">
					<div className="text-zinc-100 text-sm font-normal">Complete</div>
				</div>
				<div className="w-[136px] h-[52px] px-[31px] py-[17px] bg-white border border-blue-500 justify-center items-center gap-2.5 inline-flex">
					<div className="text-blue-500 text-sm font-normal tracking-tighter">
						Site visit
					</div>
					<div className="origin-top-left -rotate-180 w-3 h-3 relative">
						<div className="w-3 h-3 left-0 top-0 absolute origin-top-left -rotate-180 ">
							<img src="/arrow_back_ios_new.svg" alt="arrow" />
						</div>
					</div>
				</div>
			</div>
			<div className="w-[273px] h-[37px] flex-col justify-start items-start flex">
				<div className="self-stretch justify-between items-end inline-flex">
					<div className="text-blue-500 text-2xl font-bold font-['Switzer']">
						Rs 20,00,000
					</div>
					<div className="text-black text-opacity-30 text-[15px] font-normal font-['Switzer']">
						Rs 65.00,000
					</div>
				</div>
				<div className="self-stretch h-[5px] flex-col justify-start items-start gap-2.5 flex">
					<div className="self-stretch h-[5px] bg-neutral-200">
						<div className="w-[94px] h-[5px] bg-blue-500" />
					</div>
				</div>
			</div>
		</div>
	);
}
