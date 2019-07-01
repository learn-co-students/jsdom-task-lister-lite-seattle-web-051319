document.addEventListener("DOMContentLoaded", () => {
  // your code here
  main();
});

function main(){
  addtask();
};

function addtask(){
  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  const ul = document.getElementById('tasks');

  let DropDown = document.createElement('select')
    DropDown.id = "color"
    form.appendChild(DropDown)
  let low = document.createElement('option')
    low.textContent = 'low'
    DropDown.appendChild(low)
  let medium = document.createElement('option')
    medium.textContent = "medium"
    DropDown.appendChild(medium)
  let high = document.createElement("option")
    high.textContent = "high"
    DropDown.appendChild(high)

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let li = document.createElement('li');
    let span = document.createElement('span');
    let Dropdown = document.getElementById('color')

    if (Dropdown.value === "low"){
      li.style.color = "green"
    }
    
    else if (Dropdown.value === 'medium'){
      li.style.color = "yellow"
    }
  
    else if (Dropdown.value === 'high'){
      li.style.color = "red"
    }

    span.textContent = ' [X]';
    span.addEventListener('click', () => {
      li.remove();
    })


    li.textContent = input.value;
    li.appendChild(span);
    ul.appendChild(li)
  });
};