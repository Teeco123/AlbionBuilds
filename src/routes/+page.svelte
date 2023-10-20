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
		shapeshifter: boolean;
		img: string;
		Qspell: { name: string; img: string }[];
		Q2spell: { name: string; img: string }[];
		Wspell: { name: string; img: string }[];
		W2spell: { name: string; img: string }[];
		Espell: { name: string; img: string }[];
		Espell2: { name: string; img: string }[];
		Passive: { name: string; img: string }[];
		Passive2: { name: string; img: string }[];
	} = {
		name: "",
		onehand: true,
		shapeshifter: false,
		img: "",
		Qspell: [
			{
				name: "",
				img: ""
			}
		],
		Q2spell: [
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
		W2spell: [
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
		E2spell: [
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
		],
		Passive2: [
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
	<div class="header">
		<div class="home"><a href="/">Albion Builds</a></div>
		<div class="buttons">
			<form action="?" method="post">
				{#if !$page.data.User}
					<button formaction="?/loginRedirect">
						<img src="images/login.png" alt="login" />
						<p>Login</p>
					</button>
				{:else}
					<button formaction="?/logout">
						<img src="images/logout.png" alt="logout" />
						<p>Logout</p>
					</button>
					<button formaction="?/myProfile">
						<img src="images/myprofile.png" alt="my profile" />
						<p>My Profile</p>
					</button>
				{/if}
				<button formaction="?/allBuilds">
					<img src="images/list.png" alt="list" />
					<p>All Builds</p>
				</button>
			</form>
		</div>
	</div>
	<div class="form">
		<form action="?/saveBuild" method="post">
			<div class="select">
				<label>
					Weapon:
					<select name="weapon" bind:value={selectedWeaponName} required>
						{#each weapons as weapon}
							<option value={weapon.name}>
								{weapon.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Q Spell:
					<select name="Qspell" bind:value={selectedQspellName} required>
						{#each selectedWeapon.Qspell as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					W Spell:
					<select name="Wspell" bind:value={selectedWspellName} required>
						{#each selectedWeapon.Wspell as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Passive:
					<select name="weaponPassive" bind:value={selectedWeaponPassiveName} required>
						{#each selectedWeapon.Passive as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="select">
				<label>
					Offhand:
					<select name="offhand" disabled={!selectedWeapon.onehand} bind:value={selectedOffhandName} required>
						{#each offhands as offhand}
							<option value={offhand.name}>
								{offhand.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="select">
				<label>
					Helmet:
					<select name="helmet" bind:value={selectedHelmetName} required>
						{#each helmets as helmet}
							<option value={helmet.name}>
								{helmet.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Spell:
					<select name="helmetSpell" bind:value={selectedHelmetSpellName} required>
						{#each selectedHelmet.spell as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Passive:
					<select name="helmetPassive" bind:value={selectedHelmetPassiveName} required>
						{#each selectedHelmet.passive as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="select">
				<label>
					Armor:
					<select name="armor" bind:value={selectedArmorName} required>
						{#each armors as armor}
							<option value={armor.name}>
								{armor.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Spell:
					<select name="armorSpell" bind:value={selectedArmorSpellName} required>
						{#each selectedArmor.spell as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Passive:
					<select name="armorPassive" bind:value={selectedArmorPassiveName} required>
						{#each selectedArmor.passive as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Passive 2:
					<select name="armorPassive2" disabled={!selectedArmor.plate} bind:value={selectedArmorPassive2Name} required>
						{#each selectedArmor.passive2 as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="select">
				<label>
					Boots:
					<select name="boots" bind:value={selectedBootsName} required>
						{#each boots as boots}
							<option value={boots.name}>
								{boots.name}
							</option>
						{/each}
					</select>
				</label>
				<label>
					Spell:
					<select name="bootsSpell" bind:value={selectedBootsSpellName} required>
						{#each selectedBoots.spell as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>

				<label>
					Passive:
					<select name="bootsPassive" bind:value={selectedBootsPassiveName} required>
						{#each selectedBoots.passive as spell}
							<option value={spell.name}>
								{spell.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="select">
				<label>
					Cape:
					<select name="cape" bind:value={selectedCapeName} required>
						{#each capes as cape}
							<option value={cape.name}>
								{cape.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="select">
				<label>
					Potion:
					<select name="potion" bind:value={selectedPotionName} required>
						{#each potions as potion}
							<option value={potion.name}>
								{potion.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="select">
				<label>
					Food:
					<select name="food" bind:value={selectedFoodName} required>
						{#each food as food}
							<option value={food.name}>
								{food.name}
							</option>
						{/each}
					</select>
				</label>
			</div>
			{#if $page.data.User}
				<label class="buildName">Build Name: <input name="name" maxlength="20" required /> </label>
				<button class="save">Save build</button>
			{/if}
		</form>
	</div>
	<div class="container">
		<div class="build">
			<img class="inventory" src="/images/inventory.png" alt="inventory" />
			<div class="items">
				<img style="top:215px; left:0px" class="itemBuild" src={selectedWeapon.img} alt={selectedWeapon.name} />
				<img style="top:215px; left:365px" class="itemBuild" src={selectedOffhand.img} alt={selectedOffhand.name} />
				<img style="top:25px; left:185px" class="itemBuild" src={selectedHelmet.img} alt={selectedHelmet.name} />
				<img style="top:195px; left:185px" class="itemBuild" src={selectedArmor.img} alt={selectedArmor.name} />
				<img style="top:358px; left:185px" class="itemBuild" src={selectedBoots.img} alt={selectedBoots.name} />
				<img style="top:50px; left:365px" class="itemBuild" src={selectedCape.img} alt={selectedCape.name} />
				<img style="top:378px; left:0px" class="itemBuild" src={selectedPotion.img} alt={selectedPotion.name} />
				<img style="top:378px; left:365px" class="itemBuild" src={selectedFood.img} alt={selectedFood.name} />
			</div>
		</div>
		<div class="spellBox">
			<div class="spells">
				<div class="itemName">{selectedWeapon.name}</div>
				<img class="item" src={selectedWeapon.img} alt={selectedWeapon.name} />
				<img class="spell" src={selectedQspell.img} alt={selectedQspell.name} />
				<img class="spell" src={selectedWspell.img} alt={selectedWspell.name} />
				<img class="spell" src={selectedWeapon.Espell[0].img} alt={selectedWeapon.Espell[0].name} />
				<img class="spell" src={selectedWeaponPassive.img} alt={selectedWeaponPassive.name} />
				<div class="spells2">
					<img class="spell2" src={selectedWeapon.Q2spell[0].img} alt={selectedWeapon.Q2spell[0].name} style="top:40px; left:135px" />
					<img class="spell2" src={selectedWeapon.W2spell[0].img} alt={selectedWeapon.W2spell[0].name} style="top:40px; left:210px" />
					<!-- REMOVE COMMENT AFTER IMG IS ADDED   <img class="spell2" src={selectedWeapon.E2spell[0].img} alt={selectedWeapon.E2spell[0].name} style="top:40px; left:275px" />-->
					<img class="spell2" src={selectedWeapon.Passive2[0].img} alt={selectedWeapon.Passive2[0].name} style="top:40px; left:360px" />
				</div>
			</div>
			<div class="spells" style="background-color:#e0e0e0">
				<div class="itemName">{selectedHelmet.name}</div>
				<img class="item" src={selectedHelmet.img} alt={selectedHelmet.name} />
				<img class="spell" src={selectedHelmetSpell.img} alt={selectedHelmetSpell.name} />
				<img class="spell" src={selectedHelmetPassive.img} alt={selectedHelmetPassive.name} />
			</div>
			<div class="spells">
				<div class="itemName">{selectedArmor.name}</div>
				<img class="item" src={selectedArmor.img} alt={selectedArmor.name} />
				<img class="spell" src={selectedArmorSpell.img} alt={selectedArmorSpell.name} />
				<img class="spell" src={selectedArmorPassive.img} alt={selectedArmorPassive.name} />
				<img class="spell" src={selectedArmorPassive2.img} alt={selectedArmorPassive2.name} />
			</div>
			<div class="spells" style="background-color:#e0e0e0">
				<div class="itemName">{selectedBoots.name}</div>
				<img class="item" src={selectedBoots.img} alt={selectedBoots.name} />
				<img class="spell" src={selectedBootsSpell.img} alt={selectedBootsSpell.name} />
				<img class="spell" src={selectedBootsPassive.img} alt={selectedBootsPassive.name} />
			</div>
		</div>
	</div>
</body>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
	body {
		font-family: "Roboto";
		margin: 0;
		background-color: #eeeeee;
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

	.form {
		.select {
			margin-top: 10px;
		}
		label {
			margin-top: 8px;
			margin-left: 10px;
			select {
				margin-top: 8px;
				margin-left: 10px;
				min-width: 100px;
			}
		}
		.save {
			margin: 20px 0px 0px 20px;
		}
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin: 20px 0 0 0;
		.build {
			margin-right: 50px;
			margin-left: 50px;
			position: relative;
			.inventory {
				width: 550px;
				margin-top: 30px;
			}
			.itemBuild {
				position: absolute;
				width: 190px;
			}
		}
		.spellBox {
			position: relative;
			.spells {
				margin-top: 5px;
				border-radius: 10px;
				padding-top: 5px;
				width: 410px;
				height: 130px;
				.itemName {
					margin-left: 12px;
					font-size: 16px;
				}
				.item {
					width: 110px;
				}
				.spell {
					width: 70px;
				}
				.spell2 {
					width: 60px;
					position: absolute;
				}
			}
		}
	}

	@media only screen and (max-width: 768px) {
		body {
			height: auto;
			width: 100vw;
		}
	}

	@media only screen and (max-width: 560px) {
		body {
			height: auto;
		}
		.header {
			flex-direction: column;
			text-align: center;
			.buttons {
				display: flex;
				justify-content: center;
				button {
					float: none;
				}
			}
		}
		.form {
			display: flex;
			justify-content: center;
			.select {
				display: flex;
				flex-direction: column;
				margin-top: 10px;
				label {
					text-align: center;
					display: flex;
					flex-direction: column;
					select {
						display: flex;
						justify-content: center;
						margin: auto;
					}
				}
			}
			.buildName {
				text-align: center;
				display: flex;
				flex-direction: column;
				margin-top: 25px;
			}
			.save {
				display: flex;
				margin: 25px auto 0px auto;
			}
		}

		.container {
			scale: 70%;
		}
	}
</style>
