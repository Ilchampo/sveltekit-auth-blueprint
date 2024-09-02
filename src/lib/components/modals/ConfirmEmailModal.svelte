<script lang="ts">
  import { Button, Hr } from "flowbite-svelte";
  import { censoredEmail } from "$lib/utils/stringUtils";

  export let email: string;

  const resendEmail = () => {
    console.log("Resend email", email);
  };
</script>

<div class="flex flex-col">
  <h3 class="text-xl md:text-3xl font-bold text-black">Confirm your email</h3>
  <Hr />
  <article class="text-center font-light gap-2">
    <p>
      Almost there! We've sent a verification email to <span class="font-semibold">{censoredEmail(email)}</span>.
    </p>
    <p>You need to verify your email address to log in into the application.</p>
  </article>
  <Button
    color="primary"
    class="mt-10 w-fit place-self-center"
    on:click={resendEmail}>Resend email</Button
  >
</div>
