function create_task(){
    const taskn = document.createElement("div");
    const button = document.createElement("button");
    task_name = document.querySelector('input').value
    task_name = '-'+task_name
    if (task_name == ""){
        return;
    }
    taskn.innerHTML = task_name
    button.textContent = '❌'

    taskn.className = 'task';
    button.className = 'button';
    taskn.id = task_name
    
    taskn.appendChild(button)
    document.getElementById('tasks').appendChild(taskn)
    
    
    button.setAttribute('onclick',"rm('"+task_name+"')")
    console.log(task_name)
}



function rm(task_name){
    console.log(task_name)
    console.log(tasks)
    document.getElementById('tasks').removeChild(document.getElementById(task_name))
}


document.addEventListener('keypress',(event) => {
    
    if (event.code == 'Enter'){
        create_task()
    }

})