<script lang="ts">
	import { page } from "$app/stores";

	export let data;
	let weapons = data.weapons;
	let offhands = data.offhands;
	let helmets = data.helmets;
	let armors = data.armors;
	let boots = data.boots;
	let capes = data.capes;
	let potions = data.potions;
	let food = data.food;

	let selectedWeaponName = "";
	let selectedQspellName = "";
	let selectedWspellName = "";
	let selectedWeaponPassiveName = "";

	let selectedOffhandName = "";

	let selectedHelmetName = "";
	let selectedHelmetSpellName = "";
	let selectedHelmetPassiveName = "";

	let selectedArmorName = "";
	let selectedArmorSpellName = "";
	let selectedArmorPassiveName = "";
	let selectedArmorPassive2Name = "";

	let selectedBootsName = "";
	let selectedBootsSpellName = "";
	let selectedBootsPassiveName = "";

	let selectedCapeName = "";
	let selectedPotionName = "";
	let selectedFoodName = "";

	const DEFAULT_WEAPON: {
		name: string;
		onehand: boolean;
		img: string;
		Qspell: { name: string; img: string }[];
		Wspell: { name: string; img: string }[];
		Espell: { name: string; img: string }[];
		Passive: { name: string; img: string }[];
	} = {
		name: "",
		onehand: true,
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
	const DEFAULT_OFFHAND: { name: string; img: string } = {
		name: "",
		img: "images/no-item.png"
	};
	const DEFAULT_HELMET: { name: string; img: string; spell: { name: string; img: string }[]; passive: { name: string; img: string }[] } = {
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
	const DEFAULT_ARMOR: { name: string; img: string; plate: boolean; spell: { name: string; img: string }[]; passive: { name: string; img: string }[]; passive2: { name: string; img: string }[] } = {
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
	const DEFAULT_BOOTS: { name: string; img: string; spell: { name: string; img: string }[]; passive: { name: string; img: string }[] } = {
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
	const DEFAULT_CAPE: { name: string; img: string } = {
		name: "",
		img: "images/no-item.png"
	};
	const DEFAULT_POTION: { name: string; img: string } = {
		name: "",
		img: "images/no-item.png"
	};
	const DEFAULT_FOOD: { name: string; img: string } = {
		name: "",
		img: "images/no-item.png"
	};

	$: selectedWeapon = weapons.find((weapon: any) => weapon.name === selectedWeaponName) || DEFAULT_WEAPON;
	$: selectedQspell = selectedWeapon.Qspell.find((Qspell: any) => Qspell.name === selectedQspellName) || DEFAULT_WEAPON.Qspell;
	$: selectedWspell = selectedWeapon.Wspell.find((Wspell: any) => Wspell.name === selectedWspellName) || DEFAULT_WEAPON.Wspell;
	$: selectedWeaponPassive = selectedWeapon.Passive.find((Passive: any) => Passive.name === selectedWeaponPassiveName) || DEFAULT_WEAPON.Passive;

	$: selectedOffhand = offhands.find((offhand: any) => offhand.name === selectedOffhandName) || DEFAULT_OFFHAND;

	$: selectedHelmet = helmets.find((helmet: any) => helmet.name === selectedHelmetName) || DEFAULT_HELMET;
	$: selectedHelmetSpell = selectedHelmet.spell.find((spell: any) => spell.name === selectedHelmetSpellName) || DEFAULT_HELMET.spell;
	$: selectedHelmetPassive = selectedHelmet.passive.find((spell: any) => spell.name === selectedHelmetPassiveName) || DEFAULT_HELMET.passive;

	$: selectedArmor = armors.find((armor: any) => armor.name === selectedArmorName) || DEFAULT_ARMOR;
	$: selectedArmorSpell = selectedArmor.spell.find((spell: any) => spell.name === selectedArmorSpellName) || DEFAULT_ARMOR.spell;
	$: selectedArmorPassive = selectedArmor.passive.find((spell: any) => spell.name === selectedArmorPassiveName) || DEFAULT_ARMOR.passive;
	$: selectedArmorPassive2 = selectedArmor.passive2.find((spell: any) => spell.name === selectedArmorPassive2Name) || DEFAULT_ARMOR.passive2;

	$: selectedBoots = boots.find((boots: any) => boots.name === selectedBootsName) || DEFAULT_BOOTS;
	$: selectedBootsSpell = selectedBoots.spell.find((spell: any) => spell.name === selectedBootsSpellName) || DEFAULT_BOOTS.spell;
	$: selectedBootsPassive = selectedBoots.passive.find((spell: any) => spell.name === selectedBootsPassiveName) || DEFAULT_BOOTS.passive;

	$: selectedCape = capes.find((cape: any) => cape.name === selectedCapeName) || DEFAULT_CAPE;
	$: selectedPotion = potions.find((potion: any) => potion.name === selectedPotionName) || DEFAULT_POTION;
	$: selectedFood = food.find((food: any) => food.name === selectedFoodName) || DEFAULT_FOOD;
</script>

<body>
	<div class="form">
		<form action="?/saveBuild" method="post">
			{#if !$page.data.User}
				<button style="float: right; margin: 15px" formaction="?/loginRedirect">Login</button>
			{:else}
				<button style="float: right; margin: 15px" formaction="?/logout">Logout</button>
				<button style="float: right; margin: 15px" formaction="?/myProfile">My Profile</button>
			{/if}
			<div class="weaponSelect">
				<label>
					Weapon:
					<select name="weapon" bind:value={selectedWeaponName}>
						{#each weapons as weapon}
							<option value={weapon.name}>
								{weapon.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Q Spell:
					<select name="Qspell" bind:value={selectedQspellName}>
						{#each selectedWeapon.Qspell as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					W Spell:
					<select name="Wspell" bind:value={selectedWspellName}>
						{#each selectedWeapon.Wspell as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Passive:
					<select name="weaponPassive" bind:value={selectedWeaponPassiveName}>
						{#each selectedWeapon.Passive as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="offhandSelect">
				<label>
					Offhand:
					<select name="offhand" disabled={!selectedWeapon.onehand} bind:value={selectedOffhandName}>
						{#each offhands as offhand}
							<option value={offhand.name}>
								{offhand.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="helmetSelect">
				<label>
					Helmet:
					<select name="helmet" bind:value={selectedHelmetName}>
						{#each helmets as helmet}
							<option value={helmet.name}>
								{helmet.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Spell:
					<select name="helmetSpell" bind:value={selectedHelmetSpellName}>
						{#each selectedHelmet.spell as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Passive:
					<select name="helmetPassive" bind:value={selectedHelmetPassiveName}>
						{#each selectedHelmet.passive as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="armorSelect">
				<label>
					Armor:
					<select name="armor" bind:value={selectedArmorName}>
						{#each armors as armor}
							<option value={armor.name}>
								{armor.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Spell:
					<select name="armorSpell" bind:value={selectedArmorSpellName}>
						{#each selectedArmor.spell as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Passive:
					<select name="armorPassive" bind:value={selectedArmorPassiveName}>
						{#each selectedArmor.passive as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Passive 2:
					<select name="armorPassive2" disabled={!selectedArmor.plate} bind:value={selectedArmorPassive2Name}>
						{#each selectedArmor.passive2 as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="bootsSelect">
				<label>
					Boots:
					<select name="boots" bind:value={selectedBootsName}>
						{#each boots as boots}
							<option value={boots.name}>
								{boots.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Spell:
					<select name="bootsSpell" bind:value={selectedBootsSpellName}>
						{#each selectedBoots.spell as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>

				<label>
					Passive:
					<select name="bootsPassive" bind:value={selectedBootsPassiveName}>
						{#each selectedBoots.passive as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="capeSelect">
				<label>
					Cape:
					<select name="cape" bind:value={selectedCapeName}>
						{#each capes as cape}
							<option value={cape.name}>
								{cape.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="potionSelect">
				<label>
					Potion:
					<select name="potion" bind:value={selectedPotionName}>
						{#each potions as potion}
							<option value={potion.name}>
								{potion.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="foodSelect">
				<label>
					Food:
					<select name="food" bind:value={selectedFoodName}>
						{#each food as food}
							<option value={food.name}>
								{food.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			{#if $page.data.User}
				<button>Save build</button>
			{/if}
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
			<div class="weaponSpells">
				<div class="itemName">{selectedWeapon.name}</div>
				<img id="weaponSpell" src={selectedWeapon.img} alt={selectedWeapon.name} />
				<img id="spell" src={selectedQspell.img} alt={selectedQspell.name} />
				<img id="spell" src={selectedWspell.img} alt={selectedWspell.name} />
				<img id="spell" src={selectedWeapon.Espell[0].img} alt={selectedWeapon.Espell[0].name} />
				<img id="spell" src={selectedWeaponPassive.img} alt={selectedWeaponPassive.name} />
			</div>
			<div class="helmetSpells">
				<div class="itemName">{selectedHelmet.name}</div>
				<img id="helmetSpell" src={selectedHelmet.img} alt={selectedHelmet.name} />
				<img id="spell" src={selectedHelmetSpell.img} alt={selectedHelmetSpell.name} />
				<img id="spell" src={selectedHelmetPassive.img} alt={selectedHelmetPassive.name} />
			</div>
			<div class="armorSpells">
				<div class="itemName">{selectedArmor.name}</div>
				<img id="armorSpell" src={selectedArmor.img} alt={selectedArmor.name} />
				<img id="spell" src={selectedArmorSpell.img} alt={selectedArmorSpell.name} />
				<img id="spell" src={selectedArmorPassive.img} alt={selectedArmorPassive.name} />
				{#if selectedArmor.plate == true}
					<img id="spell" src={selectedArmorPassive2.img} alt={selectedArmorPassive2.name} />
				{:else}
					<!-- svelte-ignore empty-block -->
				{/if}
			</div>
			<div class="bootsSpells">
				<div class="itemName">{selectedBoots.name}</div>
				<img id="bootsSpell" src={selectedBoots.img} alt={selectedBoots.name} />
				<img id="spell" src={selectedBootsSpell.img} alt={selectedBootsSpell.name} />
				<img id="spell" src={selectedBootsPassive.img} alt={selectedBootsPassive.name} />
			</div>
		</div>
	</div>
</body>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
	body {
		font-family: "Roboto";
		margin: 0;
		background-color: #eeeeee;
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
		width: 80px;
		float: left;
		position: relative;
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
		width: 55px;
		position: relative;
		bottom: -15px;
		margin-left: 10px;
	}
</style>
