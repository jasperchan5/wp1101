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
    button.classList += "todo-app__buttons";
    if(i === 0) button.innerText = "All";
    else if(i === 1) button.innerText = "Active";
    else button.innerText = "Completed";
    viewButtons.appendChild(button);
}

var clearButton = document.createElement("div");
clearButton.classList += "todo-app__clean";
var button = document.createElement("button");
button.classList += "todo-app__clean";
button.innerText = "Clear completed";
clearButton.appendChild(button);

bottomList.appendChild(totalNum);
bottomList.appendChild(viewButtons);
bottomList.appendChild(clearButton);

// Add todo function
var addTodo = function(itemName){
    var newTodo = document.createElement("li");
    newTodo.classList += "todo-app__item";
    // Checkbox
    var checkBox = document.createElement("div");
    checkBox.classList += "todo-app__checkbox";
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

var itemName = document.getElementsByClassName("todo-app__input")[0].value;
window.addEventListener("keypress",function(e){
    if(e === "Enter"){
        addTodo(itemName);
    }
})
