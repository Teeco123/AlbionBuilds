import { redirect } from "@sveltejs/kit";

export const actions = {
	logout: async ({ cookies }) => {
		cookies.delete("session");
		console.log(cookies.get("session"));

		throw redirect(303, "/");
	}
};
