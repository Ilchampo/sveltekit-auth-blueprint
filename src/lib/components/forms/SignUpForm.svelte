<script lang="ts">
	import { Input, Helper, Label, Button, ButtonGroup, InputAddon, Hr } from 'flowbite-svelte';
	import { EnvelopeSolid, EyeOutline, EyeSlashOutline, GoogleSolid } from 'flowbite-svelte-icons';
	import { superForm } from 'sveltekit-superforms';

	export let data;

	const { form, errors, enhance } = superForm(data, { resetForm: true });
	let showPassword = false;
	let showConfirmPassword = false;
</script>

<div class="flex flex-col">
	<div class="flex items-center gap-2">
		<h2 class="text-3xl font-semibold">Sign Up</h2>
	</div>
	<span class="text-sm font-light"
		>Already have an account? <a
			href="/auth/signin"
			class="font-semibold text-primary-500 underline">Sign in</a
		></span
	>
</div>

<Hr hrClass="my-1" />

<form method="POST" action="?signIn" class="flex flex-col gap-4" use:enhance>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<div>
			<Label for="email" class="mb-2">First Name*:</Label>
			<Input
				type="text"
				id="firstName"
				name="firstName"
				placeholder="John"
				color={$errors.firstName ? 'red' : undefined}
				aria-invalid={$errors.firstName ? 'true' : undefined}
				bind:value={$form.firstName}
			/>
			{#if $errors.firstName}
				<Helper class="mt-2" color="red">Please enter your first name</Helper>
			{/if}
		</div>
		<div>
			<Label for="email" class="mb-2">Last Name*:</Label>
			<Input
				type="text"
				id="lastName"
				name="lastName"
				placeholder="Doe"
				color={$errors.lastName ? 'red' : undefined}
				aria-invalid={$errors.lastName ? 'true' : undefined}
				bind:value={$form.lastName}
			/>
			{#if $errors.lastName}
				<Helper class="mt-2" color="red">Please enter your last name</Helper>
			{/if}
		</div>
	</div>
	<div>
		<Label for="email" class="mb-2">Email Address*:</Label>
		<ButtonGroup class="w-full">
			<InputAddon>
				<EnvelopeSolid class="h-6 w-6" />
			</InputAddon>
			<Input
				type="email"
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
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<div>
			<Label for="password" class="mb-2 flex w-full justify-between">Password*:</Label>
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
		<div>
			<Label for="password" class="mb-2 flex w-full justify-between">Confirm Password*:</Label>
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
					type={showConfirmPassword ? 'text' : 'password'}
					id="confirmPassword"
					name="confirmPassword"
					placeholder="Confirm your password"
					color={$errors.confirmPassword ? 'red' : undefined}
					aria-invalid={$errors.confirmPassword ? 'true' : undefined}
					bind:value={$form.confirmPassword}
				/>
			</ButtonGroup>
			{#if $errors.confirmPassword}
				<Helper class="mt-2" color="red">{$errors.confirmPassword}</Helper>
			{/if}
		</div>
	</div>
	<Button
		type="submit"
		class="mt-4 w-full shadow-xl"
		disabled={!(
			$form.firstName &&
			$form.lastName &&
			$form.email &&
			$form.password &&
			$form.confirmPassword
		)}>Sign Up</Button
	>
</form>

<div class="mx-0 flex items-center justify-between">
	<hr class="border-t-1 w-1/3 border-gray-200 dark:border-gray-700" />
	<span class="text-center text-sm font-light">Or sign up with</span>
	<hr class="border-t-1 w-1/3 border-gray-200 dark:border-gray-700" />
</div>

<Button color="alternative" class="mx-0 gap-2 ">
	<GoogleSolid size="sm" />
	<span>Google</span>
</Button>
