'use client';
import React, { useContext } from 'react';
import SectionRight from './SectionRight';
import SectionLeft from './SectionLeft';
import { StepsContext } from './index';

export default function ProfileBox() {
	const { steps, activeStep } = useContext(StepsContext) as any;
	return (
		<>
			{steps.map((step: any) => {
				let active = step.id === activeStep || step.completed;

				return (
					<div
						key={step.id}
						className={`w-[458px] h-[156px] p-5 bg-white justify-between items-start flex flex-row gap-auto ${
							active ? 'opacity-100' : 'opacity-50'
						}`}
					>
						<SectionLeft step={step} />

						<div className="h-[116px] flex flex-col justify-between items-start ">
							<SectionRight step={step} />
						</div>
					</div>
				);
			})}
		</>
	);
}
