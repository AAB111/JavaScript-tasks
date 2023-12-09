import { tasks } from "./mock/task.js";
import { Status } from "./const.js";


export class TasksService {
    #boardTasks = tasks;
    
    getTasksByStatus(status){
        const tasksStatus = this.#boardTasks.filter(function(task) {
            return task.status == status;
        });
        return(tasksStatus)
    }
    create({id='', title, status = Status.BACKLOG}){
        id = this.generateId();
        this.#boardTasks.push({id, title, status});
        window.dispatchEvent(new CustomEvent("create-task"));
    }
    deleteAll(){
        this.#boardTasks.length = 0; 
    }
    deleteByStatus(status){
        const ids = []
        tasks.forEach((task)=>{
            if(task.status === Status[status]){
                ids.push(task.id);
            }
        })
        ids.forEach(id=>{
            tasks.forEach((task,index)=>{
                if(task.id === id)
                    tasks.splice(index,1);

            })
        })
    }
    getTasks(){
        return this.#boardTasks;
    }
    generateId(){
        return crypto.randomUUID();
    }
}
