import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/add-task-component.js';
import { AreaTasksComponent } from './components/area-tasks-component.js';
import {render, RenderPosition} from './render.js';
import { TaskComponent } from './components/task-component.js';
import { TaskListComponent } from './components/list-tasks-component.js';
import { ClearBtn } from './components/clearBtn-component.js';
import { StatusLabel,Status } from './const.js';
import { TasksService } from './TaskService.js';
import { tasks } from './mock/task.js';
import { CardStubComponent } from './components/task-stub-card-component.js';

const bodyContainer= document.querySelector('.body');
const mainContainer = document.querySelector('.main');
const taskService = new TasksService();
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(taskService), mainContainer);
render(new AreaTasksComponent(), mainContainer);


function renderTask(state, container) {
    const taskComponent = new TaskComponent({ status : Status[state]},taskService);
    render(taskComponent, container,RenderPosition.BEFOREEND);
    return taskComponent;
}

function renderList(task, container) {
    const listComponent = new TaskListComponent(task);
    render(listComponent, container,RenderPosition.BEFOREEND);
    return listComponent;
}

const areaTasksContainer = document.querySelector('.tasks')
let disabledBtn=false;
if (taskService.getTasksByStatus().length < 1)
    disabledBtn = true;

function renderAllTasks(){
    Object.keys(Status).forEach(state => {
        let task = renderTask(state,areaTasksContainer)
        let tasksList = taskService.getTasksByStatus(Status[state])
        if (tasksList.length == 0){
            render(new CardStubComponent(),task.getElement())
        }
        tasksList.forEach(t=>{
            renderList(t,task.getElement())
        })
        if (state == 'BASKET'){
            render(new ClearBtn(taskService,disabledBtn),task.getElement())
        }
    });
}


renderAllTasks();