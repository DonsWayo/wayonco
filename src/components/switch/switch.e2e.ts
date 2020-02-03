import { newE2EPage } from '@stencil/core/testing';

describe('w-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-switch></w-switch>');

    const element = await page.find('w-switch');
    expect(element).toHaveClass('hydrated');
  });
});
