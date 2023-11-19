import {createElement} from '../render.js';


function createComponentTemplate() {
    return (
        `<section class="tasks container">
        </section>`
      );
}


export class AreaTasksComponent {
  getTemplate() {
    return createComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
