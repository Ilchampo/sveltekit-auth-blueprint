<script lang="ts">
  import { Button, Modal } from "flowbite-svelte";

  export let open = false;
  export let autoClose = false;
  export let handleConfirm: (() => void) | undefined;

  const closeModal = () => {
    open = false;
  };
</script>

<Modal
  bind:open
  autoclose={autoClose}
  class="border-b-[6px] border-t-[6px] border-b-secondary-500 border-t-primary-500"
>
  <div class="flex flex-col p-4">
    <slot />
  </div>
  <svelte:fragment slot="footer">
    <div class="flex w-full items-center justify-end">
      {#if handleConfirm}
        <Button on:click={handleConfirm} color="primary">Confirm</Button>
      {/if}
      <Button on:click={closeModal} color="alternative">Close</Button>
    </div>
  </svelte:fragment>
</Modal>
