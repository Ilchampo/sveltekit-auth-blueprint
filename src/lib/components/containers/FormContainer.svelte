<script lang="ts">
	export let classes = '';
</script>

<div
	class="flex flex-col rounded-xl bg-white p-4 shadow-xl sm:p-6 md:p-8 lg:p-10  overflow-scroll {classes}"
>
	<slot />
</div>
