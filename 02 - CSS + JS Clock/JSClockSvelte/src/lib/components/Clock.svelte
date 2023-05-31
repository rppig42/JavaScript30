<script>
	//样式参考
	//https://tfrommen.de/javascript-30-day-2-css-js-clock/

	import { spring } from 'svelte/motion';

	const tweenedOptions = {
		stiffness: 0.1,
		damping: 0.25
	};

	//spring 函数会导致时钟从59到60时转一大圈

	const hourDeg = spring(0, tweenedOptions);
	const minuteDeg = spring(0, tweenedOptions);
	const secondDeg = spring(0, tweenedOptions);

	// setInterval(() => {
	// 	const now = new Date();
	// 	const hours = now.getHours();
	// 	const minutes = now.getMinutes();
	// 	const seconds = now.getSeconds();

	// 	hourDeg.set((hours / 12) * 360);
	// 	minuteDeg.set((minutes / 60) * 360);
	// 	secondDeg.set((seconds / 60) * 360);
	// }, 1000);
</script>

<div class="clock">
	<div class="clock-face">
		<div class="hand hour-hand" style:transform={'rotate(' + $hourDeg + 'deg)'} />
		<div class="hand minute-hand" style:transform={'rotate(' + $minuteDeg + 'deg)'} />
		<div class="hand second-hand" style:transform={'rotate(' + $secondDeg + 'deg)'} />
	</div>
</div>

<style>
	.clock {
		width: 30rem;
		height: 30rem;
		border: 20px solid white;
		border-radius: 50%;
		margin: 50px auto;
		position: relative;
		box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef, inset 0 0 10px black,
			0 0 10px rgba(0, 0, 0, 0.2);
	}

	.clock-face {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.hand {
		position: absolute;
		left: 50%;
		bottom: 50%;
		height: 50%;
		transition: transform 0.05s cubic-bezier(0, 2, 0.5, 1);
		transform-origin: 50% 100%;
	}

	.hand::before {
		content: '';
		display: block;
		position: relative;
		bottom: 0;
		border-radius: 42.5%;
		border: 3px solid black;
		height: 100%;
	}

	.hour-hand {
		height: 32.5%;
	}

	.minute-hand {
		height: 37%;
	}

	.second-hand {
		height: 45%;
	}
</style>
