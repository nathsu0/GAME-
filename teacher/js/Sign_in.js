const eye = document.getElementById("eye");
const password = document.getElementById("password");

var visibility = true;
eye.addEventListener("click",()=>{
    if (visibility){
        eye.style.setProperty("--icon", "url(../img/eye-slash-fill.svg)");
        password.setAttribute("type","text");
        visibility = false;
    } else{
        eye.style.setProperty("--icon", "url(../img/eye-fill.svg)");
        password.setAttribute("type","password");
        visibility = true;
    }
})