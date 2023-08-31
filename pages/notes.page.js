exports.NotePage = class NotePage {

  constructor(page) {

    this.page = page;
    this.textTitleNote = page.locator('#gwt-debug-NoteTitleView-textBox');
    this.doneBtn = page.getByRole('button', { name: 'Done' });

  }

    async noteFill(noteTitle) {
      await this.textTitleNote.fill(noteTitle);
      await this.page.keyboard.press('Enter')
      await this.doneBtn.click();
    }


}