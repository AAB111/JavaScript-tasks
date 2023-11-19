import {createElement} from '../render.js';


function createComponentTemplate(title,index) {
    return (
        `<div class="state state-${index}">
            <div>
                <h1>${title}</h1>
            </div>
        </div>`
      );
}

export class TaskComponent {
    constructor(title,index){
        this.title = title
        this.index = index
    }
  getTemplate() {
    return createComponentTemplate(this.title,this.index);
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
