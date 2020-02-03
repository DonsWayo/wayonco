import { newE2EPage } from '@stencil/core/testing';

describe('w-simple-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-simple-card></w-simple-card>');

    const element = await page.find('w-simple-card');
    expect(element).toHaveClass('hydrated');
  });
});
