import {createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';


function createComponentTemplate() 
{
    return (
        `
        <section class="addBlock container">
            <div class="innerBlock">
                <h1 class="title-add">Новая задача</h1>
                <form class="formAdd">
                    <input type="text" class="form-control" id="inputTask" placeholder="Название задачи...">
                    <button type="submit">Добавить</button>
                </form>
            </div>
        </section>
        `
      );
}


export class FormAddTaskComponent extends AbstractComponent{
  #taskService = null;

  constructor(taskService){
        super();
        this.#taskService = taskService;
        this.getElement().querySelector('.formAdd').addEventListener(`submit`, this.formSubmitHandler.bind(this));
    }
  getTemplate() {
    return createComponentTemplate();
  }
  formSubmitHandler(evt) {
      evt.preventDefault();
      const inputElement = this.getElement().querySelector(`#inputTask`);
      const description = inputElement.value.trim();
      this.#taskService.create({ description });
      inputElement.value = ``;
  }
}
