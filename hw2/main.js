var nowPage = 0;

var imgArr = ["starburst.jpg","uso.jpg","starburst2.jfif","ten.jfif"];
var imgArr2 = ["https://imgur.com/oeOe8F9.jpg","https://imgur.com/r7u2j0r.jpg","https://imgur.com/8gfZ7lX.jpg","https://imgur.com/NyuJlHV.jpg"];
var totalImgArr = [];
totalImgArr.push(imgArr);
totalImgArr.push(imgArr2);

var getPage = function(){
    document.getElementById("nowPage").innerText = nowPage+1;
    document.getElementById("totalPage").innerText = totalImgArr.length;
    if(nowPage===0){
        document.getElementsByClassName("switch_button_left").style = "background-color: #000000";
    }
    if(nowPage===totalImgArr.length-1){
        document.getElementsByClassName("switch_button_right").style = "background-color: #000000";
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
var switchPage = function(mode){
    if(mode===1){
        getPage();
        nowPage++;
        if(nowPage >= totalImgArr.length || nowPage < 0){
            nowPage--;
            alert("Null album");
        }
        else{
            getPage();
            loadImage(0);
        }
    }
    else if(mode===0){
        getPage();
        nowPage--;
        if(nowPage >= totalImgArr.length || nowPage < 0){
            nowPage++;
            alert("Null album");
        }
        else{
            getPage();
            loadImage(0);
        }
    }
    for(var i =0 ; i < totalImgArr[nowPage].length ; i++){
        var container = document.getElementById('small_img'+i+'');
        container.src = totalImgArr[nowPage][i];
    }
}