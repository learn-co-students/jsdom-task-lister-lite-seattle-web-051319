document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let tasks = document.getElementById("tasks")
  const userInput = document.getElementById("new-task-description")
  const formEvent = document.getElementById("create-task-form")

  formEvent.addEventListener('submit', function(event){
    event.preventDefault()
    let newTask = document.createElement('li')
    newTask.textContent = userInput.value + " [X]"
    tasks.appendChild(newTask)
  })

  tasks.addEventListener('click', function(event){
    // event.preventDefault()
    // tasks.removeChild(tasks.querySelector('ul li'))

    if (event.target.tagName === "LI") {
      event.target.remove()
    }

    console.log(event.target.tagName)
    // event.target.remove()
    // let newTask = document.createElement('li')
    // newTask.textContent = userInput.value
    // tasks.appendChild(newTask)

  })
  // console.log("here")

});
