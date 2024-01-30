import React from 'react';

export default function SectionLeft({ step }: { step: any }) {
	return (
		<div className="h-auto w-auto flex flex-row gap-[30px] border border-red-300 justify-between items-start">
			<input
				type="checkbox"
				className="w-[20] h-[19] border-[1px]"
				checked={step.completed}
				onChange={() => {}}
			/>
			<span className="w-auto h-auto flex flex-col">
				<span className="text-[20px] h-[26px]">{step.name}</span>
				<span className="text-[14px] h-[20px]">{step.completionSubText}</span>
				<span className="text-[32px] h-[42px] bold">{step.completionText}</span>
			</span>
		</div>
	);
}
