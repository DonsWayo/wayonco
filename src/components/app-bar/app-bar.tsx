import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-app-bar',
  styleUrl: 'app-bar.scss',
  shadow: true
})
export class AppBar {

  render() {
    return (
      <div class="header shadow">
        <slot></slot>
      </div>
    );
  }

}
