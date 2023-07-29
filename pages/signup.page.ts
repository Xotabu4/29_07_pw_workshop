import { expect } from "@playwright/test";
import { AppComponent } from "./appComponent";

export class SignUp extends AppComponent {
    private emailInput = this.page.getByRole('main').getByPlaceholder('Please Enter Your Email');
    private firstNameInput = this.page.getByPlaceholder('Please Enter Your First Name');
    private lastNameInput = this.page.getByPlaceholder('Please Enter Your Last Name');
    private passwordInput = this.page.getByPlaceholder('Please Enter Your Password')
    private signUpButton = this.page.getByRole('button', { name: 'Sign Up' });

    async open() {
        await this.page.goto('..');
        
    }

    async waitForLoaded() {
        await expect(this.emailInput, 'Expected SignUp page to be opened').toBeVisible();
    }

    async isLoaded() {
        try { 
            await this.waitForLoaded()
            return true
        } catch {
            return false
        }
    }

    async signUpNewUser() {
        await this.emailInput.fill(`test+${Date.now()}@test.com`);
        await this.firstNameInput.fill('test');
        await this.lastNameInput.fill('test');
        await this.passwordInput.fill('123456');
        await this.signUpButton.click();
    }
}