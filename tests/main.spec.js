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


})


