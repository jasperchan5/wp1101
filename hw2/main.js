var imgArr = ["starburst.jpg","uso.jpg","starburst2.jfif","ten.jfif"];
var loadImage = function(id){
    var imgBox = document.getElementById("large_img");
    imgBox.src = imgArr[id];
    
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
var switchPage = function(){
    alert("Null!!!")
}