import {createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';


function createComponentTemplate() {
    return (
        `
        <section class="addBlock container">
            <div class="innerBlock">
                <h1 class="title-add">Новая задача</h1>
                <form class="formAdd">
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Название задачи...">
                    <button type="submit">Добавить</button>
                </form>
            </div>
        </section>
        `
      );
}


export class FormAddTaskComponent extends AbstractComponent{
  getTemplate() {
    return createComponentTemplate();
  }
}
