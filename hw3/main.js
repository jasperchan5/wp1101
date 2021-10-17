// Adding elements
var root = document.getElementById("root");

/// Main section
var mainSec = document.createElement("section");
mainSec.classList += "todo-app__main";
root.appendChild(mainSec);
//// Input Bar
var inputBar = document.createElement("input");
inputBar.classList += "todo-app__input";
mainSec.appendChild(inputBar);
//// Todo list
var listFrame = document.createElement("ul");
listFrame.classList += "todo-app__list";
listFrame.id = "todo-list";
mainSec.appendChild(listFrame);

/// Footer section
var bottomList = document.createElement("footer");
bottomList.classList += "todo-app__footer";
bottomList.id = "todo-footer";
root.appendChild(bottomList);
var totalNum = document.createElement("div");
totalNum.classList += "todo-app__total";
totalNum.innerText = "1 Left";

var viewButtons = document.createElement("ul");
viewButtons.classList += "todo-app__view-buttons";
for(var i=0; i<3; i++){
    var button = document.createElement("button");
    if(i === 0) button.innerText = "All";
    else if(i === 1) button.innerText = "Active";
    else button.innerText = "Completed";
    viewButtons.appendChild(button);
}

var clearButton = document.createElement("div");
clearButton.classList += "todo-app__clean";
var button = document.createElement("button");
button.innerText = "Clear completed";
clearButton.appendChild(button);

bottomList.appendChild(totalNum);
bottomList.appendChild(viewButtons);
bottomList.appendChild(clearButton);

// Add todo function
var nowTodoCnt = 0;
var addTodo = function(itemName,nowTodoCnt){
    var newTodo = document.createElement("li");
    newTodo.classList += "todo-app__item";
    // Checkbox
    var checkBox = document.createElement("div");
    checkBox.classList += "todo-app__checkbox";
    var confirm = document.createElement("label");
    confirm.id = nowTodoCnt;
    confirm.onclick = function(){highLight(nowTodoCnt)};
    nowTodoCnt += 1;
    checkBox.appendChild(confirm);
    // Item
    var item = document.createElement("h1");
    item.classList += "todo-app__item-detail";
    item.innerText = itemName;
    // Delete button
    var deleteButton = document.createElement("img");
    deleteButton.src = "./img/x.png";
    deleteButton.classList += "todo-app__item-x";
    newTodo.appendChild(checkBox);
    newTodo.appendChild(item);
    newTodo.appendChild(deleteButton);
    listFrame.appendChild(newTodo);
}

document.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        var itemName = document.getElementsByClassName("todo-app__input")[0].value;
        if(itemName != ""){
            addTodo(itemName,nowTodoCnt);
        }
    }
})

var highLight = function(id){
    // if(!taskFinished[id]){
    var item = document.getElementById(id);
    console.log(item);
    item.style.background = "#26ca299b;";
    taskFinished[id] = true;
    // }
    // else{
    //     var item = document.getElementById(id);
    //     item.style.background = "rgba(99, 99, 99, 0.698);";
    //     taskFinished[id] = false;
    // }
    
}