<script>
	import { createEventDispatcher } from 'svelte';

	export let primary = false;
	export let link = false;
	export let info = false;
	export let success = false;
	export let warning = false;
	export let danger = false;
	export let light = false;

	export let small = false;
	export let normal = false;
	export let medium = false;
	export let large = false;

	export let responsive = false;

	export let fullwidth = false;

	export let outlined = false;
	export let inverted = false;

	export let rounded = false;

	$: classes = [
		`button`,
		primary && `is-primary`,
		link && `is-link`,
		info && `is-info`,
		success && `is-success`,
		warning && `is-warning`,
		danger && `is-danger`,
		light && `is-light`,
		small && `is-small`,
		normal && `is-normal`,
		medium && `is-medium`,
		large && `is-large`,
		responsive && `is-responsive`,
		fullwidth && `is-fullwidth`,
		outlined && `is-outlined`,
		inverted && `is-inverted`,
		rounded && `is-rounded`,
		$$restProps.class
	]
		.filter(Boolean)
		.join(' ');

	const dispatch = createEventDispatcher();

	function onClick(event) {
		dispatch('click', event);
	}
</script>

<button {...$$restProps} class={classes} on:click={onClick}>
	<slot />
</button>
