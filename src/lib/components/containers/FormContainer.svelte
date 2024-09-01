<script lang="ts">
	export let classes = '';
</script>

<div
	class="flex flex-col rounded-xl bg-white p-4 shadow-xl sm:p-6 md:p-8 lg:p-10 {classes} border-b-[6px] border-t-[6px] border-b-secondary-500 border-t-primary-500"
>
	<slot />
</div>
