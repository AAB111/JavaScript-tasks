import { StatusLabel,Status } from '../const.js';
import { render } from '../render.js';
import { AbstractComponent } from "./AbstractComponent.js";
import { TaskListComponent } from './list-tasks-component.js';
import { CardStubComponent } from './task-stub-card-component.js';
import { ClearBtn } from './clearBtn-component.js';

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
  #taskService=null;
  #tasks= null;

  constructor({status},taskService){
        super();
        this.#status = status;
        this.#taskService=taskService;
        this.#tasks = taskService.getTasksByStatus(status);
        window.addEventListener("create-task", ()=> this.#reRenderTasks(this.#status,  this.#taskService));
    }

  getTemplate() {
    return createComponentTemplate(this.#status);
  }
  #reRenderTasks(status, taskService){
    this.#tasks = this.#taskService.getTasksByStatus(this.#status);
    this.#removeTasks();
    let disabledBtn=false;
    if (this.#taskService.getTasks().length < 1)
        disabledBtn = true;
    if ( this.#tasks.length < 1){
        render(new CardStubComponent(),this.getElement());
    }
    this.#tasks.forEach(task => {
        const taskComponent = new TaskListComponent({ _id: task._id, description: task.description, status: task.status });
        render(taskComponent, this.getElement());
    });
    if (status === Status.BASKET){
        render(new ClearBtn(taskService, disabledBtn), this.getElement());
    }
}

#removeTasks() {
    const childElements = Array.from(this.getElement().children);
    childElements.forEach(childElement => {
        if (!childElement.matches('div')) {
            childElement.remove();
        }
    });
}
}
