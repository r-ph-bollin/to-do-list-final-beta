// // getting the value from the input (task)
// const inputElement = document.querySelector('text');

// // getting the add task button
// const btnAddElement = document.querySelector('form button');

// // grabbing the HTML element <ul>
// const ulElement = document.querySelector('ul');

document.querySelector('button').onclick = function(e) {
    e.preventDefault()
    if(document.querySelector('.task').value.length == 0){
        alert("Write something in your To-Do list!")
    } else {
        document.querySelector('ul').innerHTML += `
            <li>
                <div class="checkbox">
                 <input type="checkbox"/>
                    ${document.querySelector('.task').value}
                    ${task.value = ""}
                </div>
                <div class="delete">
              <i class="fa-solid fa-circle-xmark"></i>
            </div>
            </li>
           `;
  
        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}