<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<form method="post" action="?/login">
	Login:
	<input name="login" type="text" />
	Password:
	<input name="password" type="password" />
	<button>Log in</button>
	<button formaction="?/register">Register</button>

	{#if form?.success}
		<p>User registered succesfully!</p>
	{:else if form?.userExists}
		<p>User with this login already exists!</p>
	{:else if form?.passwordRequired}
		<p>Password is required!</p>
	{:else if form?.loginRequired}
		<p>Login is required!</p>
	{:else if form?.dontMatch}
		<p>Login or password is WRONG!</p>
	{/if}
</form>
