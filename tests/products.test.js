import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { ProductsPage } from '../pages/products.page.js';
import { users } from '../utilities/data.js';
import { PRODUCTS_PAGE } from '../configs.js';

test.describe('Products page tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(
      users.standard_user.username,
      users.standard_user.password
    );
    await expect(page).toHaveURL(PRODUCTS_PAGE);
  });

  test('Adding first product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.addFirstProductToCart();
    await productsPage.assertFirstProductAdded();
  });

  test('Sorting products by price (low → high)', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.selectSortOption('lohi');
    await productsPage.assertPricesSortedAscending();
  });

  test('Sorting products by price (high → low)', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.selectSortOption('hilo');
    await productsPage.assertPricesSortedDescending();
  });

  test('Sortinf products by name (A → Z)', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.selectSortOption('az');
    await productsPage.assertNamesSortedAZ();
  });

  test('Soting products by name (Z → A)', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.selectSortOption('za');
    await productsPage.assertNamesSortedZA();
  });
});
