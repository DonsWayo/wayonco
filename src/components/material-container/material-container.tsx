import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-material-container',
  styleUrl: 'material-container.scss',
  shadow: true
})
export class MaterialContainer {

  render() {
    return (
      <div class="wrapper">
  <div class="head-bg"></div>
  <div class="content">
    <div class="card">
      <div class="card-head"></div>
      <div class="main-container">
        <div class="title">Material Container</div>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita distinctio, voluptatum animi explicabo ullam adipisci, id in qui voluptatem eius nam neque mollitia fugiat. Ut, cum quas sunt molestias.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate voluptas dolorum voluptate atque optio tenetur aperiam iusto impedit nemo, quo expedita, natus, ratione nam ipsa! Numquam ipsum ab quibusdam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum corporis quos perferendis assumenda provident suscipit! Blanditiis quos provident accusantium beatae iusto similique, iste corporis modi optio possimus enim? Placeat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita distinctio, voluptatum animi explicabo ullam adipisci, id in qui voluptatem eius nam neque mollitia fugiat. Ut, cum quas sunt molestias.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate voluptas dolorum voluptate atque optio tenetur aperiam iusto impedit nemo, quo expedita, natus, ratione nam ipsa! Numquam ipsum ab quibusdam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ipsum corporis quos perferendis assumenda provident suscipit! Blanditiis quos provident accusantium beatae iusto similique, iste corporis modi optio possimus enim? Placeat.</p>
      </div>
    </div>
  </div>
</div>
    );
  }

}
