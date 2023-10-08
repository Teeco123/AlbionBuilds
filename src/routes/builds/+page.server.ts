import { db } from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

export const load = async ({ params }) => {
	const foundBuilds = await db.collection("Builds").find().sort({ _id: -1 }).toArray();
	const builds = JSON.parse(JSON.stringify(foundBuilds));

	return {
		builds
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
