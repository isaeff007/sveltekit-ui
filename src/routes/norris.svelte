<script context="module">
	export async function load({ fetch }) {	
		
		const res = await fetch(chuckUrl, chuckHeaders);

		if (res.ok) {
			return { props: { joke: await res.json() } };
		}

		return {
			status: res.status,
			error: new Error('Could not load the Chuck Norris Joke')
		};
	}
</script>

<script>
	import { chuckHeaders, chuckUrl } from '../constants';	
	export let joke; // to have access on 'joke' attr. in props returned by load function
</script>

<img src={joke.icon_url} alt="Chuck Norris Avatar" />
<h3>{joke.value}</h3>

