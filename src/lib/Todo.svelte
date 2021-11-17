<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	export let todo; //as input parameter for this component
</script>

<li transition:fade class=item-container>
	<input type="checkbox" checked={todo.done} on:change={() => dispatch('toggleDone')} />
	<span class={'done-' + todo.done}>{todo.text}</span>
	<button on:click={() => dispatch('delete')}>Delete</button>
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
    }
</style>
