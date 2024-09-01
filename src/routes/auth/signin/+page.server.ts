import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';

import { signInFormSchema } from '$lib/helpers/formSchemas';
import { fail, superValidate } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters';

import httpCodes from '$lib/constants/httpCodes';

export const load = (async () => {
	const form = await superValidate(yup(signInFormSchema));

	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	signIn: async ({ request }) => {
		const form = await superValidate(request, yup(signInFormSchema));

		if (!form.valid) {
			return fail(httpCodes.BAD_REQUEST, { form });
		}
		console.log('Reached the server action with form:', request);
	}
};
