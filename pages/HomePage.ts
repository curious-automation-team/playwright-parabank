import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly forgotPasswordLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.getByRole('button', { name: 'Log In'});
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot login info?' });
    };

    async visit() {
        await this.page.goto('/');
        await this.page.waitForLoadState('load');
    };

    async loginToApplication(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}