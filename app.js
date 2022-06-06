//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listner
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
todoList.addEventListener('click', strikeTh);


// function
function addTodo(event){
    event.preventDefault();
 
    //div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //LI   
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //Completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add('completed-button');
    todoDiv.appendChild(completedButton);

     //Delete button
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
     deleteButton.classList.add('delete-button');
     todoDiv.appendChild(deleteButton);


    //append all to dom
    todoList.appendChild(todoDiv);

     // clear field
     todoInput.value = "";

}


  // delete
function deleteTodo(e){
    const item = e.target;

    //checks if element is trash btn
    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement;

        //animate
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
      });
    }
}

function strikeTh(e){
    const item = e.target;

    //checks if element is trash btn
    if(item.classList[0] === 'completed-button'){
        const todo = item.parentElement;

        //add strike through
        todo.classList.add("strike");
    }
}