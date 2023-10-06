import { db } from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

export const load = async ({ params }) => {
	const user = await db.collection("Users").findOne({ login: params.slug });
	const nickname = JSON.parse(JSON.stringify(user));

	const u_id = new ObjectId(nickname._id);

	const foundBuild = await db.collection("Builds").find({ user_id: u_id }).toArray();
	const builds = JSON.parse(JSON.stringify(foundBuild));

	return {
		builds,
		nickname
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
