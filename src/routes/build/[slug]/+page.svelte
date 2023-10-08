<script lang="ts">
	import type { PageData } from "./$types";
	import { page } from "$app/stores";

	export let data: PageData;
	let user = data.user;
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
	<div class="info">
		<div>Created By: {data.userBuild.login}</div>
		<div>Build name: NAME</div>
	</div>
	<div class="container">
		<div class="build">
			<img class="inventory" src="/images/inventory.png" alt="inventory" />
			<div class="items">
				<img style="top:195px; left:-5px" class="itemBuild" src={data.build.weapon.img} alt={data.build.weapon.name} />
				<img style="top:195px; left:395px" class="itemBuild" src={data.build.offhand.img} alt={data.build.offhand.name} />
				<img style="top:-5px; left:195px" class="itemBuild" src={data.build.helmet.img} alt={data.build.helmet.name} />
				<img style="top:178px; left:195px" class="itemBuild" src={data.build.armor.img} alt={data.build.armor.name} />
				<img style="top:360px; left:195px" class="itemBuild" src={data.build.boots.img} alt={data.build.boots.name} />
				<img style="top:10px; left:395px" class="itemBuild" src={data.build.cape.img} alt={data.build.cape.name} />
				<img style="top:380px; left:-5px" class="itemBuild" src={data.build.potion.img} alt={data.build.potion.name} />
				<img style="top:380px; left:395px" class="itemBuild" src={data.build.food.img} alt={data.build.food.name} />
			</div>
		</div>
		<div class="spellBox">
			<div class="spells">
				<div class="itemName">{data.build.weapon.name}</div>
				<img class="item" src={data.build.weapon.img} alt={data.build.weapon.name} />
				<img class="spell" src={data.build.weapon.Qspell.img} alt={data.build.weapon.Qspell.name} />
				<img class="spell" src={data.build.weapon.Wspell.img} alt={data.build.weapon.Wspell.name} />
				<img class="spell" src={data.build.weapon.Espell.img} alt={data.build.weapon.Espell.name} />
				<img class="spell" src={data.build.weapon.Passive.img} alt={data.build.weapon.Passive.name} />
			</div>
			<div class="spells" style="background-color:#e0e0e0">
				<div class="itemName">{data.build.helmet.name}</div>
				<img class="item" src={data.build.helmet.img} alt={data.build.weapon.name} />
				<img class="spell" src={data.build.helmet.spell.img} alt={data.build.helmet.spell.name} />
				<img class="spell" src={data.build.helmet.passive.img} alt={data.build.helmet.passive.name} />
			</div>
			<div class="spells">
				<div class="itemName">{data.build.armor.name}</div>
				<img class="item" src={data.build.armor.img} alt={data.build.armor.name} />
				<img class="spell" src={data.build.armor.spell.img} alt={data.build.armor.spell.name} />
				<img class="spell" src={data.build.armor.passive.img} alt={data.build.armor.passive.name} />
				<img class="spell" src={data.build.armor.passive2.img} alt={data.build.armor.passive2.name} />
			</div>
			<div class="spells" style="background-color:#e0e0e0">
				<div class="itemName">{data.build.boots.name}</div>
				<img class="item" src={data.build.boots.img} alt={data.build.weapon.name} />
				<img class="spell" src={data.build.boots.spell.img} alt={data.build.boots.spell.name} />
				<img class="spell" src={data.build.boots.passive.img} alt={data.build.boots.passive.name} />
			</div>
		</div>
	</div>
</body>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
	body {
		margin: 0;
		background-color: #eeeeee;
		font-family: "Roboto";
		height: 100vh;
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

	.info {
		background-color: #e0e0e0;
		display: flex;
		justify-content: space-evenly;
		margin: 50px 20% 50px 20%;
		padding: 20px;
		border-radius: 15px;
	}

	.info div {
		font-size: 20px;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.build {
		margin-right: 50px;
		margin-left: 50px;
		position: relative;
	}

	.inventory {
		width: 600px;
	}

	.itemBuild {
		position: absolute;
	}

	.item {
		width: 120px;
	}

	.itemName {
		margin-left: 12px;
		font-size: 16px;
	}

	.spell {
		width: 80px;
	}

	.spells {
		margin-top: 5px;
		border-radius: 10px;
		padding-top: 5px;
	}
</style>
