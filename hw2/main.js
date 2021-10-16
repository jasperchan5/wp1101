var nowPage = 0;
var menuEnlarged = false;
var imgArr = ["starburst.jpg","uso.jpg","starburst2.jfif","ten.jfif"];
var imgArr2 = ["https://imgur.com/oeOe8F9.jpg","https://imgur.com/r7u2j0r.jpg","https://imgur.com/8gfZ7lX.jpg","https://imgur.com/NyuJlHV.jpg"];
var totalImgArr = [];
totalImgArr.push(imgArr);
totalImgArr.push(imgArr2);

var showPhotoNum = function(){
    var box = document.getElementById("totalPhoto")
    var totalPhotoNum = function(){
        var total = 0;
        for(var i = 0; i<totalImgArr.length;i++){
            total += totalImgArr[i].length;
        }
        return total;
    }
    box.innerText = totalPhotoNum();
    box = document.getElementById("currentPhoto");
    box.innerText = totalImgArr[nowPage].length;
    return totalPhotoNum();
}
var currentPhotoNum = function(){
    return totalImgArr[nowPage].length;
}
var showCurrentPhoto = function(page){
    var box = document.getElementById("currentSelecting");
    box.innerText = page;
}
var getPage = function(){
    document.getElementById("nowPage").innerText = nowPage+1;
    document.getElementById("totalPage").innerText = totalImgArr.length;
    if(nowPage===0){
        document.getElementsByClassName("switch_button_left").style = "background-color: gray";
    }
    if(nowPage===totalImgArr.length-1){
        document.getElementsByClassName("switch_button_right").style = "background-color: gray";
    }
}
var loadImage = function(id){
    var imgBox = document.getElementById("large_img");
    nowImgArr = totalImgArr[nowPage];
    imgBox.src = nowImgArr[id];
    
    var container = document.getElementsByClassName("photo_section_2")
    for(var i =0 ; i < imgArr.length ; i++){
        if(i===id){
            container[i].style.border = "#ffffff 10px dashed" 
        }
        else{
            container[i].style.border = "#16151a 2px solid"
        }
    }
}
var switchPage = function(input){
    if(input===100){
        getPage();
        nowPage++;
        if(nowPage >= totalImgArr.length || nowPage < 0){
            nowPage--;
            alert("Null album");
        }
        else{
            getPage();
            reloadPhoto(nowPage);
            loadImage(0);
            showCurrentPhoto(1);
            showPhotoNum();
        }
    }
    else if(input===-1){
        getPage();
        nowPage--;
        if(nowPage >= totalImgArr.length || nowPage < 0){
            nowPage++;
            alert("Null album");
        }
        else{
            getPage();
            reloadPhoto(nowPage);
            loadImage(0);
            showCurrentPhoto(1);
            showPhotoNum();
        }
    }
    else{
        getPage();
        var temp = nowPage;
        nowPage = input;
        if(nowPage >= totalImgArr.length){
            nowPage = temp;
            alert("Null album");
        }
        else{
            getPage();
            reloadPhoto(nowPage);
            loadImage(0);
            showCurrentPhoto(1);
            showPhotoNum();
        }
    }
    for(var i =0 ; i < totalImgArr[nowPage].length ; i++){
        var container = document.getElementById('small_img'+ nowPage + "_" + i +'');
        container.src = totalImgArr[nowPage][i];
    }
}
var useMenu = function(){
    if(!menuEnlarged){
        menu.className = "album_menu";
        menu.className += " menu_enlarge";
        menuEnlarged = true;
    } 
    else{
        menu.className = "album_menu";
        menu.className += " menu_shrink";
        menuEnlarged = false;
    } 
}
var addPhoto = function(index){
    var input = prompt("Insert url:","starburst.jpg")
    // Push photo in array
    nowImgArr = totalImgArr[nowPage];
    var row = document.getElementById("row0");
    nowImgArr.push(input);
    var col = document.createElement("div");
    col.style = "display:block;";
    col.classList += "col-md-3";
    row.appendChild(col);
    var newPhotoSec = document.createElement("div");
    newPhotoSec.classList += "photo_section_2 photo_section_2:hover";
    col.appendChild(newPhotoSec);
    var photoBox = document.createElement("div")
    photoBox.classList += "view_box_2 view_box_2:hover";
    newPhotoSec.appendChild(photoBox);
    var newImg = document.createElement("img");
    newImg.classList += "image_fitting";
    newImg.id += "small_img"+ nowPage + "_" + (totalImgArr[nowPage].length - 1) +"";
    newImg.src = input;
    newImg.onclick = function(){loadImage(index);showCurrentPhoto(index+1);}
    photoBox.appendChild(newImg);
    showPhotoNum();
    console.log(nowImgArr);
}
var reloadPhoto = function(nowPage){
    for(var i = 0; i<showPhotoNum(); i++){
        if(i < totalImgArr[nowPage].length){
            var col = document.getElementsByClassName("col-md-3")[i];
            col.style = "display: block;";
            var box = document.getElementById("small_img"+ nowPage + "_" + i +"");
            box.src = totalImgArr[nowPage][i];
        }
        else{
            var col = document.getElementsByClassName("col-md-3")[i];
            col.style = "display: none;";
        }
    }
    
}
var removeLastFrame = function(){
    var row = document.getElementById("row0");
    var toDelete1 = document.getElementsByClassName("col-md-3")[totalImgArr[nowPage].length];
    var toDelete2 = document.getElementsByClassName("photo_section_2")[totalImgArr[nowPage].length];
    var toDelete3 = document.getElementsByClassName("view_box_2")[totalImgArr[nowPage].length];
    var imgToDelete = document.getElementById("small_img"+ nowPage + "_" + totalImgArr[nowPage].length +"");
    toDelete3.removeChild(imgToDelete);
    toDelete2.removeChild(toDelete3);
    toDelete1.removeChild(toDelete2);
    row.removeChild(toDelete1);
}
var removePhoto = function(){
    var index = prompt("輸入欲刪除位置(從0開始)");
    var nowImgArr = totalImgArr[nowPage];
    nowImgArr.splice(parseInt(index),1);
    reloadPhoto();
    removeLastFrame();
    showPhotoNum();
}
var addAlbum = function(){
    totalImgArr.push([]);
}
var removeAlbum = function(){
    var index = prompt("輸入欲刪除位置(從0開始)");
    totalImgArr.splice(index,1);
}