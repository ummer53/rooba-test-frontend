import React, { useContext, useState } from 'react';
import { useSteps } from './useHooks';
import { StepsContext } from '.';

export default function SectionRight({ step }: { step: any }) {
	const { completeStep } = useContext(StepsContext) as any;
	return (
		<div className="h-[116px] flex flex-col justify-between items-end">
			<span className="text-[20px]">
				{step.completed && formatDate(new Date())}
			</span>
			{!step.completed && (
				<button
					onClick={() => {
						completeStep(step.id);
					}}
					className="w-[149px] h-[52px] border-[1px] bg-[#4375FB]  text-[14px] text-white py-[17px] px-[31px] flex justify-center items-center"
				>
					Complete
				</button>
			)}
			{step.completed &&
				(step.id === 1 ? (
					<DownloadButton title="Download" />
				) : (
					<DownloadButton title="Receipt" />
				))}
		</div>
	);
}

export function DownloadButton({ title }: { title: string }) {
	return (
		<div className="w-[149px] h-[52px] border-[1px] border-[#4375FB] bg-white  text-[14px] text-[#4375FB] py-[17px] px-[31px] flex justify-between items-center">
			{title}
			<svg
				width="12"
				height="12"
				viewBox="0 0 12 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="download_2">
					<mask
						id="mask0_179_815"
						style={{ maskType: 'alpha' }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="12"
						height="12"
					>
						<rect id="Bounding box" width="12" height="12" fill="#D9D9D9" />
					</mask>
					<g mask="url(#mask0_179_815)">
						<path
							id="download_2_2"
							d="M2 11V10H10V11H2ZM6 9L2.5 4.5H4.5V1H7.5V4.5H9.5L6 9ZM6 7.375L7.45 5.5H6.5V2H5.5V5.5H4.55L6 7.375Z"
							fill="#4375FB"
						/>
					</g>
				</g>
			</svg>
		</div>
	);
}

function formatDate(date: Date) {
	return date.toLocaleDateString('en-GB', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit',
	});
}
