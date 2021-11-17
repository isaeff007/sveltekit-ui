<script>
	import Todo from '$lib/Todo.svelte';
	let lastId = 0;
	const createToDo = (text, done = false) => ({ id: ++lastId, text, done });

	let todoText = '';
	let todos = [createToDo('learn Svelte', true), createToDo('build Svelte App', false)];

	$: uncompletedCount = todos.filter((t) => !t.done).length;
	$: status = `${uncompletedCount} of ${todos.length} remaining`;

	function AddToDo() {
		todos = [...todos, createToDo(todoText)];
	}

	// currently just remove the done todos
	const archiveCompleted = () => {
		todos = todos.filter((t) => !t.done);
	};

	const deleteToDo = (todoId) => (todos = todos.filter((t) => t.id !== todoId));

	function toggleDone(todo) {
		const { id } = todo;
		todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
	}
</script>

<svelte:head>
	<title>TODOs</title>
</svelte:head>

<div class="container">
	<h2>To Do List</h2>
	<div>{status}</div>
	<button on:click={archiveCompleted}>Archive Completed</button>
	<ul>
		{#each todos as todo}
			<Todo {todo} on:toggleDone={() => toggleDone(todo)} on:delete={() => deleteToDo(todo.id)} />
		{/each}
	</ul>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	ul {
		list-style: none;
	}
	button {
		min-width: 10rem;
	}
</style>
