/* eslint-disable @next/next/no-img-element */

import logo from './Logo.svg';

export default function TopChild() {
	return (
		<div className="w-[20rem] h-[12.5rem] flex flex-row justify-center items-center bg-white">
			<img
				className="w-[58.15px] h-[36.10px] hover:scale-150"
				src="/Logo_Back 1.png"
				alt="logo"
			/>
		</div>
	);
}
