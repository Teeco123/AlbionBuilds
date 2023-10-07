<script lang="ts">
	import { page } from "$app/stores";

	export let data;

	let user = data.nickname;
	let builds = data.builds;
</script>

<body>
	<div class="header">
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
	</div>

	<div class="builds">
		{#each builds as build}
			<a class="build" href="/build/{build._id}">
				<img class="inventory" src="/images/inventory.png" alt="inventory" />
				<div class="items">
					<img style="top:34%; left:0%" class="itemBuild" src={build.weapon.img} alt={build.weapon.name} />
					<img style="top:34%; left:66%" class="itemBuild" src={build.offhand.img} alt={build.offhand.name} />
					<img style="top:0%; left:33%" class="itemBuild" src={build.helmet.img} alt={build.helmet.name} />
					<img style="top:30%; left:33%" class="itemBuild" src={build.armor.img} alt={build.armor.name} />
					<img style="top:60%; left:33%" class="itemBuild" src={build.boots.img} alt={build.boots.name} />
					<img style="top:3%; left:66%" class="itemBuild" src={build.cape.img} alt={build.cape.name} />
					<img style="top:64%; left:0%" class="itemBuild" src={build.potion.img} alt={build.potion.name} />
					<img style="top:64%; left:66%" class="itemBuild" src={build.food.img} alt={build.food.name} />
				</div>
			</a>
		{/each}
	</div>
</body>

<style>
	body {
		margin: 0px;
	}
	.builds {
		margin: 3% 2% 3% 2%;
		display: grid;
		grid-template-columns: auto auto auto auto;
		gap: 2% 2%;
	}

	.build {
		margin: 5%;
		width: 90%;
		height: 90%;
		position: relative;
		background-color: #eeeeee;
		border-radius: 9px;
		padding: 2px;
		transition: width 1s, height 1s, margin 1s;
	}

	.build:hover {
		width: 100%;
		height: 100%;
		margin: 0%;
	}

	.inventory {
		width: 100%;
	}

	.itemBuild {
		position: absolute;
		width: 35%;
	}
</style>
