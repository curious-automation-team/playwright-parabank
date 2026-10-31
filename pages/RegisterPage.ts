import { expect, Locator, Page } from "@playwright/test";
import type { RegistrationData } from "../data/registrationData";

export class RegisterPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly street: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly phoneNumber: Locator;
    readonly ssn: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerLink: Locator;
    readonly registerSuccessMessage: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('[id="customer.firstName"]');
        this.lastName = page.locator('[id="customer.lastName"]');
        this.street = page.locator('[id="customer.address.street"]');
        this.city = page.locator('[id="customer.address.city"]');
        this.state = page.locator('[id="customer.address.state"]');
        this.zipCode = page.locator('[id="customer.address.zipCode"]');
        this.phoneNumber = page.locator('[id="customer.phoneNumber"]');
        this.ssn = page.locator('[id="customer.ssn"]');
        this.username = page.locator('[id="customer.username"]');
        this.password = page.locator('[id="customer.password"]');
        this.confirmPassword = page.locator('[id="repeatedPassword"]');
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.registerSuccessMessage = page.locator('h1:has-text("Welcome")');
        this.registerButton = page.getByRole('button', { name: 'Register' });
    };

    async navigateToRegisterPage() {
        await this.registerLink.click();
        await this.page.waitForLoadState('networkidle');
        this.page.url().includes('register');
    };

    async registerUser(user: RegistrationData) {
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.street.fill(user.street);
        await this.city.fill(user.city);
        await this.state.fill(user.state);
        await this.zipCode.fill(user.zipCode);
        await this.phoneNumber.fill(user.phoneNumber);
        await this.ssn.fill(user.ssn);
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.confirmPassword.fill(user.password);
        await this.registerButton.click();
    };

    async clickRegister() {
        await this.registerButton.click();
    }

    async verifyRequiredFieldError() {
         const requiredFields = [
            'First name is required.',
            'Last name is required.',
            'Address is required.',
            'City is required.',
            'State is required.',
            'Zip Code is required.',
            'Social Security Number is required.',
            'Username is required.',
            'Password is required.',
        ];

        requiredFields.forEach((field) => {
            expect(this.page.getByText(field)).toBeVisible();
        });
    };
};