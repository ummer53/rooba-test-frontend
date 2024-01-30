'use client';
import React, { useEffect, useContext } from 'react';
import ProfileBox from './ProfileBox';
import { createContext } from 'react';
import { useSteps } from './useHooks';

export const StepsContext = createContext({});

export default function Profile() {
	const { steps, completeStep, handleNext, activeStep } = useSteps();

	return (
		<div className="w-[473px] h-[961px] gap-[5px] flex flex-col bg-zinc-300 shadow-inner mt-[5px]">
			<StepsContext.Provider
				value={{ steps, completeStep, handleNext, activeStep }}
			>
				<ProfileBox />
			</StepsContext.Provider>
		</div>
	);
}
