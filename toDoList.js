
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if((this.readyState == 4) && (this.status == 200)){
    var list = JSON.parse(this.responseText);
    for(var i=0; i<list.length; i++){
      createTask(list[i]);
    }
  }
};
xhttp.open("GET", "https://cse204.work/todos", true);
xhttp.setRequestHeader("x-api-key", "2c12f5-aa8477-d38c9f-c8b953-627190");
xhttp.send();

function createTask(input){
  var completeButton = document.createElement("input");
  completeButton.setAttribute("type", "checkbox");
  completeButton.style.top="18px";
  completeButton.style.left="9px";
  completeButton.style.borderRadius="6px";
  completeButton.style.borderColor="#0c1445";

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML="-";
  deleteButton.style.top="18px";
  deleteButton.style.left="27px";
  deleteButton.style.borderRadius="6px";
  deleteButton.style.borderColor="white";
  deleteButton.style.color="white";
  deleteButton.style.fontSize="12px";
  deleteButton.style.backgroundColor="#0c1445";

  var newId = input.id;
  var newText = input.text;
  var todo = document.createElement("li");
  todo.innerHTML = newText;
  todo.style.color = "#0c1445";
  todo.style.backgroundColor = "white";
  todo.style.fontSize = "27px";
  todo.style.borderRadius = "18px";
  todo.style.borderColor = "#0c1445";
  if(input.completed == true){
    todo.style.textDecoration = "line-through";
  }
  var tododivs = document.getElementById("todos");
  todo.setAttribute("id",newId);
  todo.setAttribute("text",newText);
  tododivs.appendChild(todo);
  todo.appendChild(completeButton);
  todo.appendChild(deleteButton);
  deleteButton.addEventListener("click", function(){deleteItem(newId)});
  completeButton.addEventListener("click", function(){Complete(newId)});
}

// event listener on 'submit' not functioning
document.getElementById("add").addEventListener("click", function(){addTask()});

function addTask(){
  var data = {text: document.getElementById("create").value}

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (){
    if((this.readyState == 4)&&(this.status==200)){
      var task = JSON.parse(this.responseText);
      createTask(task);
    }
    else if(this.readyState==4){
      console.log(this.responseText);
    }
  };

  xhttp.open("POST", "https://cse204.work/todos", true);
  xhttp.setRequestHeader("content-type", "application/json");
  xhttp.setRequestHeader("x-api-key", "2c12f5-aa8477-d38c9f-c8b953-627190");
  xhttp.send(JSON.stringify(data));
  document.getElementById("create").value = "";
}

function Complete(id){

  var xhttp = new XMLHttpRequest();
  var data = {completed: true}

  xhttp.onreadystatechange = function(){
    if((this.readyState==4)&&(this.status==200)){
      console.log(document.getElementById(id));
      document.getElementById(id).style.textDecoration="line-through";
    }
    else if(this.readyState==4){
      console.log(this.responseText);
    }
  };

  xhttp.open("PUT", "https://cse204.work/todos/"+ id, true);
  xhttp.setRequestHeader("content-type", "application/json");
  xhttp.setRequestHeader("x-api-key", "2c12f5-aa8477-d38c9f-c8b953-627190");
  xhttp.send(JSON.stringify(data));
}

function deleteItem(id){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if((this.readyState==4)&&(this.status==200)){
      document.getElementById(id).remove();
    }
    else if(this.readyState==4){
      console.log(this.responseText);
    }
  };

  xhttp.open("DELETE", "https://cse204.work/todos/"+ id, true);
  xhttp.setRequestHeader("content-type","application/json");
  xhttp.setRequestHeader("x-api-key", "2c12f5-aa8477-d38c9f-c8b953-627190");
  xhttp.send();
}
