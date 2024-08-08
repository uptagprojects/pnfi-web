import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('meta is correct', async ({ page }) => {
  await expect(page).toHaveTitle('Astro is awesome!');
});

test('has a valid footer', async ({ page }) => {
  page.getByRole("footer")
})