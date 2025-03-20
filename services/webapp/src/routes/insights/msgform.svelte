<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { toast } from 'svelte-sonner';

	let message = '';

	function sendMessage() {
		if (!message.trim()) {
			toast.error('Message cannot be empty');
			return;
		}
		toast.success('Message sent successfully!');
		message = ''; // Clear the textarea
	}
</script>

<form class="dark flex flex-col space-y-4">
	<textarea
		bind:value={message}
		placeholder="Type your message here."
		id="field"
		class="rounded border p-2"
	></textarea>

	<Button onclick={sendMessage}>Send</Button>
</form>
