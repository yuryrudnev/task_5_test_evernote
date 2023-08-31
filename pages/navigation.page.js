exports.NavigationPage = class NavigationPage {

    constructor(page) {
  
    this.page = page;
    this.profileIcon = page.locator("img[class='GJ1NOG4CNP']");
    this.logoutBtn = page.getByText("Log out");
    this.addNoteBtn = page.locator('#gwt-debug-Sidebar-newNoteButton-container img[class="GJ1NOG4CCR"]');
    }

    async logout(){
        await this.profileIcon.click()
        await this.logoutBtn.click()
    }

}