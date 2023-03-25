import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.beforeEach(async ({ page }) => {
    await page.goto('http://adactinhotelapp.com/');
});

test.describe('login', () => {
    test('TC - 101 user should login successful', async ({ page }) => {
       const loginpage = new LoginPage(page);
       await loginpage.login('thobekani','254500');
       await expect(loginpage.logoutLink, 'User should login to the applicati on.').toBeVisible();
    });
});