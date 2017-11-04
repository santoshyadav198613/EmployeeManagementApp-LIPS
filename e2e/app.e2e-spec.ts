import { EmployeeManagementAppPage } from './app.po';

describe('employee-management-app App', () => {
  let page: EmployeeManagementAppPage;

  beforeEach(() => {
    page = new EmployeeManagementAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
