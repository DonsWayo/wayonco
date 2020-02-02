import { Component, h, Prop, State, JSX, Element } from '@stencil/core';

@Component({
  tag: 'w-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  @Prop() type: 'basic' | 'raised' | 'outline' | 'flat' = 'basic'
  @Prop() color: 'plain' | 'primary' | 'secondary' | 'danger' = 'plain'

  @State() ripples: JSX.Element[] = []

  @Element() wButton: HTMLElement

  handleClick = (event) => {
    let { offsetLeft, offsetTop, offsetWidth, offsetHeight } = this.wButton;

    let rippleSize;
    if (offsetWidth > offsetHeight) {
      rippleSize = offsetWidth;
    } else {
      rippleSize = offsetHeight;
    }

    const rippleX = event.pageX - offsetLeft - rippleSize / 2;
    const rippleY = event.pageY - offsetTop - rippleSize / 2;

    const rippleStyles = {
      width: rippleSize + 'px',
      height: rippleSize + 'px',
      top: rippleY + 'px',
      left: rippleX + 'px'
    }

    this.ripples = [...this.ripples, (<span class="ripple" style={rippleStyles} />)]
  }

  render() {
    return (
      <button class={`${this.type} ${this.color}`} onMouseDown={this.handleClick}>
        {...this.ripples}
        <slot />
      </button>
    );
  }

}
