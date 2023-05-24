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
		img: "images/no-item.png",
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
		img: "images/no-item.png"
	};
	let selectedHelmet: { name: string; img: string; spell: { name: string; img: string }[]; passive: { name: string; img: string }[] } = {
		name: "",
		img: "images/no-item.png",
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
	let selectedArmor: { name: string; img: string; plate: boolean; spell: { name: string; img: string }[]; passive: { name: string; img: string }[]; passive2: { name: string; img: string }[] } = {
		name: "",
		img: "images/no-item.png",
		plate: false,
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
		],
		passive2: [
			{
				name: "",
				img: ""
			}
		]
	};
	let selectedBoots: { name: string; img: string; spell: { name: string; img: string }[]; passive: { name: string; img: string }[] } = {
		name: "",
		img: "images/no-item.png",
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
		img: "images/no-item.png"
	};
	let selectedPotion: { name: string; img: string } = {
		name: "",
		img: "images/no-item.png"
	};
	let selectedFood: { name: string; img: string } = {
		name: "",
		img: "images/no-item.png"
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
				<!-----------Armor second passive select------------->
				<label>
					Passive 2:
					<select disabled={!selectedArmor.plate} bind:value={selectedArmor.passive2[-10]}>
						{#each selectedArmor.passive2 as spell}
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
		<img id="inventory" src="images/inventory.png" alt="inventory" />
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
			<img id="offhand" src="images/no-item.png" alt={selectedOffhand.name} />
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
			{#if selectedArmor.plate == true}
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
					<img id="spell" src={selectedArmor.passive2[-10]?.img} alt={selectedArmor.passive[-10]?.name} />
				</div>
				<div class="bootsSpells">
					<div class="itemName">{selectedBoots.name}</div>
					<img id="bootsSpell" src={selectedBoots.img} alt={selectedBoots.name} />
					<img id="spell" src={selectedBoots.spell[-10]?.img} alt={selectedBoots.spell[-10]?.name} />
					<img id="spell" src={selectedBoots.passive[-10]?.img} alt={selectedBoots.passive[-10]?.name} />
				</div>
			{:else}
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
			{/if}
		</div>
	</div>
</body>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
	body {
		font-family: "Roboto";
		margin: 0;
		background-color: #f6f5f1;
	}

	.form label,
	select {
		margin-top: 8px;
		margin-left: 10px;
	}

	.items {
		width: 570px;
		display: block;
		float: left;
		left: 660px;
		position: relative;
		background-color: #eeeeee;
	}

	.items img {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	#inventory {
		float: left;
		height: 430px;
		bottom: -310px;
		position: absolute;
	}

	#weapon {
		width: 150px;
		position: absolute;
		bottom: -180px;
	}

	#offhand {
		width: 150px;
		position: absolute;
		bottom: -180px;
		left: 300px;
	}

	#helmet {
		width: 150px;
		position: absolute;
		bottom: -30px;
		left: 150px;
	}

	#armor {
		width: 150px;
		position: absolute;
		bottom: -165px;
		left: 150px;
	}

	#boots {
		width: 150px;
		position: relative;
		bottom: -300px;
		left: -60px;
	}

	#cape {
		width: 150px;
		position: absolute;
		bottom: -50px;
		left: 300px;
	}

	#potion {
		width: 150px;
		position: absolute;
		bottom: -315px;
	}

	#food {
		width: 150px;
		position: absolute;
		bottom: -315px;
		left: 300px;
	}

	.spell-box {
		display: block;
		height: 460px;
		background-color: #eeeeee;
	}

	.spells {
		padding-left: 50px;
		padding-top: 10px;
		padding-right: 10px;
		padding-bottom: 10px;
		background-color: #eeeeee;
		display: inline-block;
		height: 398px;
		width: 300px;
		position: relative;
		left: 530px;
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
		width: 350px;
		padding-top: 5px;
		padding-bottom: 6px;
		padding-left: 10px;
		background-color: #dededa;
		border-radius: 10px;
		border: #eeeeee solid;
		background-color: #dededa;
	}

	.helmetSpells {
		float: left;
		height: 94px;
		width: 350px;
		padding-top: 6px;
		padding-bottom: 6px;
		padding-left: 10px;
		background-color: #dededa;
		border-radius: 10px;
		border: #eeeeee solid;
		background-color: #eeeeee;
	}

	.armorSpells {
		float: left;
		height: 94px;
		width: 350px;
		padding-top: 6px;
		padding-bottom: 6px;
		padding-left: 10px;
		background-color: #dededa;
		border-radius: 10px;
		border: #eeeeee solid;
	}

	.bootsSpells {
		border-radius: 2px;
		float: left;
		height: 94px;
		width: 350px;
		padding-top: 5px;
		padding-bottom: 6px;
		padding-left: 10px;
		background-color: #dededa;
		border-radius: 10px;
		border: #eeeeee solid;
		background-color: #eeeeee;
	}

	#spell {
		width: 50px;
		position: relative;
		bottom: -15px;
		margin-left: 10px;
	}
</style>
