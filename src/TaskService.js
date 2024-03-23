import { tasks } from "./mock/task.js";
import { Status } from "./const.js";
import { getData,sendData } from "./app.js";

export class TasksService {
    #boardTasks = [];
    
    constructor(){
        getData().then(tasks=>{
            this.#boardTasks = tasks;
            console.log(tasks)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    getTasksByStatus(status){
        const tasksStatus = this.#boardTasks.filter(function(task) {
            return task.status == status;
        });
        return (tasksStatus);
    };

    async create({description, status = Status.BACKLOG}){
        const res = await sendData(JSON.stringify({description, status}))
        console.log(res);
        this.#boardTasks.push(res);
        window.dispatchEvent(new CustomEvent("create-task"));
    };

    deleteAll(){
        this.#boardTasks.length = 0; 
    };

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
        return getData();
    }
    generateId(){
        return crypto.randomUUID();
    }
}
