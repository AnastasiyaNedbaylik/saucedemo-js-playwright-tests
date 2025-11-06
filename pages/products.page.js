import { expect } from '@playwright/test';
import { productsPage } from '../locators/products.page.js';

export class ProductsPage {
  constructor(page) {
    this.page = page;
    //header
    this.cartBadge = page.locator(productsPage.cartBadge);
    //filter
    this.sortSelect = page.locator(productsPage.sortSelect);
    this.productPrices = page.locator(productsPage.productPrices);
    this.productNames = page.locator(productsPage.productNames);
    //products
    this.inventoryItems = page.locator(productsPage.inventoryItem);
  }

  async addFirstProductToCart() {
    const firstProduct = this.inventoryItems.first();
    await firstProduct.locator(productsPage.addToCartButton).click();
  }

  async assertFirstProductAdded() {
    const firstProduct = this.inventoryItems.first();
    await expect(firstProduct.locator(productsPage.removeButton)).toBeVisible();
    await expect(this.cartBadge).toHaveText('1');
  }

  // filter
  async selectSortOption(optionValue) {
    await this.sortSelect.selectOption(optionValue);
  }

  async getProductPrices() {
    const prices = await this.productPrices.allTextContents();
    return prices.map((price) => parseFloat(price.replace('$', '').trim()));
  }

  async getProductNames() {
    const names = await this.productNames.allTextContents();
    return names.map((n) => n.trim());
  }

  async assertPricesSortedAscending() {
    const prices = await this.getProductPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  }

  async assertPricesSortedDescending() {
    const prices = await this.getProductPrices();
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  }

  async assertNamesSortedAZ() {
    const names = await this.getProductNames();
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);
  }

  async assertNamesSortedZA() {
    const names = await this.getProductNames();
    const sorted = [...names].sort((a, b) => b.localeCompare(a));
    expect(names).toEqual(sorted);
  }
}
