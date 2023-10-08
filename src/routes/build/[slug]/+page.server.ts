import { db } from "$lib/server/db.js";
import { ObjectId } from "mongodb";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params, cookies }) => {
	const buildId = params.slug;
	var b_id = new ObjectId(buildId);

	const foundBuild = await db.collection("Builds").findOne({ _id: b_id });
	const build = JSON.parse(JSON.stringify(foundBuild));

	const foundUserBuild = await db.collection("Users").findOne({ _id: foundBuild?.user_id });
	const userBuild = JSON.parse(JSON.stringify(foundUserBuild));

	const session = cookies.get("session");
	var o_id = new ObjectId(session);

	const foundUser = await db.collection("Users").findOne({ _id: o_id });
	const user = JSON.parse(JSON.stringify(foundUser));

	return {
		build,
		userBuild,
		user
	};
};

export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete("session", { path: "/" });
		console.log(cookies.get("session"));

		throw redirect(303, "/");
	},
	loginRedirect: async () => {
		throw redirect(303, "/login");
	},
	myProfile: async ({ cookies }) => {
		const session = cookies.get("session");
		var o_id = new ObjectId(session);

		const user = await db.collection("Users").findOne({ _id: o_id });
		throw redirect(303, `/profile/${user?.login}`);
	}
};
