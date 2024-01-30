const landmarks = [
	{
		landmark: 'Airport',
		name: 'Airport 1',
		distance: '100 km',
		icon: '/flight.svg',
	},
	{
		landmark: 'Airport',
		name: 'Green Which Terminal',
		distance: '25 km',
		icon: '/flight.svg',
	},
	{
		landmark: 'Highway',
		name: 'Highway number 1',
		distance: '100 km',
		icon: '/add_road.svg',
	},
];

export default function Landmarks() {
	return (
		<div className="w-[507px] h-[305px] gap-[10px] p-[30px] flex flex-col bg-white">
			<span className="h-[42px] text-[32px]">Landmarks</span>
			<span className="w-full h-auto p-[10px] gap-[10px] flex flex-col justify-between items-center">
				{landmarks.map((landmark) => {
					return (
						<div
							key={landmark.name}
							className="w-full h-auto gap-[10px] flex flex-col justify-between items-center  border "
						>
							<span className="w-full h-auto flex flex-row justify-between items-center border-black">
								<span className="w-[200.5px] text-[20px] leading-[26.4px] flex flex-row gap-[5px] justify-start items-center">
									<img src={landmark.icon} />
									{landmark.landmark}
								</span>
								<span className="text-[20px] flex flex-col items-end bg-green-200">
									<span className="text-[20px] leading-[26.4px] tracking-[-2%]">
										{landmark.distance}
									</span>
									<span className="text-[11px] leading-[14.52px] tracking-[-2%]">
										{landmark.name}
									</span>
								</span>
							</span>
							<span className="w-full h-[1px] bg-black" />
						</div>
					);
				})}
			</span>
		</div>
	);
}
