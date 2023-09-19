import { expect, test } from '@playwright/test';
import { mockFetch } from 'sveltekit-playwright-fetch-mock';

test('example.com fetch', async ({ page }) => {
	await mockFetch(page, /^https:\/\/www\.example\.com/, { response: "mocked" });
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('mocked');
});
