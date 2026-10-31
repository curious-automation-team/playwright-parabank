import { test, expect } from "../../fixtures/test.fixture";
import { HomePage } from "../../pages/HomePage";
import { RegisterPage } from "../../pages/RegisterPage";
import { createRegistrationData } from "../../data/registrationData";

test('TC_AUTH_001 - Register new user with valid details', async ({ page, homePage, registerPage }) => {
    const user = createRegistrationData();
    await homePage.visit();
    await registerPage.navigateToRegisterPage();
    await registerPage.registerUser(user);
    await expect(page.getByRole('heading', { name: `Welcome ${user.username}`})).toBeVisible();
    await expect(page.getByText('Your account was created successfully. You are now logged in')).toBeVisible();
});

test('TC_AUTH_002 - Registration required-field validation', async ({ page, homePage, registerPage }) => {
    await homePage.visit();
    await registerPage.navigateToRegisterPage();
    await registerPage.clickRegister();
    await registerPage.verifyRequiredFieldError();
})