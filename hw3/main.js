////// Initiation //////

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
var buttonPushed = [false,false,false];
var bottomList = document.createElement("footer");
bottomList.classList += "todo-app__footer";
bottomList.id = "todo-footer";
root.appendChild(bottomList);
var totalNum = document.createElement("div");
totalNum.classList += "todo-app__total";
totalNum.innerText = "-999 Left";
var viewButtons = document.createElement("ul");
viewButtons.classList += "todo-app__view-buttons";
for(let i=0; i<3; i++){
    let button = document.createElement("button");
    button.style = "display: flex;";
    if(i === 0){
        button.innerText = "All";
        button.onclick = function(){
            if(buttonPushed[0] == false){
                buttonPushed[0] = true;
                this.style = "background: #26ca299b;";
                buttonPushed[1] = false;
                buttonPushed[2] = false;
                document.getElementsByTagName("button")[1].style = "display: flex;";
                document.getElementsByTagName("button")[2].style = "display: flex;";
                let items = document.getElementsByClassName("todo-app__item");
                for(let j = 0; j < items.length; j++){
                    items[j].style.display = "flex";
                }
            }
            else{
                buttonPushed[0] = false;
                this.style = "display: flex;";
            }
        };
    }
    else if(i === 1){
        button.innerText = "Active";
        button.onclick = function(){
            if(buttonPushed[1] == false){
                buttonPushed[1] = true;
                this.style = "background: #26ca299b;";
                buttonPushed[0] = false;
                buttonPushed[2] = false;
                document.getElementsByTagName("button")[0].style = "display: flex;";
                document.getElementsByTagName("button")[2].style = "display: flex;";
                let items = document.getElementsByClassName("todo-app__item");
                let status = document.getElementsByTagName("input");
                for(let j = 0; j < items.length; j++){
                    if(status[j+1].checked === false){
                        items[j].style.display = "flex";
                    }
                    else{
                        items[j].style.display = "none";
                    }
                }
            }
            else{
                buttonPushed[1] = false;
                this.style = "display: flex;";
            }
        };
    }
    else{
        button.innerText = "Completed";
        button.onclick = function(){
            if(buttonPushed[2] == false){
                buttonPushed[2] = true;
                this.style = "background: #26ca299b;";
                buttonPushed[0] = false;
                buttonPushed[1] = false;
                document.getElementsByTagName("button")[0].style = "display: flex;";
                document.getElementsByTagName("button")[1].style = "display: flex;";
                let items = document.getElementsByClassName("todo-app__item");
                let status = document.getElementsByTagName("input");
                for(let j = 0; j < items.length; j++){
                    if(status[j+1].checked === true){
                        items[j].style.display = "flex";
                    }
                    else{
                        items[j].style.display = "none";
                    }
                }
            }
            else{
                buttonPushed[2] = false;
                this.style = "display: flex;";
            }
        };
    }
    viewButtons.appendChild(button);
}

var clearButton = document.createElement("div");
clearButton.classList += "todo-app__clean";
clearButton.style = "visibility: hidden;";
var button = document.createElement("button");
button.innerText = "Clear completed";
button.onclick = function(){clearCompleted();};
clearButton.appendChild(button);

bottomList.appendChild(totalNum);
bottomList.appendChild(viewButtons);
bottomList.appendChild(clearButton);
bottomList.style.display = "none";

////// Initiation //////

////// Functions //////

// Add todo function
var itemCnt = 0, totalTodoCnt = 0, uncompletedTodoCnt = 0, completedTodoCnt = 0; 
var existTodo = false;
// Add todo when enter key is pressed.
document.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        let itemName = document.getElementsByClassName("todo-app__input")[0].value;
        if(itemName != ""){
            addTodo(itemName,itemCnt);
            document.getElementsByClassName("todo-app__input")[0].value = "";
        }
    }
})

