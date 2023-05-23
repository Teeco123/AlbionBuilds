<script lang="ts">
	import { weapons, offhands, capes, helmets, armors, boots, potions, food } from "./components/items";

	let selectedWeapon: {
		name: string;
		img: string;
		Qspell: { name: string; img: string }[];
		Wspell: { name: string; img: string }[];
		Espell: { name: string; img: string }[];
		Passive: { name: string; img: string }[];
	} = {
		name: "",
		img: "src/routes/images/no-item.png",
		Qspell: [
			{
				name: "",
				img: ""
			}
		],
		Wspell: [
			{
				name: "",
				img: ""
			}
		],
		Espell: [
			{
				name: "",
				img: ""
			}
		],
		Passive: [
			{
				name: "",
				img: ""
			}
		]
	};
	let selectedOffhand: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
	let selectedHelmet: { name: string; img: string; spell: { name: string; img: string }[]; passive: { name: string; img: string }[] } = {
		name: "",
		img: "src/routes/images/no-item.png",
		spell: [
			{
				name: "",
				img: ""
			}
		],
		passive: [
			{
				name: "",
				img: ""
			}
		]
	};
	let selectedArmor: { name: string; img: string; spell: { name: string; img: string }[]; passive: { name: string; img: string }[] } = {
		name: "",
		img: "src/routes/images/no-item.png",
		spell: [
			{
				name: "",
				img: ""
			}
		],
		passive: [
			{
				name: "",
				img: ""
			}
		]
	};
	let selectedBoots: { name: string; img: string; spell: { name: string; img: string }[]; passive: { name: string; img: string }[] } = {
		name: "",
		img: "src/routes/images/no-item.png",
		spell: [
			{
				name: "",
				img: ""
			}
		],
		passive: [
			{
				name: "",
				img: ""
			}
		]
	};
	let selectedCape: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
	let selectedPotion: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
	let selectedFood: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
</script>

