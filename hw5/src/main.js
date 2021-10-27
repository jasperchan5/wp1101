var generateButton = function(){
    let mainBody = document.getElementsByClassName("calculator__mainBody")[0];
    let buttonCol = document.createElement("div");
    buttonCol.classList += "col-md-3";
    let buttonBody = document.createElement("div");
    buttonBody.classList += "calculator__button";
    buttonCol.appendChild(buttonBody);
    mainBody.appendChild(buttonCol);
}

export default generateButton;