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
const ceye = document.getElementById("ceye");
const cpassword = document.getElementById("cpassword");

var visibility = true;
ceye.addEventListener("click",()=>{
    if (visibility){
        ceye.style.setProperty("--icon", "url(../img/eye-slash-fill.svg)");
        cpassword.setAttribute("type","text");
        visibility = false;
    } else{
        ceye.style.setProperty("--icon", "url(../img/eye-fill.svg)");
        cpassword.setAttribute("type","password");
        visibility = true;
    }
})
