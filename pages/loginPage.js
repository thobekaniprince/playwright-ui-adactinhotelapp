export class LoginPage {

    constructor(page) {
        this.page = page;
        this.inputUsername = page.locator('#username');
        this.inputPassword = page.locator('#password');
        this.logoutLink = page.locator('//a[text()="Logout"]');
        this.forgotPasswordLink = page.locator('//a[text()="Forgot Password?"]');
        this.loginButton = page.locator('//input[@type="Submit" or name="login"]');
        this.usernameError = page.locator('(//span[@class="login_error"])[1]');
        this.passwordError = page.locator('(//span[@class="login_error"])[2]');
        this.invalidLoginError = page.locator('//div[@class="auth_error"]/b/.');
    }

    async login(username, password) {
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.clickLoginButton();
    }

    async clickLoginButton() {
        //await (await this.loginButton).waitForClickable();
        await (await this.loginButton).click();
    }
}