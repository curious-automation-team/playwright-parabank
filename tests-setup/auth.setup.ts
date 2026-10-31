import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegisterPage} from "../pages/RegisterPage";
import { createRegistrationData } from "../data/registrationData";
import { mkdir } from 'node:fs/promises';

const authFile = 'playwright/.auth/user.json';

test('Create Authenticated Session', async ({ page }) => {

    await mkdir('playwright/.auth', { recursive: true });

    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    const user = createRegistrationData();

    await homePage.visit();
    await registerPage.navigateToRegisterPage();
    await registerPage.registerUser(user);

    await expect(page.getByRole('heading', { name: `Welcome ${user.username}`})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();

    await page.context().storageState({ path: authFile });
});