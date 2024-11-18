import readline from 'readline'; 
import fs from 'fs'; 
const path = './src/todos.json'

const read = readline.createInterface({
  input: process.stdin,  
  output: process.stdout
})

export default function mainMenu() {
  console.log('\nTo-Do List Application');
  console.log('1. View To-Do');
  console.log('2. Add To-Do');
  console.log('3. Delete To-Do');
  console.log('4. Mark To-Do as Complete');
  console.log('5. Edit To-Do');
  console.log('6. Exit');

  read.question("Provide index to continue: ", (choice) => {
    switch (choice){
      case '1':
        displayTodo()
        break;
      case '2':
        addTodo()
        break;
      case '3':
        deleteTodo();
        break;
      case '4':
        markTodo();
        break;
      case '5':
        editTodo();
        break;
      case '6':
        read.close();
        break;
      default:
        console.log('Invalid option.');
        mainMenu();
        break;
    }
  })
}

function loadTodo(){
  try{
    const data = fs.readFileSync(path, 'utf8')
    return JSON.parse(data); 
  } catch(Error){
    console.log(Error)
    return []
  } 
}

function displayTodo(){
  const data = loadTodo(); 
  if(data.length == 0){
    console.log('no data to show: '); 
  } else {
    data.forEach((todo, index) => {
      const status = todo.completed ? '--Completed' : '';
      console.log(`${index + 1}. ${todo.task} ${status}`);
    })
  }
  mainMenu();
}

function addTodo() {
  read.question("Enter task: ", (task)=> {
    const todos = loadTodo(); 
    todos.push({task, completed: false})
    fs.writeFileSync(path, JSON.stringify(todos,null, 2));
    console.log("task added successful. ")
    mainMenu();
  })
}

function deleteTodo() {
  read.question("Enter task ID: ", (task)=> {
    let id = parseInt(task) -1;
    const data = loadTodo(); 
    if (id >= 0 && id < data.length) {
      data.splice(id, 1);
      fs.writeFileSync(path, JSON.stringify(data, null, 2));
    } else {
      console.log('Not found.');
    }
    console.log("task deleted successful. ")
    mainMenu();
  })
}

function editTodo() {
  read.question("Enter task ID: ", (task)=> {
    let id = parseInt(task) -1;
    const data = loadTodo(); 

    if (id>=0 && id<data.length) {
       read.question("Edit 1.task or 2.status?: ", (choice1)=> {
        console.log("choice1", choice1)
        switch(choice1){
          case '1':
            read.question("Enter new task details: ", (task)=> {
              data[id].task = task
              fs.writeFileSync(path, JSON.stringify(data, null, 2));
            })
            exit = true;
            break; 
          case '2':
              data[id].completed = !data[id].completed
              fs.writeFileSync(path, JSON.stringify(data, null, 2));
            break;
          default:
            console.log("Not found! ") 
            break;
        }
        
        console.log("task edited successful. ")
        mainMenu();
      })
    } else {
      console.log('Not found.');
      mainMenu(1)
    }
  })
}

function markTodo() {
  read.question("Enter task ID: ", (task)=> {
    let id = parseInt(task) -1;
    const data = loadTodo(); 
    if (id >= 0 && id < data.length) {
        data[id].completed = true
        fs.writeFileSync(path, JSON.stringify(data, null, 2));
    } else {
      console.log('Not found.');
    }
    console.log("task edited successful. ")
    mainMenu();
  })
}
