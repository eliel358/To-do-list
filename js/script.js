var tasks = JSON.parse(localStorage.getItem('tasks'))
if(tasks == null){
    localStorage.setItem("tasks",JSON.stringify([]))
    var tasks = JSON.parse(localStorage.getItem('tasks'))
}
console.log(tasks)
class task{
    constructor(task_name){
        
        this.task_name = task_name
        this.task = document.createElement('div')
        this.task.className = "task"
        
        this.task_p = document.createElement('p')
        this.task_p.innerHTML = this.task_name
        this.task.appendChild(this.task_p) 
        
        this.task_button = document.createElement('button')
        this.task_button.innerHTML = "Remover"
        this.task_button.onclick = this.delete_task
        this.task.appendChild(this.task_button)
        
        this.task.appendChild(this.task_button)
        
        document.getElementById("tasks-conteiner").appendChild(this.task)
    } 
    delete_task = () => {
        this.task.remove()
        var tasks = JSON.parse(localStorage.getItem('tasks'))
        var index = tasks.indexOf(this.task_name)
        tasks.splice(index,1)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
}

document.getElementById("insert-button").addEventListener('click',function(){
    new_task = new task(document.getElementById('input-task-name').value)
    var tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.push(new_task.task_name)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    document.getElementById('input-task-name').value = ''
})

document.addEventListener('keydown',function(event){
    if(event.key == "Enter"){
        new_task = new task(document.getElementById('input-task-name').value)
        var tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(new_task.task_name)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
})

update = () =>{ 
    var tasks = JSON.parse(localStorage.getItem('tasks'))
    for(i in tasks){
        new_task = new task(tasks[i])
    }
}
update()