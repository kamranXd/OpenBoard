let toolsCont = document.querySelector(".tools-cont");
let optionsCont = document.querySelector(".options-cont");
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser");

let pencilFlag = false;
let eraserFlag = false;
let optionsFlag = true;
// true -> tools visible, false -> tools hidden

optionsCont.addEventListener("click", (e) => {
    optionsFlag = !optionsFlag;
     
    if(optionsFlag) {
        openTools();
    } else {
        closeTools();
    }
}) 

function openTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times"); // X when open
    toolsCont.style.display = "flex";
}

function closeTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars"); // Bars when closed
    toolsCont.style.display = "none";
    eraserToolCont.style.display = "none";
    pencilToolCont.style.display = "none";

}

pencil.addEventListener("click", (e)=>{
    // true - show pencil tool, flase - hide pencil tool
    pencilFlag = !pencilFlag;
    if(pencilFlag){
        pencilToolCont.style.display = "block";
    }else{
        pencilToolCont.style.display = "none";
    }
})

eraser.addEventListener("click", (e)=>{
    // true - show pencil tool, flase - hide pencil tool
    eraserFlag = !eraserFlag;
    if(eraserFlag){
        eraserToolCont.style.display = "flex";
    }else{
        eraserToolCont.style.display = "none";
    }
})