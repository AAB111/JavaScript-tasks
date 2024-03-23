import { createElement } from "../render.js";
import { AbstractComponent } from "./AbstractComponent.js";

function createClearBtnComponent() {
    return(
        `<button class="clearButton">Очистить</button>`
    );
}

export class ClearBtn extends AbstractComponent {
    #taskService = null;
    #disabled = null;

    constructor(taskService, disabled = false) {
        super();
        this.#taskService = taskService;
        this.#disabled = disabled;
        this.getElement().addEventListener("click", this.buttonClickHandler.bind(this));
    }
    getTemplate() {
        return createClearBtnComponent();
    }
    buttonClickHandler(evt) {
        evt.preventDefault();
        this.#taskService.deleteByStatus('basket');
        window.dispatchEvent(new CustomEvent("create-task"));
    }
}