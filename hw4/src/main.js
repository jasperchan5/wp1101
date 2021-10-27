import xImage from './image.js'
////// Functions //////

// Add todo function
var itemCnt = 0, totalTodoCnt = 0, uncompletedTodoCnt = 0, completedTodoCnt = 0; 
var existTodo = false;
// Add todo when enter key is pressed.
document.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        let itemName = document.getElementsByClassName("todo-app__input")[0].value;
        if(itemName !== ""){
            addTodo(itemName,itemCnt);
            document.getElementsByClassName("todo-app__input")[0].value = "";
        }
    }
})

var buttonPushed = [false,false,false];
export var filters = function(i){
    let button = document.getElementsByTagName("button")[i];
    button.style = "display: flex;";
    if(i === 0){
        button.onclick = function(){
            if(buttonPushed[0] === false){
                buttonPushed[0] = true;
                button.style.background = "#26ca299b;";
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
                button.style = "display: flex;";
            }
        };
    }
    else if(i === 1){
        button.onclick = function(){
            if(buttonPushed[1] === false){
                buttonPushed[1] = true;
                button.style.background = "#26ca299b;";
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
                button.style = "display: flex;";
            }
        };
    }
    else{
        button.onclick = function(){
            if(buttonPushed[2] === false){
                buttonPushed[2] = true;
                button.style.background = "#26ca299b;";
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
                button.style = "display: flex;";
            }
        };
    }
}

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
    deleteButton.src = {xImage};
    deleteButton.alt = "X"
    deleteButton.classList += "todo-app__item-x";
    deleteButton.onclick = function(){deleteToDo(deleteButton);};

    newTodo.appendChild(checkBox);
    newTodo.appendChild(item);
    newTodo.appendChild(deleteButton);
    var listFrame = document.getElementsByTagName("ul")[0];
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
        if(completedTodoCnt === 0){
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
    if(totalTodoCnt === 0){
        existTodo = false;
        document.getElementsByTagName("footer")[0].style.display = "none";
    }
    document.getElementsByClassName("todo-app__total")[0].innerText = ""+ uncompletedTodoCnt +" Left";
    toDelete.style.display = "none";
}

export var clearCompleted = function(){
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