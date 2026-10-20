const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has correct title and heading', async ({ page }) => {
  await expect(page).toHaveTitle(/Sajjad.*QA Engineer/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('M. Sajjad');
  await expect(page.locator('.role')).toHaveText('QA Engineer');
});

test('shows key skills', async ({ page }) => {
  const skills = page.locator('#skills li');
  for (const s of ['Cypress', 'TypeScript', 'Page Object Model', 'Allure Reports', 'AI-assisted Testing', 'Postman', 'Rest Assured', 'Regression Testing']) {
    await expect(skills.filter({ hasText: s }).first()).toBeVisible();
  }
});

test('lists all four jobs, current role first', async ({ page }) => {
  const jobs = page.locator('#experience .job');
  await expect(jobs).toHaveCount(4);
  await expect(jobs.first().getByRole('heading')).toHaveText('Quality Assurance Engineer');
  await expect(jobs.first()).toContainText('Present');
});

test('lists three certifications', async ({ page }) => {
  await expect(page.locator('#certifications li')).toHaveCount(3);
  await expect(page.locator('#certifications')).toContainText('AZ-104');
});

test('navigation links point to existing sections', async ({ page }) => {
  const links = page.locator('nav a');
  const count = await links.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute('href');
    await expect(page.locator(href)).toHaveCount(1);
  }
});

test('contact email link is valid', async ({ page }) => {
  await expect(page.locator('#contact a[href^="mailto:"]')).toHaveAttribute('href', 'mailto:sajjad81@gmail.com');
});

test('LinkedIn link is present', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/sajjad-m-245b9314');
});

test('CV PDF is downloadable', async ({ page, request }) => {
  const href = await page.getByRole('link', { name: /Download CV/ }).getAttribute('href');
  const res = await request.get(href);
  expect(res.ok()).toBeTruthy();
  expect(res.headers()['content-type']).toContain('pdf');
});

test('no horizontal overflow', async ({ page }) => {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
});
