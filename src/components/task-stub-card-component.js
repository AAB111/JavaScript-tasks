import { createElement } from "../render.js";
import { AbstractComponent } from "./AbstractComponent.js";

function createCardStubComponent() {
    return(
        `<p class="taskCardElement cardStub">Перетащите карточку</p>`
    );
}

export class CardStubComponent extends AbstractComponent{

    getTemplate() {
        return createCardStubComponent();
    }
}