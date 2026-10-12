# Playwright ParaBank Automation Framework

A web UI automation framework built using **Playwright, TypeScript, and Page Object Model (POM)** to automate the ParaBank banking application.

## Overview

This project aims to validate core banking workflows through automated end-to-end tests. It follows a maintainable framework structure with reusable page objects, centralized test data, automated reporting, and CI integration.

**Application under test:** https://parabank.parasoft.com/parabank

## Tech Stack

- **Playwright Test** — browser automation and test execution
- **TypeScript** — type-safe test development
- **Page Object Model (POM)** — reusable page interactions and locators
- **HTML Reporter** — test execution reports
- **Git and GitHub** — version control and collaboration
- **GitHub Actions** — continuous integration (planned)

## Project Structure

```text
playwright-parabank/
├── tests/
│   ├── auth/
│   ├── accounts/
│   ├── transactions/
│   └── bill-payment/
├── pages/
├── fixtures/
├── data/
├── utils/
├── api/
├── config/
├── .github/
│   └── workflows/
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .env.example
├── .gitignore
└── README.md
```

### Folder Responsibilities

| Folder | Purpose |
|---|---|
| `tests/` | End-to-end test cases grouped by feature |
| `pages/` | Page objects, locators, and reusable page actions |
| `fixtures/` | Shared test setup and custom Playwright fixtures |
| `data/` | Test data and data builders |
| `utils/` | Reusable helper functions |
| `api/` | API helpers and API tests, when required |
| `config/` | Additional environment configuration |
| `.github/workflows/` | CI pipeline definitions |

## Prerequisites

Install the following:

- Node.js (LTS recommended)
- npm
- Git

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd playwright-parabank
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

Run a specific test file:

```bash
npx playwright test tests/auth/register.spec.ts
```

List discovered tests without executing them:

```bash
npx playwright test --list
```

## Reports and Debugging

Generate and open the HTML report:

```bash
npx playwright show-report
```

The framework is configured to capture screenshots, videos, and traces on test failures or according to the settings in `playwright.config.ts`.

## Framework Design Principles

- Use Page Object Model to centralize page interactions.
- Keep test scenarios readable and focused on expected behavior.
- Reuse test data and helper functions where appropriate.
- Prefer Playwright's auto-waiting and web-first assertions.
- Avoid hard-coded waits such as `page.waitForTimeout()` unless there is a justified reason.
- Keep tests independent so they can run reliably in parallel.
- Store credentials and secrets outside source control.
- Review changes through feature branches and pull requests.

## Test Coverage Roadmap

- Registration and authentication
- Required-field validation
- Invalid input and password mismatch validation
- Account overview and account details
- Fund transfers
- Bill payments
- Transaction history and search
- API validation and database checks, if supported by the application

## CI/CD

GitHub Actions integration will execute automated tests on code changes and publish test results and debugging artifacts.

## Contribution Workflow

1. Create a feature branch.
2. Implement or update tests.
3. Run relevant tests locally.
4. Review the changes and commit them.
5. Open a pull request.
6. Address review feedback and merge after approval.

## Disclaimer

This project is intended for learning and QA automation practice against the publicly accessible ParaBank demo application. Do not use real banking credentials or sensitive personal information.
