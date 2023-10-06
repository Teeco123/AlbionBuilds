<script lang="ts">
	import { page } from "$app/stores";

	export let data;

	let user = data.nickname;
	let builds = data.builds;
</script>

<body>
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

	<div class="builds">
		{#each builds as build}
			<div class="build">
				<img class="inventory" src="/images/inventory.png" alt="inventory" />
				<div class="items">
					<img style="top:34%; left:-1%" class="itemBuild" src={build.weapon.img} alt={build.weapon.name} />
					<img style="top:34%; left:66%" class="itemBuild" src={build.offhand.img} alt={build.offhand.name} />
					<img style="top:-1%; left:32%" class="itemBuild" src={build.helmet.img} alt={build.helmet.name} />
					<img style="top:30%; left:32%" class="itemBuild" src={build.armor.img} alt={build.armor.name} />
					<img style="top:61%; left:32%" class="itemBuild" src={build.boots.img} alt={build.boots.name} />
					<img style="top:2%; left:66%" class="itemBuild" src={build.cape.img} alt={build.cape.name} />
					<img style="top:65%; left:-1%" class="itemBuild" src={build.potion.img} alt={build.potion.name} />
					<img style="top:65%; left:66%" class="itemBuild" src={build.food.img} alt={build.food.name} />
				</div>
			</div>
		{/each}
	</div>
</body>

<style>
	body {
		margin: 0px;
	}
	.builds {
		margin: 3% 2% 0px 2%;
		display: grid;
		grid-template-columns: auto auto auto auto;
		gap: 5% 3%;
	}

	.build {
		position: relative;
	}

	.inventory {
		width: 100%;
	}

	.itemBuild {
		position: absolute;
		width: 36%;
	}
</style>
