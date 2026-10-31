import { HomePage } from "../../pages/HomePage";
import { RegisterPage } from "../../pages/RegisterPage";
import { createRegistrationData } from "../../data/registrationData";
import { test, expect } from "../../fixtures/test.fixture";

test('Login with Valid Credentials', async ({ page, homePage, registerPage }) => {
    const user = createRegistrationData();
    // register an user
    await homePage.visit();
    await registerPage.navigateToRegisterPage();
    await registerPage.registerUser(user);
    await expect(page.getByRole('heading', { name: `Welcome ${user.username}`})).toBeVisible();
    await expect(page.getByText('Your account was created successfully. You are now logged in')).toBeVisible();
    await page.getByRole('link', { name: 'Log Out' }).click();
    // login to application
    await homePage.loginToApplication(user.username, user.password);
    await expect(page.getByRole('heading', { name: 'Account Services' })).toBeVisible();
});