import { newE2EPage } from '@stencil/core/testing';

describe('w-app-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-app-bar></w-app-bar>');

    const element = await page.find('w-app-bar');
    expect(element).toHaveClass('hydrated');
  });
});
