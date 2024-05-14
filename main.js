alert('This form is just a demonstration and does not have storage in any database')
function readForm() {

    var name = document.getElementById('name');
    var mail = document.getElementById('mail');
    var number = document.getElementById('number');
    var password = document.getElementById('password');
    var confirmedPassword = document.getElementById('confirmedPassword');
    var answer = document.getElementById('answer');
    // .............................................................. //
    var nameError = document.getElementById('nameSpan');
    var mailError = document.getElementById('mailSpan');
    var numError = document.getElementById('numberSpan');
    var passwordError = document.getElementById('passwordSpan');
    var confirmPasswordError = document.getElementById('confirmPasswordSpan');
    // .............................................................. //
    if (name.value === '' || mail.value === '' || number.value === '' || password.value === '' || confirmedPassword.value === '') {
        answer.innerHTML = 'Please fill in all fields.';
        if (name.value === '') { nameError.style.color = 'red' }
        if (mail.value === '') { mailError.style.color = 'red' }
        if (number.value === '') { numError.style.color = 'red' }
        if (password.value === '') { passwordError.style.color = 'red' }
        if (confirmedPassword.value === '') { confirmPasswordError.style.color = 'red' }
        setTimeout(function () {
            answer.innerHTML = ''
            nameError.style.color = ''
            mailError.style.color = ''
            numError.style.color = ''
            passwordError.style.color = ''
            confirmPasswordError.style.color = '';
        }, 2000)
        return;
    }

    if (password.value.length < 6) {
        answer.innerHTML = 'Your password must be at least 6 characters long'
        return;
    }

    if(number.value.length > 15){
        answer.innerHTML = 'The number is too big'
    }

    if (password.value === confirmedPassword.value) {
        answer.innerHTML = 'Your registration is complete, sir ' + name.value
        setTimeout(function () {
            name.value = ''
            mail.value = ''
            number.value = ''
            password.value = ''
            confirmedPassword.value = ''
            answer.innerHTML = ''
        }, 1000)
    } else {
        answer.innerHTML = 'Passwords do not match.';
    }

}
