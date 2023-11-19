import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/add-task-component.js';
import { AreaTasksComponent } from './components/area-tasks-component.js';
import {render, RenderPosition} from './render.js';
import { TaskComponent } from './components/task-component.js';
import { ListTaskComponent } from './components/list-tasks-component.js';


const tasks = [new TaskComponent("Бэклог",1),new TaskComponent("В процессе",2),new TaskComponent("Готово",3),new TaskComponent("Корзина",4)]

const bodyContainer= document.querySelector('.body');
const mainContainer = document.querySelector('.main');
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), mainContainer);
render(new AreaTasksComponent(), mainContainer);

const areaTasksContainer = document.querySelector('.tasks')
tasks.forEach((task) => {
    render(task,areaTasksContainer)
})

const listTasks = [new ListTaskComponent([`<li>Выучить JS</li>`,`<li>Выучить React</li>`,`<li>Сделать домашку</li>`]),new ListTaskComponent([`<li>Выпить смузи</li>`,`<li>Попить воды</li>`]),new ListTaskComponent([`<li>Позвонить маме</li>`,`<li>Погладить кота</li>`]),new ListTaskComponent([`<li>Сходить погулять</li>`,`<li>Прочитать Войну и Мир</li>`,`<button>Очистить</button>`])]
const tasksElements =  document.querySelectorAll('.state')
listTasks.forEach((list,index)=>{
    render(list,tasksElements[index])
})

