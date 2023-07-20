
function create_task(){
    const taskn = document.createElement("div");
    const button = document.createElement("button");
    task_name = document.querySelector('input').value
    taskn.innerHTML = task_name
    button.textContent = '❌'

    taskn.className = 'task';
    button.className = 'button';
    taskn.id = task_name
    
    taskn.appendChild(button)
    
    document.getElementById('tasks').appendChild(taskn)
    button.onclick = function(){
        document.getElementById('tasks').removeChild(taskn)
    }
}
