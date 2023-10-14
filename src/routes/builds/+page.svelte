<script lang="ts">
	import { page } from "$app/stores";

	export let data;

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
			</form>
		</div>
	</div>
	<div class="builds">
		{#each builds as build}
			<a class="buildContainer" href="/build/{build._id}">
				<div class="info">
					<div class="nickname">
						Created By:<br />
						NICK
					</div>
					<div class="buildname">
						Build Name:<br />
						{build.name}
					</div>
				</div>
				<div class="build">
					<img class="inventory" src="/images/inventory.png" alt="inventory" />
					<div class="items">
						<img style="top:33.5%; left:0%" class="itemBuild" src={build.weapon.img} alt={build.weapon.name} />
						<img style="top:33.5%; left:66%" class="itemBuild" src={build.offhand.img} alt={build.offhand.name} />
						<img style="top:0%; left:33%" class="itemBuild" src={build.helmet.img} alt={build.helmet.name} />
						<img style="top:30.5%; left:33%" class="itemBuild" src={build.armor.img} alt={build.armor.name} />
						<img style="top:61%; left:33%" class="itemBuild" src={build.boots.img} alt={build.boots.name} />
						<img style="top:3%; left:66%" class="itemBuild" src={build.cape.img} alt={build.cape.name} />
						<img style="top:64%; left:0%" class="itemBuild" src={build.potion.img} alt={build.potion.name} />
						<img style="top:64%; left:66%" class="itemBuild" src={build.food.img} alt={build.food.name} />
					</div>
				</div>
			</a>
		{/each}
	</div>
</body>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
	body {
		margin: 0px;
		font-family: "Roboto";
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
		grid-template-columns: auto auto auto auto auto;
		gap: 3% 2%;
		.buildContainer {
			text-decoration: none;
			color: black;
			.info {
				display: flex;
				justify-content: space-around;
				scale: 90%;
				height: 9%;
				background-color: #eeeeee;
				border-radius: 9px 9px 9px 09px;
				padding: 2px;
				transition: scale 1s, margin 1s, border-radius 1s;
				.buildname,
				.nickname {
					display: flex;
					text-align: center;
					font-size: 0.8vw;
				}
			}
			.build {
				scale: 90%;
				position: relative;
				background-color: #eeeeee;
				border-radius: 9px;
				padding: 2px;
				transition: scale 1s, margin 1s, border-radius 1s;
				.inventory {
					width: 100%;
				}
				.items {
					.itemBuild {
						position: absolute;
						width: 35%;
					}
				}
			}
		}

		.buildContainer:hover > .info {
			scale: 100%;
			margin: 0%;
			border-radius: 9px 9px 0px 0px;
		}
		.buildContainer:hover > .build {
			scale: 100%;
			margin: 0%;
			border-radius: 0px 0px 9px 9px;
		}
	}
</style>
