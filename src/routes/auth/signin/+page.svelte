<script lang="ts">
	import type { PageData } from './$types';

	import FormContainer from '$lib/components/containers/FormContainer.svelte';
	import SignInForm from '$lib/components/forms/SignInForm.svelte';

	export let data: PageData;
</script>

<FormContainer classes="w-full sm:w-[70%] md:w-1/2 lg:w-1/2 xl:w-1/3 gap-4 animate-fadeIn">
	<SignInForm data={data.form} />
</FormContainer>
