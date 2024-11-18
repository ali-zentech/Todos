const items = document.getElementById('todo');
const addBtn = document.getElementById('addbtn');
const delBtn = document.getElementById('delbtn');
const taskAdd = document.getElementById('task')
const taskId = document.getElementById('taskId')
const editBtn = document.getElementById('editbtn');
const markComp = document.getElementById('markCompletebtn')

addBtn.addEventListener('click', function() {
    // Create a new list item element

    if(taskAdd.value != ''){
    const  list = document.createElement("li");
    list.innerText = task.value;
    list.classList.add('list')
  
    // Append the new list item to the items list
     items.appendChild(list);

     taskAdd.value ="";
    }
    
  });

  delBtn.addEventListener('click', function() {
    const del_id = taskId.value
    if(del_id){
        const li = document.getElementsByClassName('list')[del_id - 1]; 
        items.removeChild(li);
    }
    
  });
  
  
  editBtn.addEventListener('click', function() {
    const del_id = taskId.value
     
    if(del_id){
        const li = document.getElementsByClassName('list')[del_id - 1]; 
        items.removeChild(li);
        taskAdd.value = li.innerText;
    }
  })

  markComp.addEventListener('click', function() {
    const cross = taskId.value 
    if(cross){
        const li = document.getElementsByClassName('list')[cross - 1]; 
        li.innerHTML = li.innerText.strike(); 
    }
  })