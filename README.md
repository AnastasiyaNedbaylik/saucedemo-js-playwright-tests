SauceDemo UI Automation Tests

Automated UI tests for https://www.saucedemo.com
built with JavaScript + Playwright, following the Page Object Model (POM) design pattern.

Overview

Framework: Playwright
Language: JavaScript (ESM)
Architecture: Page Object Model
Execution: Local via npm
Reports: Playwright HTML Report
Linting: ESLint
Formatting: Prettier
Environment variables: .env with .env.example

Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/<your_username>/saucedemo-js-playwright-tests.git
cd saucedemo-js-playwright-tests

Install dependencies
npm install

Environment setup (.env configuration)

This project uses dotenv to store and load environment variables.

You already have an example file:
📄 .env.example

Create your local .env file:
You can either manually create it or copy from the example

⚠️ The .env file is ignored by Git — each developer can have their own configuration.

Run tests
Run all tests:
npm run test

Run a single test:
npx playwright test tests/login.test.js

Run tests in UI mode:
npm run ui

Show HTML report:
npm run report

Available npm scripts
| Command | Description |
| ---------------- | ------------------------------- |
| `npm run test` | Run all Playwright tests |
| `npm run ui` | Run tests in Playwright UI mode |
| `npm run report` | Open last HTML report |
| `npm run lint` | Run ESLint with auto-fix |

Features

✅ Modular Page Object Model (POM)

✅ Environment-based configuration with .env and .env.example

✅ Screenshots & video on failure

✅ HTML report with test results

✅ Reusable locators and test data

✅ ESLint + Prettier integration

✅ Cross-browser support: Chromium, Firefox, WebKit
