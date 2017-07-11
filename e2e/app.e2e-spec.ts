import { CursoAppPage } from './app.po';

describe('curso-app App', () => {
  let page: CursoAppPage;

  beforeEach(() => {
    page = new CursoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
