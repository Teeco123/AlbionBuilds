<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

Created by: {data.user.login}
<div class="weaponSpells">
	<div class="itemName">{data.build.weapon.name}</div>
	<img src={data.build.weapon.img} alt={data.build.weapon.name} />
	<img src={data.build.weapon.Qspell.img} alt={data.build.weapon.Qspell.name} />
	<img src={data.build.weapon.Wspell.img} alt={data.build.weapon.Wspell.name} />
	<img src={data.build.weapon.Espell.img} alt={data.build.weapon.Espell.name} />
	<img src={data.build.weapon.Passive.img} alt={data.build.weapon.Passive.name} />
</div>
