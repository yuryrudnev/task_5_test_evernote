const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Log In', exact: true });
    this.userName = page.getByPlaceholder('Email address or username');
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
    this.errorMessage = page.locator('#responseMessage');
    this.password = page.getByPlaceholder('Password');
    this.singInBtn = page.getByRole('button', { name: 'Sign in' });
    this.notesHeader = page.locator('#gwt-debug-NotesHeader-title');

  }

  async open() {
    await this.page.goto('https://evernote.com/');
  }

  async loginFill(username) {
    await this.userName.fill(username);
    await this.continueBtn.click();
  }
};