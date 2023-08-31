// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test.describe('Login tests', async () => {
let loginPage;

test.beforeEach(async ({page, baseURL}) => {
  loginPage = new LoginPage(page);
    await loginPage.open();
      });

test('Login with invalid username', async ({ page }) => {
  page.waitForTimeout(5000)
  await loginPage.loginLink.click();
  page.waitForTimeout(5000)
  await loginPage.loginFill('hore@dd.ff');
  page.waitForTimeout(5000)
  await loginPage.errorMessage.waitFor({ state: 'visible' });
  await expect(loginPage.errorMessage).toHaveText('There is no account for the username or email you entered.');

});

test('Login with valid username', async ({ page }) => {

  await loginPage.loginLink.click();
  page.waitForTimeout(5000)
  await loginPage.loginFill('hombreamok@gmail.com');
  page.waitForTimeout(5000)
  await loginPage.password.click();
  page.waitForTimeout(5000)
  await loginPage.password.fill('Qwerty1!');
  page.waitForTimeout(5000)
  await loginPage.singInBtn.click();
  await expect(loginPage.notesHeader).toHaveText('Notes')

});



});







