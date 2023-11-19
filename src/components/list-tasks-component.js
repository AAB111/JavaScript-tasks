import {createElement} from '../render.js';


function createComponentTemplate(liElements) {
    return(
        `<ul>${
            liElements.join('\n')
        }
        </ul>`
    );
}
export class ListTaskComponent {
    constructor(listTasks){
        this.listTasks = listTasks;
    }
    getTemplate() {
        return createComponentTemplate(this.listTasks)
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
