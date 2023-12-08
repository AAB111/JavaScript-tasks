import {createElement} from '../render.js';
import { AbstractComponent } from "./AbstractComponent.js";

function createComponentTemplate() {
    return (
        `<section class="tasks container">
        </section>`
      );
}


export class AreaTasksComponent extends AbstractComponent{
  getTemplate() {
    return createComponentTemplate();
  }
}