// Add a todo, id = totalTodoCnt
var addTodo = function(itemName,index){
    let newTodo = document.createElement("li");
    newTodo.classList += "todo-app__item";
    // Checkbox
    let checkBox = document.createElement("div");
    checkBox.classList += "todo-app__checkbox";
    let checkInput = document.createElement("input");
    checkInput.id = index;
    checkInput.type = "checkbox";
    checkInput.onclick = function(){checkButton(checkInput);};
    let confirm = document.createElement("label");
    confirm.htmlFor = index;
    checkBox.appendChild(checkInput);
    checkBox.appendChild(confirm);
    // Item
    let item = document.createElement("h1");
    item.classList += "todo-app__item-detail";
    item.style = "";
    item.innerText = itemName;
    // Delete button
    let deleteButton = document.createElement("img");
    deleteButton.src = "./img/x.png";
    deleteButton.classList += "todo-app__item-x";
    deleteButton.onclick = function(){deleteToDo(deleteButton);};

    newTodo.appendChild(checkBox);
    newTodo.appendChild(item);
    newTodo.appendChild(deleteButton);
    listFrame.appendChild(newTodo);
    // Display the footer
    if(existTodo === false){
        existTodo = true;
        document.getElementsByTagName("footer")[0].style.display = "flex";
    }
    let displayTotal = document.getElementsByClassName("todo-app__total")[0];
    totalTodoCnt ++; // Add one to total todo count
    itemCnt = totalTodoCnt; // Make a copy of totalTodoCnt
    uncompletedTodoCnt = totalTodoCnt - completedTodoCnt; // 預設為未完成等於全部-完成之TODO
    displayTotal.innerText = ""+ uncompletedTodoCnt +" Left";
}

var checkButton = function(target){ 
    let toDelete = target.parentElement.parentElement.getElementsByClassName("todo-app__item-detail")[0];
    if(target.checked === true){
        uncompletedTodoCnt --;
        completedTodoCnt ++;
        if(completedTodoCnt > 0){
            document.getElementsByClassName("todo-app__clean")[0].style.visibility = "visible";
        }
        document.getElementsByClassName("todo-app__total")[0].innerText = ""+ uncompletedTodoCnt +" Left";
        toDelete.style = "text-decoration: line-through; opacity: 0.5;";
    }
    else{
        uncompletedTodoCnt ++;
        completedTodoCnt --;
        if(completedTodoCnt == 0){
            document.getElementsByClassName("todo-app__clean")[0].style.visibility = "hidden";
        }
        document.getElementsByClassName("todo-app__total")[0].innerText = ""+ uncompletedTodoCnt +" Left";
        toDelete.style = "";
    }
}

var deleteToDo = function(target){
    let toDelete = target.parentElement;
    let todoSection = document.getElementById("todo-list");
    let toDeleteInput = todoSection.getElementsByTagName("input")[0];
    totalTodoCnt --;
    if(toDeleteInput.checked === true){
        console.log("Deleting completed")
        completedTodoCnt --;
    }
    else{
        console.log("Deleting uncompleted")
        uncompletedTodoCnt --;
    }
    todoSection.removeChild(toDelete);
    if(completedTodoCnt > 0){
        document.getElementsByClassName("todo-app__clean")[0].style.visibility = "visible";
    }
    else if(completedTodoCnt === 0){
        document.getElementsByClassName("todo-app__clean")[0].style.visibility = "hidden";
    }
    if(totalTodoCnt == 0){
        existTodo = false;
        document.getElementsByTagName("footer")[0].style.display = "none";
    }
    document.getElementsByClassName("todo-app__total")[0].innerText = ""+ uncompletedTodoCnt +" Left";
    toDelete.style.display = "none";
}

var clearCompleted = function(){
    let toDeleteList = document.getElementsByClassName("todo-app__item");
    for(let i = 0; i < toDeleteList.length; i++){
        let status = toDeleteList[i].getElementsByTagName("input")[0];
        if(status.checked === true){
            toDeleteList[i].style.display = "none";
            completedTodoCnt --;
            totalTodoCnt --;
        }
    }
    document.getElementsByClassName("todo-app__clean")[0].style.visibility = "hidden";
    if(totalTodoCnt === 0){
        existTodo = false;
        document.getElementsByTagName("footer")[0].style.display = "none";
    }
}
////// Functions //////