<script>
	export let stone;
    let countClick = 0;

    $: info = `(${countClick})`

    const onCardClick = () => {
       countClick += 1;
    }
</script>



{#if stone['img']}
	<div class="card" on:click={onCardClick}>
		<img src={stone.img} alt={stone.name} />
		<div class="card-name">{stone.name}</div>
        <div class="card-info">{info}</div>
	</div>
{/if}

<style>
	.card {
		background-color: white;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin-bottom: 25px;
	}

	.card > img {
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 5px;
		width: 200px;
	}

	.card-name {
		text-align: center;
		padding: 1rem;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight: 600;
	}
    .card-info {
        text-align: right;
        padding: 5px;
    }
</style>
