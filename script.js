function addTask()
{
  var taskInput = " " + document.getElementById("new-task").value;
  var incompleteTaskHolder = document.getElementById("incomplete-tasks");
  var li = document.createElement("li");
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.setAttribute("onclick", "toCheck(this.id)");
  checkbox.setAttribute("id", taskInput);
  var icon = document.createElement("span");
  icon.setAttribute("class", "fa fa-trash");
  icon.setAttribute("style", "float: right; color: red;");
  icon.setAttribute("onclick", "deleteInput(this.parentNode)");
  li.appendChild(checkbox);
  var inputNode = document.createTextNode(taskInput);
  li.setAttribute("class", "list-group-item list-group-item-warning mb-1 mt-1");
  li.appendChild(inputNode);
  li.appendChild(icon);
  incompleteTaskHolder.append(li); 
  document.getElementById("new-task").value = ""; 
}

function check() 
{
    if(event.keyCode === 13){
       return addTask();
     }
}

function toCheck(id)
{
  var checked = document.getElementById(id).parentNode;
  var completedtasks = document.getElementById("completed-tasks");
  checked.setAttribute("class", "list-group-item list-group-item-success mb-1 mt-1");
  checked.setAttribute("checked", '');
  checked.firstElementChild.setAttribute("onclick", "toUncheck(this.id)")
  completedtasks.append(checked);
}

function toUncheck(id)
{
  var unchecked = document.getElementById(id).parentNode;
  var incompletetasks = document.getElementById("incomplete-tasks");
  unchecked.setAttribute("class", "list-group-item list-group-item-warning mb-1 mt-1");
  unchecked.firstElementChild.setAttribute("onclick", "toCheck(this.id)");
  incompletetasks.append(unchecked);
}

function deleteInput(li)
{
  var tasks;
  tasks = li.parentNode.id == "incomplete-tasks"? document.getElementById("incomplete-tasks"):document.getElementById("completed-tasks");
  tasks.removeChild(li);
}