<script>
	import '../app.scss';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<Meta
	title="BUI/Button"
	component={Button}
	argTypes={{
		primary: { control: 'boolean' },
		secondary: { control: 'boolean' },
		// ... add  more here
		onClick: { action: 'onClick' }
	}}
/>

<Template let:args>
	<Button {...args} on:click={args.onClick}>Button</Button>
</Template>

<Story
	name="Primary"
	args={{
		primary: true
	}}
/>

<Story name="Secondary">
	<Button class="is-success">Basic</Button>
</Story>

<Story name="Customer">
	<Button class="is-large is-rounded" on:click={() => alert('Hello')}>Large Button</Button>
</Story>
