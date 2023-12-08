import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/add-task-component.js';
import { AreaTasksComponent } from './components/area-tasks-component.js';
import {render, RenderPosition} from './render.js';
import { TaskComponent } from './components/task-component.js';
import { TaskListComponent } from './components/list-tasks-component.js';
import { ClearBtn } from './components/clearBtn-component.js';
import { StatusLabel,Status } from './const.js';
import { TasksService } from './TaskService.js';
// const tasks = [new TaskComponent("Бэклог",'backlog'),
// new TaskComponent("В процессе",'process'),
// new TaskComponent("Готово",'done'),
// new TaskComponent("Корзина",'basket')]

const bodyContainer= document.querySelector('.body');
const mainContainer = document.querySelector('.main');
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), mainContainer);
render(new AreaTasksComponent(), mainContainer);

const areaTasksContainer = document.querySelector('.tasks')
// tasks.forEach((task) => {
//     render(task,areaTasksContainer)
// })

// const listTasks = [new TaskListComponent(`Выучить JS`),
// new TaskListComponent(`Выучить React`),
// new TaskListComponent(`Сделать домашку`)]
    // new ListTaskComponent([`Выпить смузи`,`Попить воды`]),
    // new ListTaskComponent([`Позвонить маме`,`Погладить кота`]),
    // new ListTaskComponent([`Сходить погулять`,`Прочитать Войну и Мир`])]
const taskService = new TasksService();
Object.keys(Status).forEach(state => {
    let task = new TaskComponent({status:Status[state]})
    render(task,areaTasksContainer);
    let tasksList = taskService.getTasksByStatus(Status[state])
    console.log(tasksList)
    tasksList.forEach(t=>{
        const taskList = new TaskListComponent({id: t.id, title: t.title, status: t.status});
        render(taskList,task.getElement());
    })
    if (state == 'BASKET'){
        render(new ClearBtn(),task.getElement())
    }
});
// listTasks.forEach((list,index)=>{
//     render(list,tasks[index])
//     if (index == 3){
//     }
// })

