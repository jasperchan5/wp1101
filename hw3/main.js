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
var cleanButton = document.createElement("div");
cleanButton.classList += "todo-app__clean";
bottomList.appendChild(totalNum);
bottomList.appendChild(viewButtons);
bottomList.appendChild(cleanButton);
