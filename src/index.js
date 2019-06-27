document.addEventListener("DOMContentLoaded", () => {
  // your code here
    addToDo();
    // deleteTask();

});

function addToDo() {
  const input = document.getElementById('new-task-description')
  const form = document.getElementById('create-task-form')
  const output = document.getElementById('tasks')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    let task = input.value

    let item = document.createElement('li')
    item.textContent = task
    output.appendChild(item)

// Delete task Button
    let button = document.createElement('button')
    button.textContent = "Delete"

    item.appendChild(button)

    button.addEventListener('click', () => {
      item.remove()
    })
  })



}





// <form id="create-task-form" action="#" method="post">
//   <label for="new-task-description">Task description:</label>
//   <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
//   <input type="submit" value="Create New Task">
// </form>
//
// <div id="list">
//   <h2>My Todos</h2>
//   <ul id="tasks">
//   </ul>
// </div>
//
//

// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.
