let inputEl = document.getElementById("email")
let errorMSg = document.querySelector(".error")
let submitEl = document.getElementById("submit-btn")

//  const isRequired = value => value === '' ? false : true;//to check if input is empty
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const showError = (input, messsage) =>{
    errorMSg.textContent = messsage
    inputEl.classList.add("errorel")
}
const showSuccess = (input, messsage) =>{
    errorMSg.textContent = ""
    inputEl.classList.remove("errorel")
}

const validateinput = () =>{
    const emailValue = inputEl.value.trim()
    if (emailValue===""){
        showError(inputEl, "Email cannot be empty")
    } else if (!isEmailValid(emailValue)){
        showError(inputEl, "Email is not valid")
    } else{
        showSuccess(inputEl)
    }
}

submitEl.addEventListener("click", function(e){
    e.preventDefault()
    validateinput()

})
