/* eslint-disable @next/next/no-img-element */
import React from 'react';

const features = [
	{
		name: 'Adult Rides',
		icon: '/bolt.svg',
	},
	{
		name: 'Family Rides',
		icon: '/humidity_low.svg',
	},
	{
		name: 'Restaurants',
		icon: '/agriculture.svg',
	},
	{
		name: 'Premium',
		icon: '/outdoor_garden.svg',
	},
];

const pInfo = [
	{
		id: 1,
		name: 'Area',
		value: '200 Acres',
	},
	{
		id: 2,
		name: 'Starting price',
		value: 'Rs 1,00,000',
	},
	{
		id: 3,
		name: 'Remaining days',
		value: '10 days',
	},
	{
		id: 4,
		name: 'Next check',
		value: '2.5 years',
	},
];

export default function LeftSection() {
	return (
		<div className="w-[462.50px] flex-col justify-start items-start gap-[30px] inline-flex">
			<div className="w-[279px] text-black text-[32px] font-bold font-['Switzer']">
				Theme Park Site
			</div>
			<div className="flex-col justify-center items-start gap-2.5 flex">
				<div className="self-stretch h-[27px] justify-start items-center gap-[5px] inline-flex">
					<div className="w-6 h-6 justify-center items-center flex">
						<div className="w-6 h-6 justify-center items-center gap-2.5 inline-flex">
							<img src="/add_location.svg" alt="location icon" />

							{/* location icon*/}
						</div>
					</div>
					<div className="grow shrink basis-0 origin-top-left rotate-[-0.55deg] text-black text-opacity-30 text-base font-normal font-['Switzer']">
						Address of the site
					</div>
				</div>

				<div className="h-4 justify-start items-start gap-2.5 inline-flex">
					{features.map((feature) => {
						return (
							<div
								key={feature.name}
								className="w-[79px] px-[5px] py-[1px] bg-black bg-opacity-20 justify-between items-center gap-[5px] flex"
							>
								<div className="h-4 opacity-50 justify-start items-start gap-2.5 flex">
									<div className="grow shrink basis-0 self-stretch relative">
										<div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300">
											<img src={feature.icon} alt="bolt icon" />
										</div>
									</div>
								</div>
								<div className="text-black text-opacity-50 text-[10px] font-light font-['Switzer']">
									Adult rides
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="self-stretch justify-between items-start inline-flex">
				<div className="px-2.5 py-[5px] bg-white border border-blue-500 justify-center items-center gap-2.5 flex">
					<div className="w-4 h-4 relative">
						<div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300">
							<img src="/north_east.svg" alt="bolt icon" />
						</div>
					</div>
					<div className="text-blue-500 text-sm font-normal font-['Switzer'] underline">
						View opportunity on polygon
					</div>
				</div>
			</div>

			<div className="w-[462px] justify-start items-center gap-[30px] inline-flex">
				{pInfo.map((info) => {
					return (
						<div
							key={info.id}
							className="flex-col justify-center items-start inline-flex"
						>
							<div className="origin-top-left rotate-[-0.55deg] text-black text-xl font-normal font-['Switzer']">
								{info.value}
							</div>
							<div className="origin-top-left rotate-[-0.55deg]">
								<span className="text-black text-opacity-30 text-[11px] font-normal font-['Switzer']">
									{info.name}
								</span>
								<span className="text-black text-[11px] font-normal font-['Switzer']">
									{' '}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
