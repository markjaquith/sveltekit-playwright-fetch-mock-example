import type { HandleFetch, Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import {
	handle as handleHttpMocks,
	handleFetch as handleMockedResponses,
} from 'sveltekit-playwright-fetch-mock'
import { PUBLIC_LOCAL } from '$env/static/public'

export const handle = sequence(
	handleHttpMocks(PUBLIC_LOCAL === '1'),
) satisfies Handle

export const handleFetch = (async ({ request, fetch, event }) => {
	const mockedResponse = handleMockedResponses(request, event)

	if (mockedResponse) {
		return mockedResponse
	}

	return fetch(request)
}) satisfies HandleFetch
