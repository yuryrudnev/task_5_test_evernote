// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { NotePage } = require('../pages/notes.page');
const { NavigationPage } = require('../pages/navigation.page')


test.describe('Login tests', async () => {
  let loginPage;
  let notePage;
  let navigationPage;
  let currentTime = Math.floor(Math.random() * 1000000000);
  let noteTitle = `Test ${currentTime}`

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    notePage = new NotePage(page);
    navigationPage = new NavigationPage(page);
    await loginPage.open();
    await loginPage.loginLink.click();
    await loginPage.loginFill('hombreamok@gmail.com');
    await loginPage.password.click();
    await loginPage.password.fill('Qwerty1!');
    await loginPage.singInBtn.click();
});


test('Create a note and log out', async ({  }) => {
    await navigationPage.addNoteBtn.waitFor({ state: 'visible' });
    await navigationPage.addNoteBtn.click()
    await notePage.textTitleNote.waitFor({ state: 'visible' });
    await notePage.noteFill(noteTitle);
    await navigationPage.logout()
    await expect(loginPage.userName).toBeVisible()
});

test('User can login and see the note previously created', async ({ page }) => {
    await navigationPage.addNoteBtn.waitFor({ state: 'visible' });
    await expect(page.locator("div[class='focus-NotesView-Note-noteTitle qa-title']").first()).toHaveText(noteTitle)
  });
});