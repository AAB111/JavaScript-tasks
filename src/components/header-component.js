import {createElement} from '../render.js';
import { AbstractComponent } from "./AbstractComponent.js";

function createComponentTemplate() {
    return (
        `<header class="container">
            <h1>Список задач</h1>
        </header>`
      );
}


export class HeaderComponent extends AbstractComponent{
  getTemplate() {
    return createComponentTemplate();
  }
}
