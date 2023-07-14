const myForm = document.querySelector("form");

const emailWrapper = document.getElementById("emailWrapper")
const emailInput = document.getElementById("email")



function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

myForm.addEventListener('click', (e) => {
    e.preventDefault();
    let email = emailInput.value;

    if (validateEmail(email) === false) {
        emailWrapper.classList.add('active')
    }

    setTimeout(() => {
        emailWrapper.classList.remove('active');
    }, 3000);
})

