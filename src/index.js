document.addEventListener("DOMContentLoaded", () => {
  // your code here
  main();
});

function main(){
  addtask();
}

function addtask(){
  const form = getElementById('create-task-form')
  const input = getElementById('new-task-description')

  form addEventListener('submit', (event) => {
    event.preventDefault()

    let li = document.createElement('li')
    let button = document.createElement('button')
    li.textContent = text
  })
}