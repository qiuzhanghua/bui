<script>
	import {Button} from "../lib";
</script>

<h1 style="text-align: center; color: darkgreen; font-size: 4rem">BUI with SvelteKit</h1>

<p/>

<p/>

<Button primary
        large
        rounded
        outlined
        style="background-color: black; color: white;"
        on:click={() => alert('hello')}>
	<span class="icon">
		<i class="fab fa-github"></i>
	</span>
	<span>Large Button</span>
</Button>