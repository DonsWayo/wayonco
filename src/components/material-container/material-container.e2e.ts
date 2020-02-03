import { newE2EPage } from '@stencil/core/testing';

describe('w-material-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-material-container></w-material-container>');

    const element = await page.find('w-material-container');
    expect(element).toHaveClass('hydrated');
  });
});
