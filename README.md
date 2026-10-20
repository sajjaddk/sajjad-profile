# Sajjad – Profile Website

A personal profile website built from my CV, tested automatically with Playwright, and published to GitHub Pages by a CI/CD pipeline.

**Live site:** https://sajjaddk.github.io/sajjad-profile/

---

## 1. What is in this project

| File / folder | What it does |
|---|---|
| `index.html` | The website content (about, skills, experience, certifications, contact) |
| `styles.css` | Look and layout, including the mobile layout |
| `Sajjad_CV.pdf` | The CV, offered as a download button on the site |
| `tests/profile.spec.js` | Playwright tests that check the site |
| `playwright.config.js` | Playwright settings: local server, browsers (desktop and mobile) |
| `package.json` | Lists the tools: Playwright and `serve` (a small web server) |
| `.github/workflows/ci.yml` | The CI/CD pipeline that GitHub runs |
| `.gitignore` | Files Git should ignore (`node_modules`, reports) |

---

## 2. How it was built (step by step)

1. **Read the CV.** The content of `Sajjad_CV.pdf` became the sections of the page.
2. **Write the site.** It is plain HTML and CSS, with no framework and no build step. This keeps it fast, simple and easy to host.
3. **Add Playwright tests.** `serve` hosts the site locally and Playwright opens it in real Chromium (desktop and a Pixel 7 phone profile). The tests check the title, skills, jobs, certifications, nav links, email and LinkedIn links, the PDF download, and mobile overflow.
4. **Add the pipeline.** `ci.yml` tells GitHub to run the tests on every push and deploy the site if they pass.
5. **Push to GitHub.** The code lives at https://github.com/sajjaddk/sajjad-profile.
6. **Enable Pages.** In Settings → Pages, set Source to **GitHub Actions**.

---

## 3. The workflow (what happens on each change)

```
Edit files  ->  git push to main  ->  GitHub Actions starts
                                          |
                          Job 1: test  (install, run Playwright)
                                          |
                      pass? -- no --> STOP (site is not updated, report is saved)
                          |
                         yes
                          |
                  Job 2: deploy (copy site files, publish to GitHub Pages)
                          |
                   Live site updated
```

- **Pull requests** run only the tests. They never deploy.
- **Pushes to `main`** run the tests and then deploy.
- A **failing test blocks the deploy**, so a broken site never goes live.
- The Playwright HTML report is saved as an artifact on each run (Actions tab → the run → Artifacts) for 14 days.

---

## 4. Everyday tasks

### Change the content
1. Edit `index.html` (text) or `styles.css` (look).
2. Run the tests locally (see below).
3. Commit and push:
   ```
   git add -A
   git commit -m "Update profile"
   git push
   ```
4. Wait about 1–2 minutes and the live site updates. Progress is visible in the repo's **Actions** tab.

### Run the tests locally
```
npm install                      # first time only
npx playwright install chromium  # first time only
npm test
```
Useful extras:
- `npx playwright test --ui` – interactive mode
- `npx playwright show-report` – open the last HTML report
- `npm start` – serve the site at http://localhost:3000 to look at it

### Add a new test
Open `tests/profile.spec.js` and add one:
```js
test('example', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#skills')).toContainText('Cypress');
});
```
Tests run on both the desktop and mobile projects.

### Update the CV
Replace `Sajjad_CV.pdf` (keep the same file name), then push as above.

---

## 5. Troubleshooting

| Problem | Fix |
|---|---|
| Deploy job fails with a Pages error | Settings → Pages → Source must be **GitHub Actions**. Then re-run the job. |
| A test fails after editing `index.html` | The test counts items (4 jobs, 3 certifications). If you added or removed one on purpose, update the test too. |
| `git push` asks for a login | Sign in through the browser window, or use a personal access token as the password. |
| Site shows old content | Wait for the Actions run to finish, then hard-refresh with Ctrl+F5. |
| Push rejected | Run `git pull --rebase`, then push again. |

---

## 6. Tools used

- **HTML / CSS** – the website
- **Playwright** – automated browser tests
- **serve** – local test server
- **GitHub Actions** – CI/CD pipeline
- **GitHub Pages** – free hosting
