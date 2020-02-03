import { newE2EPage } from '@stencil/core/testing';

describe('w-progress-bar-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-progress-bar-loader></w-progress-bar-loader>');

    const element = await page.find('w-progress-bar-loader');
    expect(element).toHaveClass('hydrated');
  });
});
