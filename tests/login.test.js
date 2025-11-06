import { expect } from '@playwright/test';
import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { users } from '../utilities/data.js';
import { loginErrors } from '../utilities/messages.js';
import { BASE_URL } from '../configs.js';

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(
    users.standard_user.username,
    users.standard_user.password
  );
  await loginPage.assertLoginSuccess();
});

test('Locked out user cannot log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(
    users.locked_out_user.username,
    users.locked_out_user.password
  );
  await loginPage.assertLoginError(loginErrors.lockedOutUser);
});

test('Login error when credentials are not entered', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openLoginPage();
  await expect(page).toHaveURL(BASE_URL);
  await loginPage.loginButton.click();
  await loginPage.assertLoginError(loginErrors.emptyFields);
  await expect(page).toHaveURL(BASE_URL);
});
