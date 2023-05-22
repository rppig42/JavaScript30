<script lang="ts">
	import { DrumsList } from '../../data/drums';

	function playSound(drum: any) {
		drum.ele?.classList.add('playing');

		drum.soundEle.currentTime = 0;
		drum.soundEle.play();
	}

	function keyDownHandler(e: KeyboardEvent) {
		const drum = DrumsList.find((drum) => drum.keyName.toLowerCase() === e.key);

		if (!drum) return;

		playSound(drum);
	}
</script>

<svelte:body on:keydown={keyDownHandler} />

<div class="keys">
	{#each DrumsList as drum}
		<div
			class="key"
			on:click={() => {
				playSound(drum);
			}}
			on:keydown={() => {}}
			on:transitionend={() => {
				drum.ele?.classList.remove('playing');
			}}
			bind:this={drum.ele}
		>
			<div class="key-title">
				{drum.keyName}
			</div>
			<div class="key-desc">
				{drum.sound}
			</div>
		</div>
	{/each}
</div>

{#each DrumsList as drum}
	<audio src={drum.file} bind:this={drum.soundEle} />
{/each}

<style lang="scss">
	.keys {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		flex: 1;
		align-items: center;
		min-height: 100vh;
	}

	.key {
		border: 0.5rem solid black;
		border-radius: 0.5rem;
		margin: 1rem;
		font-size: 1.5rem;
		padding: 1rem 0.5rem;
		transition: all 0.07s ease;
		width: 10rem;
		text-align: center;
		color: white;
		background: rgba(0, 0, 0, 0.4);
		text-shadow: 0 0 0.5rem black;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
		cursor: pointer;

		:is(&.playing) {
			transform: scale(1.1);
			border-color: #ffc600;
			box-shadow: 0 0 1rem #ffc600;
		}
	}

	.key-title {
		font-size: 4rem;
	}

	.key-desc {
		font-size: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		color: #ffc600;
	}
</style>
