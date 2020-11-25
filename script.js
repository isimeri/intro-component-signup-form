const form = document.querySelector(".sign-up-form");
const fname = form.querySelector(".first-name");
const lname = form.querySelector(".last-name");
const password = form.querySelector(".password-input");
const email = form.querySelector(".email-input");

fname.addEventListener('input', function(){
    if(fname.validity.valid)
    {
        fname.classList.remove("error");
        fname.nextElementSibling.classList.remove("show");
    }
});

lname.addEventListener('input', function(){
    if(lname.validity.valid)
    {
        lname.classList.remove("error");
        lname.nextElementSibling.classList.remove("show");
    }
});

email.addEventListener('input', function(){
    if(email.validity.valid)
    {
        email.classList.remove("error");
        email.nextElementSibling.classList.remove("show");
    }
});

password.addEventListener('input', function(){
    if(password.validity.valid)
    {
        password.classList.remove("error");
        password.nextElementSibling.classList.remove("show");
    }
});

form.addEventListener('submit', function(e){
    if(!fname.validity.valid)
    {
        fname.classList.add("error");
        fname.nextElementSibling.classList.add("show");
        e.preventDefault();
    }
    if(!lname.validity.valid)
    {
        lname.classList.add("error");
        lname.nextElementSibling.classList.add("show");
        e.preventDefault();
    }
    if(!email.validity.valid)
    {
        email.classList.add("error");
        email.nextElementSibling.classList.add("show");
        e.preventDefault();
    }
    if(!password.validity.valid)
    {
        password.classList.add("error");
        password.nextElementSibling.classList.add("show");
        e.preventDefault();
    }
});