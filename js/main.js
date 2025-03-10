/*Name this external file gallery.js*/

function upDate(previewPic){
    let imgDiv = document.getElementById("image");
    imgDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imgDiv.innerHTML = previewPic.alt;
}

function unDo(){
    let imgDiv = document.getElementById("image");
    imgDiv.style.backgroundImage = "";
    imgDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabEvent() {
    var imgTags = document.querySelectorAll(".preview");
    for(const img of imgTags) {
        img.setAttribute("tabindex", "0");
        
        if(!img.dataset.eventAdded) {
            img.addEventListener("focus", () => {
                upDate(img);
            });
            img.addEventListener("blur", () => {
                unDo();
            });
            img.dataset.eventAdded = "true";
        }
    }
}