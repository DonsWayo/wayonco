import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "w-simple-card",
  styleUrl: "simple-card.scss",
  shadow: true
})
export class SimpleCard {

  @Prop() image: string = 'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80';
  @Prop() title: string = 'title';
  @Prop() description: string = 'description';
  @Prop() width: string = '350px';

  render() {
    return (
      <div class="card"  style={{width: this.width}}>
        <img  class="card-image" src={this.image}/>
        <div class="container">
          <h4>
            <b>{this.title}</b>
          </h4>
            <p>{this.description}</p>
        </div>
      </div>
    );
  }
}
