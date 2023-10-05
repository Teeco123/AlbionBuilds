<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<body>
	Created by: {data.user.login}

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
			<div class="spells">
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
			<div class="spells">
				<div class="itemName">{data.build.boots.name}</div>
				<img class="item" src={data.build.boots.img} alt={data.build.weapon.name} />
				<img class="spell" src={data.build.boots.spell.img} alt={data.build.boots.spell.name} />
				<img class="spell" src={data.build.boots.passive.img} alt={data.build.boots.passive.name} />
			</div>
		</div>
	</div>
</body>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
	body {
		margin: 0;
		background-color: #eeeeee;
		font-family: "Roboto";
	}

	.container {
		height: 1080px;
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

	.spell {
		width: 80px;
	}

	.spells {
		margin-top: 5px;
	}
</style>
