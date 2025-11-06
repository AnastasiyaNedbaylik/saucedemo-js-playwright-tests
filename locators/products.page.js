export const productsPage = {
  //header
  cartBadge: '.shopping_cart_badge',
  burgerMenuButton:
    'xpath=/html/body/div/div/div/div[1]/div[1]/div[1]/div/div[1]/div',
  logoutLink: '[data-test="logout-sidebar-link"]',
  // Products
  inventoryList: '[data-test="inventory-list"]',
  inventoryItem: '[data-test="inventory-item"]',
  addToCartButton: '[data-test^="add-to-cart"]',
  removeButton: 'button:has-text("Remove")',
  //filter
  sortSelect: '[data-test="product-sort-container"]',
  productPrices: '[data-test="inventory-item-price"]',
  productNames: '[data-test="inventory-item-name"]',
};
