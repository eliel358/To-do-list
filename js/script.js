class task{
    constructor(task_name){
        this.task_name = task_name
        this.task = document.createElement('div')
        this.task_p = document.createElement('p')
        this.task_button = document.createElement('button')
        this.task.className = "task"
        this.task_p.innerHTML = this.task_name
        this.task_button.innerHTML = "Feito"
        this.task.appendChild(this.task_p) 
        this.task.appendChild(this.task_button)
        document.getElementById("tasks-conteiner").appendChild(this.task)

        
    } 
    delete_task = () => {
        this.task.remove()
    }
}
document.getElementById("insert-button").addEventListener('click',function(){
    new_task = new task(document.getElementById('input-task-name').value)
    new_task.task_button.addEventListener('click',function(){new_task.delete_task()})
})