<nav>
	<ul>
		<li><a href="/">HOME</a></li>
		<li><a href="/todos">TODO's</a></li>
        <li><a href="/norris">Chuck Norris</a></li>
        <li><a href="/stones">Hard Stone</a></li>
	</ul>
</nav>


<style>
    nav {
		border: 1px solid green;
	}

	ul {
		display: flex;
		gap: 3rem;
		justify-content: center;
		list-style-type: none;
		margin: 0;		
        padding: 1rem;
		overflow: hidden;
		background-color: rgb(236, 74, 15);
	}

	li a {
		color: white;
        text-align: center;
        padding: 1 rem;
        text-decoration: none;
	}

    li a:hover {
        background-color: #333;
    }

    
</style>

