<script lang="ts">
	import { weapons, offhands, capes, helmets, armors, boots, potions } from "./components/items";

	let selectedWeapon: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
	let selectedOffhand: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
	let selectedHelmet: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
	let selectedArmor: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
	let selectedBoots: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
	let selectedCape: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
	let selectedPotion: { name: string; img: string } = {
		name: "",
		img: "src/routes/images/no-item.png"
	};
</script>

<body>
	<div class="form">
		<form>
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
			<!-----------Helmet select------------->
			<label>
				Helmet:
				<select disabled={selectedWeapon.name == ""} bind:value={selectedHelmet}>
					{#each helmets as helmet}
						<option value={helmet}>
							{helmet.name}
						</option>
					{/each}
				</select>
			</label>
			<!-----------Armor select-------------->
			<label>
				Armor:
				<select disabled={selectedWeapon.name == ""} bind:value={selectedArmor}>
					{#each armors as armor}
						<option value={armor}>
							{armor.name}
						</option>
					{/each}
				</select>
			</label>
			<!-----------Helmet select------------->
			<label>
				Boots:
				<select disabled={selectedWeapon.name == ""} bind:value={selectedBoots}>
					{#each boots as boots}
						<option value={boots}>
							{boots.name}
						</option>
					{/each}
				</select>
			</label>
			<!------------Cape select-------------->
			<label>
				Cape:
				<select disabled={selectedWeapon.name == ""} bind:value={selectedCape}>
					{#each capes as cape}
						<option value={cape}>
							{cape.name}
						</option>
					{/each}
				</select>
			</label>
			<!------------Potion select-------------->
			<label>
				Potion:
				<select disabled={selectedWeapon.name == ""} bind:value={selectedPotion}>
					{#each potions as potion}
						<option value={potion}>
							{potion.name}
						</option>
					{/each}
				</select>
			</label>
		</form>
		<p>Choose weapon first!</p>
	</div>
	<img src="src\routes\images\inventory.png" alt="inventory" class="inventory" />
	<div class="items">
		{#if selectedWeapon.onehand == true}
			<img id="weapon" src={selectedWeapon.img} alt={selectedWeapon.name} />
			<img id="offhand" src={selectedOffhand.img} alt={selectedOffhand.name} />
			<img id="helmet" src={selectedHelmet.img} alt={selectedHelmet.name} />
			<img id="armor" src={selectedArmor.img} alt={selectedArmor.name} />
			<img id="boots" src={selectedBoots.img} alt={selectedBoots.name} />
			<img id="cape" src={selectedCape.img} alt={selectedCape.name} />
		{:else}
			<img id="weapon" src={selectedWeapon.img} alt={selectedWeapon.name} />
			<img id="offhand" src="src\routes\images\no-item.png" alt={selectedOffhand.name} />
			<img id="helmet" src={selectedHelmet.img} alt={selectedHelmet.name} />
			<img id="armor" src={selectedArmor.img} alt={selectedArmor.name} />
			<img id="boots" src={selectedBoots.img} alt={selectedBoots.name} />
			<img id="cape" src={selectedCape.img} alt={selectedCape.name} />
		{/if}
	</div>
</body>

<style>
	.inventory {
		display: block;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		bottom: -100px;
		left: -150px;
	}
	.items img {
		width: 94px;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	#weapon {
		position: relative;
		bottom: 180px;
		left: -239px;
	}

	#offhand {
		position: relative;
		bottom: 273px;
		left: -58px;
	}

	#helmet {
		position: relative;
		bottom: 458px;
		left: -150px;
	}

	#armor {
		position: relative;
		bottom: 472px;
		left: -150px;
	}

	#boots {
		position: relative;
		bottom: 486px;
		left: -150px;
	}

	#cape {
		position: relative;
		bottom: 732px;
		left: -58px;
	}
</style>
