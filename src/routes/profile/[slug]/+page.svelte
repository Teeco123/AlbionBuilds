<script lang="ts">
	import { page } from "$app/stores";

	export let data;

	let user = JSON.stringify(data.nickname);
	console.log($page.data.User);
</script>

Nickname: {user}

{#if $page.data.User}
	<form action="?/logout" method="post">
		<button>Logout</button>
	</form>
{/if}

{#if !$page.data.User}
	<form action="?/loginRedirect" method="post">
		<button>Login</button>
	</form>
{/if}
