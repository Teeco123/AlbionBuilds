import { db } from "$lib/server/db.js";
import { ObjectId } from "mongodb";

export const load = async ({ params }) => {
	const buildId = params.slug;
	var b_id = new ObjectId(buildId);

	const foundBuild = await db.collection("Builds").findOne({ _id: b_id });
	const build = JSON.parse(JSON.stringify(foundBuild));

	const foundUser = await db.collection("Users").findOne({ _id: foundBuild?.user_id });
	const user = JSON.parse(JSON.stringify(foundUser));
	return {
		build,
		user
	};
};
