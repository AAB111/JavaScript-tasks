import {createElement} from '../render.js';


function createComponentTemplate() {
    return (
        `<header class="container">
            <h1>Список задач</h1>
        </header>`
      );
}


export class HeaderComponent {
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
