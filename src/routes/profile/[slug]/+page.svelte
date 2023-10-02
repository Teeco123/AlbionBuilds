<script lang="ts">
	import { page } from "$app/stores";

	export let data;

	let user = data.nickname;
</script>

Nickname: {user.login}

{#if $page.data.User}
	<form action="?/myProfile" method="post">
		<button>My Profile</button>
	</form>
{/if}

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
