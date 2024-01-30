'use client';
import React, { useContext } from 'react';
import SectionRight from './SectionRight';
import SectionLeft from './SectionLeft';
import { StepsContext } from './index';

export default function ProfileBox() {
	const { steps } = useContext(StepsContext) as any;
	return (
		<>
			{steps.map((step: any) => {
				return (
					<div
						key={step.id}
						className="w-[458px] h-[156px] p-5 bg-white justify-between items-start flex flex-row gap-auto"
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

{
	/* <span className="w-[193px] h-[90px] m-[30px] flex flex-row">
							<span className="w-[38px] h-[px] items-start gap-[10px]">
								<input
									type="checkbox"
									className="w-[20] h-[19] border-[1px]"
									checked={step.completed}
									onChange={() => {}}
								/>
							</span>
							<span className="w-[143px] h-[90px] flex flex-col">
								<span
									className={`w-[143px] h-[26px] ${
										step.id === currentStep ? 'font-bold' : 'font-normal'
									} font-`}
								>
									{step.name}
								</span>
								<span className="w-[143px] h-[20px] text-[15px] leading-[19.8px] text-[#4375FB80]">
									{step.completed && step.completionSubText}
								</span>
								<span className="w-[143px] h-[42px] text-[32px] bold tracking-tighter text-[#4375FB]">
									{step.completed &&
										(step.completionText ? step.completionText : 'Complete')}
								</span>
							</span>
						</span>
						<span className="w-[149px] h-[116px] m-[30px] flex flex-col justify-between items-center">
							<span>{step.completed && formatDate(new Date())}</span>
							<button
								disabled={currentStep !== step.id}
								className={` w-[149px] h-[52px] border-[1px]  ${
									step.completed
										? 'border-[#4375FB] text-[#4375FB] bg-white'
										: currentStep === step.id
										? 'bg-blue-500 text-white'
										: 'bg-blue-300 text-white'
								} py-[17px] px-[31px] flex justify-center items-center`}
								onClick={() => {
									setSteps((steps) => {
										const index = steps.findIndex(
											(step) => step.id === currentStep
										);
										const newSteps = [...steps];
										newSteps[index].completed = true;
										return newSteps;
									});
									setCurrentStep((id) => id + 1);
								}}
							>
								{step.completed
									? step.id === 1
										? 'Download '
										: 'Receipt'
									: 'Complete'}
							</button>
						</span> */
}
