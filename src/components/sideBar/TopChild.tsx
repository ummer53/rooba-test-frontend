/* eslint-disable @next/next/no-img-element */
import Logo from './Logo';
import logo from './Logo.svg';

export default function TopChild() {
	return (
		<div className="w-[20rem] h-[12.5rem] flex flex-row justify-center items-center bg-white">
			<Logo />
		</div>
	);
}
