import { expect } from '@playwright/test';
import { loginPage } from '../locators/login.page.js';
import { productsPage } from '../locators/products.page.js';
import { BASE_URL, PRODUCTS_PAGE } from '../configs.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.userNameField = page.locator(loginPage.userNameField);
    this.passwordField = page.locator(loginPage.passwordField);
    this.loginButton = page.locator(loginPage.loginButton);
    this.burgerMenuButton = page.locator(productsPage.burgerMenuButton);
    this.logoutLink = page.locator(productsPage.logoutLink);
    this.errorMessageLockedUser = page.locator(
      loginPage.errorMessageLockedUser
    );
  }

  async openLoginPage() {
    await this.page.goto(BASE_URL);
    await this.page.waitForLoadState('load');
  }

  async fillLoginEmail(email) {
    await this.userNameField.fill(email);
  }

  async fillLoginPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(email, password) {
    await this.openLoginPage();
    await this.fillLoginEmail(email);
    await this.fillLoginPassword(password);
    await this.clickLoginButton();
  }

  async logout() {
    await this.burgerMenuButton.click();
    await this.page.waitForSelector(productsPage.logoutLink, {
      state: 'visible',
    });
    await this.logoutLink.click();
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(PRODUCTS_PAGE);
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async assertLoginError(expectedText) {
    await expect(this.errorMessageLockedUser).toBeVisible();
    await expect(this.errorMessageLockedUser).toHaveText(expectedText);
  }

  async assertLogoutSuccess() {
    const loginButton = this.page.locator(loginPage.loginButton);
    await expect(loginButton).toBeVisible();
  }
}
