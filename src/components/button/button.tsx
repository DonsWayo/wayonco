import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'w-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  @Prop() type: 'basic' | 'raised' | 'outline' | 'flat' = 'basic'
  @Prop() color: 'plain' | 'primary' | 'secondary' | 'danger' = 'plain'
 

  render() {
    return (
      <button class={`${this.type} ${this.color}`}>
        <slot></slot>
      </button>
    );
  }

}