<body>
	<div class="form">
		<form>
			<div class="weaponSelect">
				<!-----------Weapon select------------->
				<label>
					Weapon:
					<select bind:value={selectedWeapon}>
						{#each weapons as weapon}
							<option value={weapon}>
								{weapon.name}
							</option>
						{/each}
					</select>
				</label>
				<!-----------Weapon Qspell select------------->
				<label>
					Q Spell:
					<select bind:value={selectedWeapon.Qspell[-10]}>
						{#each selectedWeapon.Qspell as spell}
							<option value={spell}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<!-----------Weapon Wspell select------------->
				<label>
					W Spell:
					<select bind:value={selectedWeapon.Wspell[-10]}>
						{#each selectedWeapon.Wspell as spell}
							<option value={spell}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<!-----------Weapon Passive select------------->
				<label>
					Passive:
					<select bind:value={selectedWeapon.Passive[-10]}>
						{#each selectedWeapon.Passive as spell}
							<option value={spell}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="offhandSelect">
				<!-----------Offhand select------------>
				<label>
					Offhand:
					<select disabled={!selectedWeapon.onehand} bind:value={selectedOffhand}>
						{#each offhands as offhand}
							<option value={offhand}>
								{offhand.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="helmetSelect">
				<!-----------Helmet select------------->
				<label>
					Helmet:
					<select bind:value={selectedHelmet}>
						{#each helmets as helmet}
							<option value={helmet}>
								{helmet.name}
							</option>
						{/each}
					</select>
				</label>
				<!-----------Helmet spell select------------->
				<label>
					Spell:
					<select bind:value={selectedHelmet.spell[-10]}>
						{#each selectedHelmet.spell as spell}
							<option value={spell}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<!-----------Helmet passive select------------->
				<label>
					Passive:
					<select bind:value={selectedHelmet.passive[-10]}>
						{#each selectedHelmet.passive as spell}
							<option value={spell}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="armorSelect">
				<!-----------Armor select-------------->
				<label>
					Armor:
					<select bind:value={selectedArmor}>
						{#each armors as armor}
							<option value={armor}>
								{armor.name}
							</option>
						{/each}
					</select>
				</label>
				<!-----------Armor spell select------------->
				<label>
					Spell:
					<select bind:value={selectedArmor.spell[-10]}>
						{#each selectedArmor.spell as spell}
							<option value={spell}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<!-----------Armor passive select------------->
				<label>
					Passive:
					<select bind:value={selectedArmor.passive[-10]}>
						{#each selectedArmor.passive as spell}
							<option value={spell}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="bootsSelect">
				<!-----------Boots select------------->
				<label>
					Boots:
					<select bind:value={selectedBoots}>
						{#each boots as boots}
							<option value={boots}>
								{boots.name}
							</option>
						{/each}
					</select>
				</label>
				<!-----------Helmet spell select------------->
				<label>
					Spell:
					<select bind:value={selectedBoots.spell[-10]}>
						{#each selectedBoots.spell as spell}
							<option value={spell}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<!-----------Helmet passive select------------->
				<label>
					Passive:
					<select bind:value={selectedBoots.passive[-10]}>
						{#each selectedBoots.passive as spell}
							<option value={spell}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="capeSelect">
				<!------------Cape select-------------->
				<label>
					Cape:
					<select bind:value={selectedCape}>
						{#each capes as cape}
							<option value={cape}>
								{cape.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="potionSelect">
				<!-----------Potion select------------->
				<label>
					Potion:
					<select bind:value={selectedPotion}>
						{#each potions as potion}
							<option value={potion}>
								{potion.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="foodSelect">
				<!------------Food select-------------->
				<label>
					Food:
					<select bind:value={selectedFood}>
						{#each food as food}
							<option value={food}>
								{food.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
		</form>
	</div>
	<div class="items">
		<img id="inventory" src="src\routes\images\inventory.png" alt="inventory" />
		{#if selectedWeapon.onehand == true}
			<img id="weapon" src={selectedWeapon.img} alt={selectedWeapon.name} />
			<img id="offhand" src={selectedOffhand.img} alt={selectedOffhand.name} />
			<img id="helmet" src={selectedHelmet.img} alt={selectedHelmet.name} />
			<img id="armor" src={selectedArmor.img} alt={selectedArmor.name} />
			<img id="boots" src={selectedBoots.img} alt={selectedBoots.name} />
			<img id="cape" src={selectedCape.img} alt={selectedCape.name} />
			<img id="potion" src={selectedPotion.img} alt={selectedPotion.name} />
			<img id="food" src={selectedFood.img} alt={selectedFood.name} />
		{:else}
			<img id="weapon" src={selectedWeapon.img} alt={selectedWeapon.name} />
			<img id="offhand" src="src\routes\images\no-item.png" alt={selectedOffhand.name} />
			<img id="helmet" src={selectedHelmet.img} alt={selectedHelmet.name} />
			<img id="armor" src={selectedArmor.img} alt={selectedArmor.name} />
			<img id="boots" src={selectedBoots.img} alt={selectedBoots.name} />
			<img id="cape" src={selectedCape.img} alt={selectedCape.name} />
			<img id="potion" src={selectedPotion.img} alt={selectedPotion.name} />
			<img id="food" src={selectedFood.img} alt={selectedFood.name} />
		{/if}
	</div>
	<div class="spell-box">
		<div class="spells">
			<div class="weaponSpells">
				<div class="itemName">{selectedWeapon.name}</div>
				<img id="weaponSpell" src={selectedWeapon.img} alt={selectedWeapon.name} />
				<img id="spell" src={selectedWeapon.Qspell[-10]?.img} alt={selectedWeapon.Qspell[-10]?.name} />
				<img id="spell" src={selectedWeapon.Wspell[-10]?.img} alt={selectedWeapon.Wspell[-10]?.name} />
				<img id="spell" src={selectedWeapon.Espell[0]?.img} alt={selectedWeapon.Espell[0]?.name} />
				<img id="spell" src={selectedWeapon.Passive[-10]?.img} alt={selectedWeapon.Passive[-10]?.name} />
			</div>
			<div class="helmetSpells">
				<div class="itemName">{selectedHelmet.name}</div>
				<img id="helmetSpell" src={selectedHelmet.img} alt={selectedHelmet.name} />
				<img id="spell" src={selectedHelmet.spell[-10]?.img} alt={selectedHelmet.spell[-10]?.name} />
				<img id="spell" src={selectedHelmet.passive[-10]?.img} alt={selectedHelmet.passive[-10]?.name} />
			</div>
			<div class="armorSpells">
				<div class="itemName">{selectedArmor.name}</div>
				<img id="armorSpell" src={selectedArmor.img} alt={selectedArmor.name} />
				<img id="spell" src={selectedArmor.spell[-10]?.img} alt={selectedArmor.spell[-10]?.name} />
				<img id="spell" src={selectedArmor.passive[-10]?.img} alt={selectedArmor.passive[-10]?.name} />
			</div>
			<div class="bootsSpells">
				<div class="itemName">{selectedBoots.name}</div>
				<img id="bootsSpell" src={selectedBoots.img} alt={selectedBoots.name} />
				<img id="spell" src={selectedBoots.spell[-10]?.img} alt={selectedBoots.spell[-10]?.name} />
				<img id="spell" src={selectedBoots.passive[-10]?.img} alt={selectedBoots.passive[-10]?.name} />
			</div>
		</div>
	</div>
	<div class="bottom-background" />
</body>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
	body {
		font-family: "Roboto";
		margin: 0;
	}

	.form {
		background-color: #eac59e;
	}

	.form label,
	select {
		margin-top: 8px;
		margin-left: 10px;
	}

	.items {
		height: 398px;
		width: 270px;
		display: block;
		float: left;
		left: 630px;
		position: relative;
	}

	.items img {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	#inventory {
		float: left;
	}

	#weapon {
		width: 94px;
		position: relative;
		bottom: 280px;
		left: -89px;
	}

	#offhand {
		width: 94px;
		position: relative;
		bottom: 373px;
		left: 92px;
	}

	#helmet {
		width: 94px;
		position: relative;
		bottom: 558px;
	}

	#armor {
		width: 94px;
		position: relative;
		bottom: 572px;
	}

	#boots {
		width: 94px;
		position: relative;
		bottom: 586px;
	}

	#cape {
		width: 94px;
		position: relative;
		bottom: 832px;
		left: 92px;
	}

	#potion {
		width: 94px;
		position: relative;
		bottom: 764px;
		left: -89px;
	}

	#food {
		width: 94px;
		position: relative;
		bottom: 858px;
		left: 92px;
	}

	.bottom-background {
		background-color: #c9aa8f;
		background-repeat: repeat-x;
		display: block;
		width: 100%;
		height: 33vh;
		position: relative;
		bottom: 6px;
	}

	.spell-box {
		background-image: url("./images/gowno.png");
		background-repeat: repeat-x;
		display: block;
		height: 403px;
	}

	.spells {
		background-image: url("./images/gowno.png");
		background-repeat: repeat-x;
		display: inline-block;
		height: 398px;
		width: 330px;
		position: relative;
		left: 630px;
	}

	.spells img {
		width: 74px;
		float: left;
		position: relative;
		bottom: -5px;
	}

	.weaponSpells {
		float: left;
		height: 94px;
		width: 300px;
		padding-top: 5px;
		padding-left: 20px;
	}

	.helmetSpells {
		float: left;
		height: 94px;
		width: 300px;
		padding-top: 6px;
		padding-left: 20px;
	}

	.armorSpells {
		float: left;
		height: 94px;
		width: 300px;
		padding-top: 6px;
		padding-left: 20px;
	}

	.bootsSpells {
		float: left;
		height: 94px;
		width: 300px;
		padding-top: 5px;
		padding-left: 20px;
	}

	#spell {
		width: 50px;
		position: relative;
		bottom: -25px;
	}
</style>
