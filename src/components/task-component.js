import {createElement} from '../render.js';
import { StatusLabel } from '../const.js';
import { AbstractComponent } from "./AbstractComponent.js";

function createComponentTemplate(status) {
    return (
        `<div class="state state-${status}">
            <div>
                <h1>${StatusLabel[status]}</h1>
            </div>
        </div>`
      );
}

export class TaskComponent extends AbstractComponent{
  #status = null;
  constructor({status}){
        super();
        this.#status = status;
    }
  getTemplate() {
    return createComponentTemplate(this.#status);
  }
}
