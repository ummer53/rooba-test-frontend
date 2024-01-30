import React from 'react';

const sections = [
	{
		title: 'Overview',
		content:
			'Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.',
	},
	{
		title: 'Why?',
		content:
			'Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.',
	},
	{
		title: 'What?',
		content:
			'Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love.',
	},
];

export default function WhyWhatOverview() {
	return (
		// <div className="w-[507px] gap-[5px] flex flex-col bg-zinc-300 ">
		<>
			{sections.map((section) => {
				return (
					<div
						key={section.title}
						className="w-[507px] h-[237px] gap-[30px] flex flex-col justify-between items-start p-[30px] bg-white"
					>
						<span className="text-[32px]">{section.title}</span>

						<span className="w-[447] h-[105] text-[16px] tracking-[-2%] leading-[21.12px]">
							{section.content}
						</span>
					</div>
				);
			})}
		</>
		// </div>
	);
}
