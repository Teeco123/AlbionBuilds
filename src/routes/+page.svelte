<script lang="ts">
	import { weapons, offhands, capes, helmets, armors, boots } from "./components/items";

	let selectedWeapon: { name: string; img: string } = { name: "", img: "" };
	let selectedOffhand: { name: string; img: string } = { name: "", img: "" };
	let selectedHelmet: { name: string; img: string } = { name: "", img: "" };
	let selectedArmor: { name: string; img: string } = { name: "", img: "" };
	let selectedBoots: { name: string; img: string } = { name: "", img: "" };
	let selectedCape: { name: string; img: string } = { name: "", img: "" };
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
				<select bind:value={selectedHelmet}>
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
				<select bind:value={selectedArmor}>
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
				<select bind:value={selectedBoots}>
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
				<select bind:value={selectedCape}>
					{#each capes as cape}
						<option value={cape}>
							{cape.name}
						</option>
					{/each}
				</select>
			</label>
		</form>
	</div>
	{#if selectedWeapon.onehand == true}
		<img src={selectedWeapon.img} alt={selectedWeapon.name} />
		<img src={selectedOffhand.img} alt={selectedOffhand.name} />
		<img src={selectedHelmet.img} alt={selectedHelmet.name} />
		<img src={selectedArmor.img} alt={selectedArmor.name} />
		<img src={selectedBoots.img} alt={selectedBoots.name} />
		<img src={selectedCape.img} alt={selectedCape.name} />
	{:else}
		<img src={selectedWeapon.img} alt={selectedWeapon.name} />
		<img src={selectedHelmet.img} alt={selectedHelmet.name} />
		<img src={selectedArmor.img} alt={selectedArmor.name} />
		<img src={selectedBoots.img} alt={selectedBoots.name} />
		<img src={selectedCape.img} alt={selectedCape.name} />
	{/if}
</body>
