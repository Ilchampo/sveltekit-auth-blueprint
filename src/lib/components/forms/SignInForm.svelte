<script lang="ts">
	import { Input, Helper, Label, Button, ButtonGroup, InputAddon, Hr } from 'flowbite-svelte';
	import { EnvelopeSolid, EyeOutline, EyeSlashOutline, GoogleSolid } from 'flowbite-svelte-icons';
	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, errors, enhance } = superForm(data, { resetForm: true });
	let showPassword = false;
</script>

<div class="flex flex-col">
	<div class="flex items-center gap-2">
		<h2 class="text-3xl font-semibold">Sign In</h2>
	</div>
	<span class="text-sm font-light"
		>Don't have an account yet? <a
			href="/auth/signup"
			class="font-semibold text-primary-500 underline">Sign up</a
		></span
	>
</div>

<Hr hrClass="my-1 " />

<form method="POST" action="?signIn" class="flex flex-col gap-4" use:enhance>
	<div>
		<Label for="email" class="mb-2">Email Address*:</Label>
		<ButtonGroup class="w-full">
			<InputAddon>
				<EnvelopeSolid class="h-6 w-6" />
			</InputAddon>
			<Input
				type="text"
				id="email"
				name="email"
				placeholder="you@example.com"
				color={$errors.email ? 'red' : undefined}
				aria-invalid={$errors.email ? 'true' : undefined}
				bind:value={$form.email}
			/>
		</ButtonGroup>
		{#if $errors.email}
			<Helper class="mt-2" color="red">Please enter your email address</Helper>
		{/if}
	</div>
	<div>
		<Label for="password" class="mb-2 flex w-full justify-between"
			><span>Password*:</span>

			<a href="/auth/recover" class="font-semibold text-primary-500">Forgot password?</a>
		</Label>
		<ButtonGroup class="w-full">
			<InputAddon>
				<button type="button" on:click={() => (showPassword = !showPassword)}>
					{#if showPassword}
						<EyeOutline class="h-6 w-6" />
					{:else}
						<EyeSlashOutline class="h-6 w-6" />
					{/if}
				</button>
			</InputAddon>
			<Input
				type={showPassword ? 'text' : 'password'}
				id="password"
				name="password"
				placeholder="Enter 8 characters or more"
				color={$errors.password ? 'red' : undefined}
				aria-invalid={$errors.password ? 'true' : undefined}
				bind:value={$form.password}
			/>
		</ButtonGroup>
		{#if $errors.password}
			<Helper class="mt-2" color="red">{$errors.password}</Helper>
		{/if}
	</div>
	<Button type="submit" class="mt-4 w-full shadow-xl" disabled={!$form.email || !$form.password}
		>Sign In</Button
	>
</form>

<div class="mx-0 flex items-center justify-between">
	<hr class="border-t-1 w-1/3 border-gray-200 dark:border-gray-700" />
	<span class="text-center text-sm font-light">Or sign in with</span>
	<hr class="border-t-1 w-1/3 border-gray-200 dark:border-gray-700" />
</div>

<Button color="alternative" class="mx-0 gap-2 ">
	<GoogleSolid size="sm" />
	<span>Google</span>
</Button>
