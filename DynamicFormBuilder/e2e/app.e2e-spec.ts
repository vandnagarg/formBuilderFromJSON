import { DynamicFormBuilderPage } from './app.po';

describe('dynamic-form-builder App', function() {
  let page: DynamicFormBuilderPage;

  beforeEach(() => {
    page = new DynamicFormBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
