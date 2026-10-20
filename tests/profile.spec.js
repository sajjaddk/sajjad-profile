const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

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

test('lists all four jobs, most recent role first', async ({ page }) => {
  const jobs = page.locator('#experience .job');
  await expect(jobs).toHaveCount(4);
  await expect(jobs.first().getByRole('heading')).toHaveText('Quality Assurance Engineer');
  await expect(jobs.first()).toContainText('Feb 2026 – Oct 2026');
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
  await expect(page.locator('#contact').getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/sajjad-m-245b9314');
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

test('LinkedIn and GitHub links are near the top', async ({ page }) => {
  await expect(page.getByTestId('hero-linkedin')).toHaveAttribute('href', 'https://www.linkedin.com/in/sajjad-m-245b9314');
  await expect(page.getByTestId('hero-github')).toHaveAttribute('href', 'https://github.com/sajjaddk');
  await expect(page.getByTestId('hero-linkedin')).toBeInViewport();
});

test('has favicon and link-preview (Open Graph) tags', async ({ page, request }) => {
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', 'favicon.svg');
  for (const prop of ['og:title', 'og:description', 'og:image', 'og:url']) {
    await expect(page.locator(`meta[property="${prop}"]`)).toHaveCount(1);
  }
  expect((await request.get('/favicon.svg')).ok()).toBeTruthy();
  const img = await request.get('/og.png');
  expect(img.ok()).toBeTruthy();
  expect(img.headers()['content-type']).toContain('png');
});

test('language switch toggles English and Danish', async ({ page }) => {
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.getByRole('button', { name: 'DA' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'da');
  await expect(page.locator('#about p.prose')).toContainText('baggrund i applikationssupport');
  await expect(page.locator('#experience .job').first()).toContainText('okt 2026');
  await page.getByRole('button', { name: 'EN' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#about p.prose')).toContainText('background in application support');
});

test('chosen language is remembered after reload', async ({ page }) => {
  await page.getByRole('button', { name: 'DA' }).click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'da');
  await expect(page.getByRole('link', { name: 'Kompetencer' })).toBeVisible();
});

test('every English text has a Danish translation', async ({ page }) => {
  const unchanged = await page.evaluate(() => {
    const before = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(e => [e.dataset.i18n, e.textContent]));
    document.querySelector('[data-lang="da"]').click();
    return [...document.querySelectorAll('[data-i18n]')].filter(e => e.textContent === before[e.dataset.i18n]).map(e => e.dataset.i18n);
  });
  // Texts that are identical in English and Danish.
  const allowed = ['hero.cv', 'con.dl', 'cert.t', 'exp.4.2x'];
  expect(unchanged.filter(k => !allowed.includes(k))).toEqual([]);
});

for (const lang of ['en', 'da']) {
  test(`no automatic accessibility violations (${lang})`, async ({ page }) => {
    if (lang === 'da') await page.getByRole('button', { name: 'DA' }).click();
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations.map(v => `${v.id}: ${v.nodes.length} node(s)`)).toEqual([]);
  });
}

test('shows two projects with links to their GitHub repositories', async ({ page }) => {
  const projects = page.locator('#projects .project');
  await expect(projects).toHaveCount(2);
  await expect(projects.nth(0).getByRole('link')).toHaveAttribute('href', 'https://github.com/sajjaddk/project-demo');
  await expect(projects.nth(1).getByRole('link')).toHaveAttribute('href', 'https://github.com/sajjaddk/jenkin');
  await expect(projects.nth(1)).toContainText('Playwright');
});

test('Playwright is listed as a skill', async ({ page }) => {
  await expect(page.locator('#skills li').filter({ hasText: /^Playwright$/ })).toHaveCount(1);
});
