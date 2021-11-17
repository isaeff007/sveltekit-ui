<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(hardstoneUrl, hardstoneHeaders);
		//const stones = await res.json();
		//console.log('STONES',stones);
		if (res.ok) {
			let cards = await res.json();
			cards = cards['Hall of Fame'];
			return { props: { stones: cards } };
		}

		return {
			status: res.status,
			error: new Error('Could not load the Chuck Norris Joke')
		};
	}
</script>

<script>
	import Select, { Option } from '@smui/select';
	import Stone from '$lib/Stone.svelte';
	import { hardstoneHeaders, hardstoneUrl, stoneTypes } from '../constants';
	export /**
	 * @type {any[]}
	 */
	let stones = [];
	let stonesFiltered = [...stones];
	let types = stoneTypes;
	let selectedType = types[1];
	let info = '';

	// Observe and handle the type (dropdown) change by user
	$: if (selectedType) {
		stonesFiltered = getCardsByType(selectedType);
		info = ` (${stonesFiltered.length})`;
	}

	const getCardsByType = (type) => {
		return stones.filter((stone) => stone.type === type);
	};
</script>

<div class="info">
	<Select bind:value={selectedType}>
		{#each types as type}
			<Option value={type}>
				{type}
			</Option>
		{/each}
	</Select>
	<p>{info}</p>
</div>

<ul class="card-container">
	{#each stonesFiltered as stone}
		<Stone {stone} />
	{/each}
</ul>

<style>
	.card-container {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.info {
		display: flex;
		gap: 1rem;
	}
</style>
