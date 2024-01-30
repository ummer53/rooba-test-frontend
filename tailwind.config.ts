import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				black: '#000000',
				'zinc-900': '#191819',
				'zinc-800': '#1C1B1F',
				'blue-500': '#4374FB',
				'neutral-500': '#7C7C7C',
				'zinc-300': '#D9D9D9',
				'neutral-200': '#E1E1E1',
				'zinc-100': '#F2F2F2',
				white: '#FFFFFF',
			},
		},
	},
	plugins: [],
};
export default config;
