document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const tasklist = document.getElementById("tasks")

//add task  to task Lister

  taskForm.addEventListener("submit", function(ev){

     ev.preventDefault();
     let li = document.createElement("li");
     li.textContent = input.value;
     list.appendChild(li);

     //add delete

     let deleteButton = document.createElement("span")
     deleteButton.textContent = "[x]"
     li.appendChild(deleteButton)
     deleteButton.addEventListener("click", () => {
           li.remove()
      })

    //add dropdown
    
  });





});
