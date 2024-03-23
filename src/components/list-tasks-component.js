import {createElement} from '../render.js';
import { AbstractComponent } from "./AbstractComponent.js";

function createComponentTemplate(status, description) {
    return(
        `<p>${
            description
        }
        </p>`
    );
}
export class TaskListComponent extends AbstractComponent{
    #id = null;
    #status = null;
    #description = null;
    constructor({_id, description, status}){
        super();
        this.#id = _id;
        this.#status = status;
        this.#description = description;
    }
    getTemplate() {
        return createComponentTemplate(this.#status,this.#description)
    }
}
