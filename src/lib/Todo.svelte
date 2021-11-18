<script lang="ts">
	import Button, { Label } from '@smui/button';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	export let todo: any; //as input parameter for this component
</script>

<li transition:fade class=item-container>
	<input type="checkbox" checked={todo.done} on:change={() => dispatch('toggleDone')} />
	<span class={'done-' + todo.done}>{todo.text}</span>
	<Button on:click={() => dispatch('delete')}><Label>Delete</Label></Button>
</li>

<style>
	.done-true {
		color: gray;
		text-decoration: line-through;
	}

	li {
		margin-top: 5px;
	}

    .item-container {
        margin: 2 rem;
        width: 20%;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        gap: 1rem;
		align-items: center;
    }
</style>
