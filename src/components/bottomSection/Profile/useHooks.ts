import { useState, createContext } from 'react';

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

export const useSteps = () => {
	const [steps, setSteps] = useState(ProfileCompletionSteps);
	const [activeStep, setActiveStep] = useState(1);

	const handleNext = () => {
		// Check if the next step is within the range of available steps
		if (activeStep < ProfileCompletionSteps.length) {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
	};

	const completeStep = (id: number) => {
		const updatedSteps = steps.map((step) => {
			if (step.id === id) {
				return {
					...step,
					completed: true,
				};
			}
			return step;
		});
		setSteps(updatedSteps);
		handleNext();
	};

	return {
		steps,
		handleNext,
		completeStep,
		activeStep,
	};
};
