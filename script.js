const btn1 = document.querySelector('.btn-1')
const input = document.querySelectorAll('input')
const errors = document.querySelectorAll('.error')
const form = document.querySelector('form')
const icons = document.querySelectorAll('.icon')

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateFirstName = (firstName) => {
    return String(firstName)
      .trim()
      .match(
        /^[A-Z][a-zA-Zęóąśłżźćń]*$/
      );
};

const validateLastName = (lastName) => {
    return String(lastName)
      .trim()
      .match(
        /^[A-Z][a-zA-Zęóąśłżźćń\- ]*$/
      );
};

const validatePassword = (password) => {
    return String(password)
      .match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      );
};

let first = document.getElementById("name")
let last = document.getElementById("last")
let mail = document.getElementById("email")
let pass = document.getElementById("password")

btn1.addEventListener('click', function () {
    for (const element of input) {
        let first = document.getElementById("name")
        let last = document.getElementById("last")
        let mail = document.getElementById("email")
        let pass = document.getElementById("password")

        if (element.value == "" || validateFirstName(first.value) == null || validateLastName(last.value) == null || validateEmail(mail.value) == null || validatePassword(pass.value) == null){
            console.log("halo")
            for(const el of errors){
                el.style.display = "flex"
                form.style.gap = "0px"
            }
            for(const el of icons){
                el.style.backgroundImage = "url('/images/icon-error.svg')";
            }   
        } else if(validateFirstName(first.value) != null && validateLastName(last.value) != null && validateEmail(mail.value) != null && validatePassword(pass.value) != null){
            console.log("prosze")
            for(const el of errors){
                el.style.display = "none"
                form.style.gap = "20px"
            }
            for(const el of icons){
                el.style.backgroundImage = "";
            }   
        }
      }
})
