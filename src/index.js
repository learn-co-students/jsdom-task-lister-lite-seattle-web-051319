document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
    function addEventToList() {
        const form = document.getElementById("create-task-form");
        const input = document.getElementById("new-task-description");
        const list = document.getElementById("list")
        

        form.addEventListener("submit", (ev) => {
          
          ev.preventDefault()
        
          let li = document.createElement("li")

          li.textContent = input.value
          // debugger;
          list.appendChild(li)

          // add delete button for list things

          let deleteButton = document.createElement("span")

          deleteButton.textContent = "[x]"

          li.appendChild(deleteButton)

          deleteButton.addEventListener("click", () => {
            li.remove()
          })

        })
    }
    addEventToList()
});
