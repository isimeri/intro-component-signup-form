const form = document.querySelector(".sign-up-form");
const fname = form.querySelector(".first-name");
const lname = form.querySelector(".last-name");
const password = form.querySelector(".password-input");
const email = form.querySelector(".email-input");


fname.addEventListener('input', function(){
    if(fname.validity.valid)
    {
        fname.classList.remove("error");
        fname.parentElement.classList.remove("goodnt");
        fname.parentElement.nextElementSibling.classList.remove("show");
    }
});

lname.addEventListener('input', function(){
    if(lname.validity.valid)
    {
        lname.classList.remove("error");
        lname.parentElement.classList.remove("goodnt");
        lname.parentElement.nextElementSibling.classList.remove("show");
    }
});

email.addEventListener('input', function(){
    if(email.validity.valid)
    {
        email.classList.remove("error");
        email.parentElement.classList.remove("goodnt");
        email.parentElement.nextElementSibling.classList.remove("show");
    }
});

password.addEventListener('input', function(){
    if(password.validity.valid)
    {
        password.classList.remove("error");
        password.parentElement.classList.remove("goodnt");
        password.parentElement.nextElementSibling.classList.remove("show");
    }
});

form.addEventListener('submit', function(e){
    if(!fname.validity.valid)
    {
        fname.classList.add("error");
        fname.parentElement.classList.add("goodnt");
        fname.parentElement.nextElementSibling.classList.add("show");
        e.preventDefault();
    }
    if(!lname.validity.valid)
    {
        lname.classList.add("error");
        lname.parentElement.classList.add("goodnt");
        lname.parentElement.nextElementSibling.classList.add("show");
        e.preventDefault();
    }
    if(!email.validity.valid)
    {
        email.classList.add("error");
        email.parentElement.classList.add("goodnt");
        email.parentElement.nextElementSibling.classList.add("show");
        e.preventDefault();
    }
    if(!password.validity.valid)
    {
        password.classList.add("error");
        password.parentElement.classList.add("goodnt");
        password.parentElement.nextElementSibling.classList.add("show");
        e.preventDefault();
    }
    if(fname.validity.valid && lname.validity.valid && email.validity.valid && password.validity.valid)
    {
        alert("You got a free trial, cool.");
        e.preventDefault();
        cleanUp();
        return;
    }
    
});
function cleanUp(){
    fname.value = "";
    lname.value = "";
    email.value = "";
    password.value = "";
}