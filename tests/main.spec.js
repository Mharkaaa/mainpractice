// @ts-check

import { test, expect, expectedTitle } from '@playwright/test';

test('testmain', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);


  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Wait for the 'Sauce Labs Backpack' link to be visible before clicking
  const backpackLink = await page.locator('text=Sauce Labs Backpack');
  await backpackLink.waitFor({ state: 'visible' });

  // Click the 'Sauce Labs Backpack' link after confirming visibility
  await backpackLink.click();

  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="back-to-products"]').click();


     // Ensure dropdown is in the DOM and visible before interacting
  const dropdown = page.locator('[aria-label="Choose a Name (A to Z)"]');
  
  // Wait for the dropdown to be visible before interacting
  await dropdown.waitFor({ state: 'attached' }); // Ensures it's in the DOM first
  await dropdown.waitFor({ state: 'visible' }); // Wait for it to be visible
  
  // Select the 'Price (low to high)' option
  await dropdown.selectOption({ label: 'Price (low to high)' });

});


