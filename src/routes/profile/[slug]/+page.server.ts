import { db } from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params }) => {
	const user = await db.collection("Users").findOne({ login: params.slug });
	const nickname = JSON.parse(JSON.stringify(user));

	return {
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
	}
};
