document.addEventListener("DOMContentLoaded", () => {
  
  manageToDo();
  
});


function manageToDo() {	
	const taskDescrip = document.getElementById("new-task-description");
	const taskForm = document.getElementById("create-task-form");
	const taskList = document.getElementById("tasks")
			
	taskForm.addEventListener("submit", function(event) {
		event.preventDefault();
		
		let task = document.createElement("li");
		task.textContent = taskDescrip.value;
		taskList.appendChild(task);
		
		let deleteButton = document.createElement("button");
		deleteButton.textContent = "X";
		task.appendChild(deleteButton);
		
		deleteButton.addEventListener("click", function() {
			deleteButton.parentElement.remove();
		});
							
		taskForm.reset();
	});
}