type FetchMocks = Record<
	string,
	{
		status: number
		statusText: string
		headers?: Record<string, string>
		body: string
	}
>

// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		fetchMocks: FetchMocks
		isPlaywright: boolean
	}
	// interface PageData {}
	// interface Platform {}
}