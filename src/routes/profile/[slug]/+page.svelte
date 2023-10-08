<script lang="ts">
	import { page } from "$app/stores";

	export let data;

	let user = data.nickname;
	let builds = data.builds;
</script>

<body>
	<div class="header">
		<div class="home"><a href="/">Albion Builds</a></div>
		<div class="buttons">
			<form action="?" method="post">
				{#if !$page.data.User}
					<button formaction="?/loginRedirect">
						<img src="/images/login.png" alt="login" />
						<p>Login</p>
					</button>
				{:else}
					<button formaction="?/logout">
						<img src="/images/logout.png" alt="logout" />
						<p>Logout</p>
					</button>
					<button formaction="?/myProfile">
						<img src="/images/myprofile.png" alt="my profile" />
						<p>My Profile</p>
					</button>
				{/if}
				<button formaction="?/allBuilds">
					<img src="/images/list.png" alt="list" />
					<p>All Builds</p>
				</button>
			</form>
		</div>
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

<style lang="scss">
	body {
		margin: 0px;
	}

	.header {
		display: flex;
		justify-content: space-around;
		width: 100%;
		.home {
			margin: 20px 0 20px 0;
			a {
				text-decoration: none;
				color: black;
			}
		}
		.buttons {
			button {
				display: flex;
				border: none;
				float: right;
				margin: 15px;
				cursor: pointer;
				background-color: white;
				p {
					text-align: center;
					margin: 8px 0px 8px 0px;
					font-size: 15px;
				}
				img {
					width: 32px;
					margin-right: 10px;
				}
			}
		}
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
