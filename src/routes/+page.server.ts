// @ts-nocheck
import { db } from "$lib/server/db.js";
import { ObjectId } from "mongodb";
import { boots } from "./components/items.js";

export const load = async () => {
	const weaponsArr = await db.collection("Weapons").find().toArray();
	const offhandsArr = await db.collection("Offhands").find().toArray();
	const helmetsArr = await db.collection("Helmets").find().toArray();
	const armorsArr = await db.collection("Armors").find().toArray();
	const bootsArr = await db.collection("Boots").find().toArray();
	const capesArr = await db.collection("Capes").find().toArray();
	const potionsArr = await db.collection("Potions").find().toArray();
	const foodArr = await db.collection("Food").find().toArray();

	const weapons = JSON.parse(JSON.stringify(weaponsArr));
	const offhands = JSON.parse(JSON.stringify(offhandsArr));
	const helmets = JSON.parse(JSON.stringify(helmetsArr));
	const armors = JSON.parse(JSON.stringify(armorsArr));
	const boots = JSON.parse(JSON.stringify(bootsArr));
	const capes = JSON.parse(JSON.stringify(capesArr));
	const potions = JSON.parse(JSON.stringify(potionsArr));
	const food = JSON.parse(JSON.stringify(foodArr));

	return {
		weapons,
		offhands,
		helmets,
		armors,
		boots,
		capes,
		potions,
		food
	};
};

export const actions = {
	saveBuild: async ({ request, cookies }) => {
		const data = await request.formData();

		const weapon = data.get("weapon");
		const Qspell = data.get("Qspell");
		const Wspell = data.get("Wspell");
		const weaponPassive = data.get("weaponPassive");

		const offhand = data.get("offhand");

		const helmet = data.get("helmet");
		const helmetSpell = data.get("helmetSpell");
		const helmetPassive = data.get("helmetPassive");

		const armor = data.get("armor");
		const armorSpell = data.get("armorSpell");
		const armorPassive = data.get("armorPassive");
		const armorPassive2 = data.get("armorPassive2");

		const boots = data.get("boots");
		const bootsSpell = data.get("bootsSpell");
		const bootsPassive = data.get("bootsPassive");

		const cape = data.get("cape");
		const potion = data.get("potion");
		const food = data.get("food");

		const session = cookies.get("session");
		var o_id = new ObjectId(session);

		//Find selected items in database
		const foundWeaponArr = await db
			.collection("Weapons")
			.aggregate([
				{
					$match: {
						name: weapon
					}
				},
				{
					$unwind: "$Qspell"
				},
				{
					$unwind: "$Wspell"
				},
				{
					$unwind: "$Passive"
				},
				{
					$match: {
						"Qspell.name": Qspell,
						"Wspell.name": Wspell,
						"Passive.name": weaponPassive
					}
				}
			])
			.toArray();

		const foundHelmetArr = await db
			.collection("Helmets")
			.aggregate([
				{
					$match: {
						name: helmet
					}
				},
				{
					$unwind: "$spell"
				},
				{
					$unwind: "$passive"
				},
				{
					$match: {
						"spell.name": helmetSpell,
						"passive.name": helmetPassive
					}
				}
			])
			.toArray();

		const foundArmorArr = await db
			.collection("Armors")
			.aggregate([
				{
					$match: {
						name: armor
					}
				},
				{
					$unwind: "$spell"
				},
				{
					$unwind: "$passive"
				},
				{
					$unwind: "$passive2"
				},
				{
					$match: {
						"spell.name": armorSpell,
						"passive.name": armorPassive,
						"passive2.name": armorPassive2
					}
				}
			])
			.toArray();

		const foundBootsArr = await db
			.collection("Boots")
			.aggregate([
				{
					$match: {
						name: boots
					}
				},
				{
					$unwind: "$spell"
				},
				{
					$unwind: "$passive"
				},
				{
					$match: {
						"spell.name": bootsSpell,
						"passive.name": bootsPassive
					}
				}
			])
			.toArray();

		const foundOffhandArr = await db.collection("Offhands").find({ name: offhand }).toArray();
		const foundCapeArr = await db.collection("Capes").find({ name: cape }).toArray();
		const foundPotionArr = await db.collection("Potions").find({ name: potion }).toArray();
		const foundFoodArr = await db.collection("Food").find({ name: food }).toArray();

		const foundWeapon = JSON.parse(JSON.stringify(foundWeaponArr));
		const foundOffhand = JSON.parse(JSON.stringify(foundOffhandArr));
		const foundHelmet = JSON.parse(JSON.stringify(foundHelmetArr));
		const foundArmor = JSON.parse(JSON.stringify(foundArmorArr));
		const foundBoots = JSON.parse(JSON.stringify(foundBootsArr));
		const foundCape = JSON.parse(JSON.stringify(foundCapeArr));
		const foundPotion = JSON.parse(JSON.stringify(foundPotionArr));
		const foundFood = JSON.parse(JSON.stringify(foundFoodArr));

		//console.dir(foundWeapon[0]._id);

		db.collection("Builds").insertOne({
			user_id: o_id,
			weapon: {
				_id: foundWeapon[0]._id,
				name: foundWeapon[0].name,
				onehand: foundWeapon[0].onehand,
				img: foundWeapon[0].img,
				Qspell: foundWeapon[0].Qspell,
				Wspell: foundWeapon[0].Wspell,
				Espell: foundWeapon[0].Espell[0],
				Passive: foundWeapon[0].Passive
			},
			offhand: {
				_id: foundOffhand[0]?._id,
				name: foundOffhand[0]?.name,
				img: foundOffhand[0]?.img
			},
			helmet: {
				_id: foundHelmet[0]._id,
				name: foundHelmet[0].name,
				img: foundHelmet[0].img,
				spell: foundHelmet[0].spell,
				passive: foundHelmet[0].passive
			},
			armor: {
				_id: foundArmor[0]._id,
				name: foundArmor[0].name,
				img: foundArmor[0].img,
				spell: foundArmor[0].spell,
				passive: foundArmor[0].passive,
				passive2: foundArmor[0].passive2
			},
			boots: {
				_id: foundBoots[0]._id,
				name: foundBoots[0].name,
				img: foundBoots[0].img,
				spell: foundBoots[0].spell,
				passive: foundBoots[0].passive
			},
			cape: {
				_id: foundCape[0]._id,
				name: foundCape[0].name,
				img: foundCape[0].img
			},
			potion: {
				_id: foundPotion[0]._id,
				name: foundPotion[0].name,
				img: foundPotion[0].img
			},
			food: {
				_id: foundFood[0]._id,
				name: foundFood[0].name,
				img: foundFood[0].img
			}
		});
	}
};
