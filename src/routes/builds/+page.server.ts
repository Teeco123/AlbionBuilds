import { db } from "$lib/server/db.js";

export const load = async ({ params }) => {
	const foundBuilds = await db.collection("Builds").find().sort({ _id: -1 }).toArray();
	const builds = JSON.parse(JSON.stringify(foundBuilds));

	return {
		builds
	};
};
