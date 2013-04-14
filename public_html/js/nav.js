function bState(obj, styleName){
    obj.className = styleName;
}
function bStateM(nameObj,isVisible){
    var obj = document.getElementById(nameObj);
    if(isVisible){
        obj.style.visibility = "visible";
    }
    else{
        obj.style.visibility = "hidden";
    }
}