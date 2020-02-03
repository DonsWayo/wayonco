import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {

  render() {
    return (
      <input class="input" type="text" name="email" placeholder="Email" />
    );
  }

}
