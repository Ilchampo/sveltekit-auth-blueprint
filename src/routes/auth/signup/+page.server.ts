import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';

import { signUpFormSchema } from '$lib/helpers/formSchemas';
import { fail, superValidate } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters';

import httpCodes from '$lib/constants/httpCodes';

export const load = (async () => {
	const form = await superValidate(yup(signUpFormSchema));

	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	signUp: async ({ request }) => {
		const form = await superValidate(request, yup(signUpFormSchema));

		if (!form.valid) {
			return fail(httpCodes.BAD_REQUEST, { form });
		}
		console.log('Reached the server action with form:', request);
	}
};
