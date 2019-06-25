document.addEventListener("DOMContentLoaded", () => {
  // your code here
  main()
});

function main() {
  addTasks()
}

function addTasks() {
  const form = document.getElementById('create-task-form')
  const input = document.getElementById('new-task-description')
  const priority = document.getElementById('new-task-priority')

  form.addEventListener("submit", (event) => {
    event.preventDefault()

    let list
    let li = document.createElement('li')
    let button = document.createElement('button')
    // let edit = document.createElement('span')
    const userInput = input.value

    li.textContent = `${userInput} `

    if (priority.selectedIndex === 0) {
      li.style.color = "red"
      list = document.getElementById('high')
    }

    else if (priority.selectedIndex === 1) {
      li.style.color = "orange"
      list = document.getElementById('medium')
    }

    else if (priority.selectedIndex === 2) {
      li.style.color = "green"
      list = document.getElementById('low')
    }

    // edit.addEventListener("click", () => {
    //   input.value = li.textContent
    // })

    button.addEventListener("click", () => {
      li.remove()
    })

    // edit.textContent = '   [edit]'

    button.textContent = 'X'
    // li.appendChild(edit)
    li.appendChild(button)
    list.appendChild(li)

    form.reset()
  })
}
