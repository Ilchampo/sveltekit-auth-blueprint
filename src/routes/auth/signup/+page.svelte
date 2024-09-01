<script lang="ts">
	import type { PageData } from './$types';

	import FormContainer from '$lib/components/containers/FormContainer.svelte';
	import SignUpForm from '$lib/components/forms/SignUpForm.svelte';

	export let data: PageData;
</script>

<FormContainer classes="w-full sm:w-[60%] md:w-1/2 lg:w-[40%] gap-4 animate-fadeIn">
	<SignUpForm data={data.form} />
</FormContainer>
