'use client';
import React, { useContext } from 'react';
import { StepsContext } from '.';

export default function SectionLeft({ step }: { step: any }) {
	const { activeStep } = useContext(StepsContext) as any;
	return (
		<div className="h-auto w-auto flex flex-row gap-[30px] justify-between items-start">
			<input
				type="checkbox"
				className="w-[20] h-[19] border-[1px]"
				checked={step.completed}
				readOnly
			/>
			<span className="w-auto h-auto flex flex-col">
				<span
					className={`text-[20px] h-[26px] bold ${
						activeStep === step.id ? 'font-bold' : ''
					}`}
				>
					{step.name}
				</span>
				<span className="text-[14px] h-[20px] text-[#4375FB80]">
					{step.completed && step.completionSubText}
				</span>
				<span className="text-[32px] h-[42px] bold text-[#4375FB]">
					{step.completed &&
						(step.completionText ? step.completionText : 'Complete')}
				</span>
			</span>
		</div>
	);
}
