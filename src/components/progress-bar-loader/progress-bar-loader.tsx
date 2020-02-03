import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-progress-bar-loader',
  styleUrl: 'progress-bar-loader.scss',
  shadow: true
})
export class ProgressBarLoader {

  render() {
    return (
      <header>
        <div aria-busy="true" aria-label="Loading, please wait." role="progressbar"></div>
      </header>

    );
  }

}
