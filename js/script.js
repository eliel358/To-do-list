task_list = []

function create_task(name){
    const new_task = document.createElement('div')
    const text = document.createElement('div')
    const buttons = document.createElement('div')
    const bt_check = document.createElement('div')
    const bt_not_check = document.createElement('div')
    const bt_progress = document.createElement('div')
    const bt_remove = document.createElement('div')
    var tasks = document.getElementById('tasks')
    var task_name = name

    tasks.appendChild(new_task)
    new_task.appendChild(text)
    new_task.appendChild(buttons)
    buttons.appendChild(bt_progress)
    buttons.appendChild(bt_check)
    buttons.appendChild(bt_not_check)
    buttons.appendChild(bt_remove)    

    text.className = 'text'
    buttons.className = 'buttons'
    new_task.className = 'task'
    bt_check.className = 'button'
    bt_not_check.className = 'button'
    bt_progress.className = 'button'
    bt_remove.className = 'button'

    text.id = task_name
    text.innerHTML = task_name
    bt_check.innerHTML = '✅'
    bt_not_check.innerHTML = '❌'
    bt_progress.innerHTML = '⌛'
    bt_remove.innerHTML = '⛔'
   
    bt_progress.setAttribute('onclick',"progress('"+task_name+"')")
    bt_check.setAttribute('onclick',"check('"+task_name+"')")
    bt_not_check.setAttribute('onclick',"no_check('"+task_name+"')")
    bt_remove.setAttribute('onclick',"rm('"+task_name+"')")
    new_task.id = task_name
 
    task_list = task_list.concat(task_name)
    localStorage.setItem('tasks',JSON.stringify(task_list))
}

function rm(task_name){ 
    document.getElementById('tasks').removeChild(document.getElementById(task_name))
    task_list = localStorage.getItem('tasks')
    task_list = JSON.parse(task_list)
    target_index = task_list.indexOf(task_name)
    task_list.splice(target_index,1)
    localStorage.setItem('tasks',JSON.stringify(task_list))
}

function no_check(task_name){
    text = document.getElementById(task_name).innerHTML
    if(text.includes('-Em progresso-')){
        text = text.slice(14)
    }
    else if(text.includes('-Concluida-')){
        text = text.slice(11)
    }
    else if(text.includes('-Não concluida-')){
        text = text.slice(15)
    }
    document.getElementById(task_name).innerHTML = '-Não concluida-'+text
}
function check(task_name){
    text = document.getElementById(task_name).innerHTML
    if(text.includes('-Em progresso-')){
        text = text.slice(14)
    }
    else if(text.includes('-Concluida-')){
        text = text.slice(11)
    }
    else if(text.includes('-Não concluida-')){
        text = text.slice(15)
    }
    document.getElementById(task_name).innerHTML = '-Concluida-'+text

}
function progress(task_name){
    text = document.getElementById(task_name).innerHTML
    if(text.includes('-Em progresso-')){
        text = text.slice(14)
    }
    else if(text.includes('-Concluida-')){
        text = text.slice(11)
    }
    else if(text.includes('-Não concluida-')){
        text = text.slice(15)
    }
    document.getElementById(task_name).innerHTML = '-Em progresso-'+text
}
document.addEventListener('keypress',(event) => {
    
    if (event.code == 'Enter'){
        create_task(document.querySelector('input').value)
    }

})
task_l = localStorage.getItem('tasks')
task_l = JSON.parse(task_l)

task_l.forEach(task => {
    create_task(task)
});
