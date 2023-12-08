import {createElement} from '../render.js';
import { AbstractComponent } from "./AbstractComponent.js";

function createComponentTemplate(status, title) {
    return(
        `<p>${
            title
        }
        </p>`
    );
}
export class TaskListComponent extends AbstractComponent{
    #id = null;
    #status = null;
    #title = null;
    constructor({id, title, status}){
        super();
        this.#id = id;
        this.#status = status;
        this.#title = title;
        console.log(id, title, status);
    }
    getTemplate() {
        return createComponentTemplate(this.#status,this.#title)
    }
}
