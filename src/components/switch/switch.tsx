import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "w-switch",
  styleUrl: "switch.scss",
  shadow: true
})

export class Switch {

  @Prop() isCheked: boolean = false;

  render() {
    return (
      <label class="label toggle">
        <input type="checkbox" class="toggle_input" checked={this.isCheked} onChange={(event: UIEvent) => this.inputChanged(event)}/>
        <div class="toggle-control"></div>
      </label>
    );
  }

  inputChanged (event) {
    console.log('input changed:', event.target.checked)
  }
}
