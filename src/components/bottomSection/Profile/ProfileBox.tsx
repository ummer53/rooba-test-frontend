import React from 'react';
import { useState } from 'react';
import SectionRight from './SectionRight';
import SectionLeft from './SectionLeft';

const ProfileCompletionSteps = [
	{
		id: 1,
		name: 'Complete Profile',
		completed: false,
		completionText: 'Complete',
		completionSubText: 'Good  job!',
	},
	{
		id: 2,
		name: 'Step 1',
		completed: false,
		completionText: 'Rs 1,00,000',
		completionSubText: '5% of total amount',
	},
	{
		id: 3,
		name: 'Step 2',
		completed: false,
	},
	{
		id: 4,
		name: 'Step 3',
		completed: false,
	},
	{
		id: 5,
		name: 'Step 4',
		completed: false,
	},
	{
		id: 6,
		name: 'Step 5',
		completed: false,
	},
];

export default function ProfileBox() {
	const [currentStep, setCurrentStep] = useState(1);
	const [steps, setSteps] = useState(ProfileCompletionSteps);

	return (
		<>
			{steps.map((step) => {
				return (
					<div
						key={step.id}
						className="w-[458px] h-[156px] p-5 bg-white justify-between items-start flex flex-row gap-auto"
					>
						{/* chechbox 20 19*/}
						<SectionLeft step={step} />

						{/*box 383 116 */}

						<div className="h-[116px] flex flex-col justify-between items-start border-black border">
							{/* box 1 with name subtext completion text */}

							{/* box 2 with date and button */}

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
