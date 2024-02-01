import React from 'react';

export default function TopbarTwo() {
	return (
		<div className="absolute w-full h-[6.375rem] py-[1.875rem] px-[3.75rem] left-0 top-[7rem] bg-white justify-between items-center inline-flex">
			<div className="text-black text-[32px] font-bold font-['Switzer']">
				Choose your new site
			</div>
			<div className="w-[250px] h-8 justify-between items-center flex">
				<div className="w-[30px] h-8 relative">
					<div className="w-[30px] h-[2.50px] left-0 top-[23px] absolute bg-black" />
					<div className="w-[29px] h-8 left-[1px] top-0 absolute flex-col justify-center items-center inline-flex">
						<div className="w-[29px] h-8 text-right text-black text-lg font-medium font-['Switzer']">
							1
						</div>
					</div>
					<div className="w-3 h-3 left-[3px] top-[7px] absolute">
						<div className="w-3 h-3 left-0 top-0 absolute bg-black rounded-full" />
					</div>
				</div>
				<div className="w-[30px] h-8 relative">
					<div className="w-[30px] h-[2.50px] left-0 top-[23px] absolute bg-black bg-opacity-25" />
					<div className="w-[29px] h-8 left-[-9px] top-0 absolute flex-col justify-center items-center inline-flex">
						<div className="w-[29px] h-8 text-right text-black text-opacity-25 text-lg font-medium font-['Switzer']">
							2
						</div>
					</div>
				</div>
				<div className="w-[30px] h-8 relative">
					<div className="w-[30px] h-[2.50px] left-0 top-[23px] absolute bg-black bg-opacity-25" />
					<div className="w-[29px] h-8 left-[-9px] top-0 absolute flex-col justify-center items-center inline-flex">
						<div className="w-[29px] h-8 text-right text-black text-opacity-25 text-lg font-medium font-['Switzer']">
							3
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
