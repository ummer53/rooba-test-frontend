/* eslint-disable @next/next/no-img-element */
import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const features = [
	{
		name: 'Adult Rides',
		icon: '/bolt.svg',
	},
	{
		name: 'Family Rides',
		icon: '/humidity_low.svg',
	},
	{
		name: 'Restaurants',
		icon: '/agriculture.svg',
	},
	{
		name: 'Premium',
		icon: '/outdoor_garden.svg',
	},
];

const pInfo = [
	{
		id: 1,
		name: 'Area',
		value: '200 Acres',
	},
	{
		id: 2,
		name: 'Starting price',
		value: 'Rs 1,00,000',
	},
	{
		id: 3,
		name: 'Remaining days',
		value: '10 days',
	},
	{
		id: 4,
		name: 'Next check',
		value: '2.5 years',
	},
];

export default function PriorityInfo() {
	return (
		<div className="w-full h-[315.39px] p-[30px] bg-white justify-start items-start  inline-flex border-zinc-300">
			<LeftSection />
			<RightSection />
		</div>
	);
}
