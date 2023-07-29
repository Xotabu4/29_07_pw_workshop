import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.locator('div').filter({ hasText: /^test$/ }).nth(1).click();
  await page.getByRole('menuitem', { name: 'test' }).click();
  await page.getByRole('link', { name: 'test By test test $100' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Proceed To Checkout' }).click();
  await page.getByRole('button', { name: 'Create an account' }).click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(`test+${Date.now()}@test.com`);
  await page.getByPlaceholder('Please Enter Your First Name').click();
  await page.getByPlaceholder('Please Enter Your First Name').fill('test');
  await page.getByPlaceholder('Please Enter Your First Name').press('Tab');
  await page.getByPlaceholder('Please Enter Your Last Name').fill('test');
  await page.getByPlaceholder('Please Enter Your Last Name').press('Tab');
  await page.getByPlaceholder('Please Enter Your Password').fill('123456');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByRole('button', { name: 'your cart have 1 items' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.locator('a.order-label').click();
});

