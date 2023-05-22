export const DrumsList: {
	keyCode: number;
	keyName: string;
	sound: string;
	file: string;
	soundEle?: HTMLAudioElement;
	ele?: HTMLElement;
	isPlaying?: boolean;
}[] = [
	{
		keyCode: 65,
		keyName: 'A',
		sound: 'clap',
		file: 'sounds/clap.wav'
	},
	{
		keyCode: 83,
		keyName: 'S',
		sound: 'hihat',
		file: 'sounds/hihat.wav'
	},
	{
		keyCode: 68,
		keyName: 'D',
		sound: 'kick',
		file: 'sounds/kick.wav'
	},
	{
		keyCode: 70,
		keyName: 'F',
		sound: 'openhat',
		file: 'sounds/openhat.wav'
	},
	{
		keyCode: 71,
		keyName: 'G',
		sound: 'boom',
		file: 'sounds/boom.wav'
	},
	{
		keyCode: 72,
		keyName: 'H',
		sound: 'ride',
		file: 'sounds/ride.wav'
	},
	{
		keyCode: 74,
		keyName: 'J',
		sound: 'snare',
		file: 'sounds/snare.wav'
	},
	{
		keyCode: 75,
		keyName: 'K',
		sound: 'tom',
		file: 'sounds/tom.wav'
	},
	{
		keyCode: 76,
		keyName: 'L',
		sound: 'tink',
		file: 'sounds/tink.wav'
	}
];
