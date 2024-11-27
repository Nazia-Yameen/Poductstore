import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByLabel('Total:').click();
  await page.getByLabel('Total:').fill('kinj');
  await page.getByLabel('Country:').click();
  await page.getByLabel('Country:').fill('germany');
  await page.getByLabel('City:').click();
  await page.getByLabel('City:').fill('she');
  await page.getByLabel('Credit card:').click();
  await page.getByLabel('Credit card:').fill('65554343232');
  await page.getByLabel('Month:').click();
  await page.getByLabel('Month:').fill('january');
  await page.getByLabel('Year:').click();
  await page.getByLabel('Year:').fill('2025');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});