# wp1101

## Used css:<br>
- top_section, photo_section, photo_section_2: 放置圖片及文字<br>
- album_title: 調整左上方大標題的屬性<br>
- view_box: 塞照片的空間<br>
- image_fitting: 調整圖片長寬用的css，讓不同大小的圖片都能剛好塞進view_box<br>
- switch_button(left and right): 左右換頁用的按鈕<br>
- album_menu, selection_button: 相簿選單，有四個按鈕連向不同相簿<br>
- menu_shrink, menu_enlarge: 處理點擊左上角按鈕時，相簿列表的放大及縮小動畫(利用@keyframe來製作動畫)
- bootstrap: 處理同橫列內不同css的排列問題，讓四張小圖能獨立顯示在同一列上<br>
- hover: 滑鼠移至指定目標上會有不同效果<br>

## Used javascript fuctions:<br>
- showPhotoNum(): 顯示及回傳所有相簿之相片總數
- currentPhotoNum(): 回傳目前相簿內相片數量
- showCurrentSelecting(): 顯示目前選取第幾張相片
- getPage(): 獲取當前頁數
- loadImage(): 載入大圖，以及顯示選取目前大圖之預覽圖效果
- switchPage(): 處理任何有關頁數變動的載入事宜
- useMenu(): 控制相簿選單的放大、縮小
- addPhoto(): 新增相片
- reloadPhoto(): 在換頁面之後重整，顯示當前相簿的相片
- removeLastFrame(), removePhoto(): 移除指定相片
- addAlbum(): 新增相簿
- removeAlbum(): 移除最近新增的相簿