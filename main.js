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

    const empty = {
        errorOnName: function () { name.value === '' ? nameError.style.color = 'red' : nameError.style.color = '' },
        errorOnMail: function () { mail.value === '' ? mailError.style.color = 'red' : mailError.style.color = '' },
        errorOnNum: function () { number.value === '' ? numError.style.color = 'red' : numError.style.color = '' },
        errorOnPassword: function () { password.value === '' ? passwordError.style.color = 'red' : passwordError.style.color = '' },
        errorOnConfPassword: function () { confirmedPassword.value === '' ? confirmPasswordError.style.color = 'red' : confirmPasswordError.style.color = '' }
    };
    
    empty.errorOnName();
    empty.errorOnMail();
    empty.errorOnNum();
    empty.errorOnPassword();
    empty.errorOnConfPassword();
    
    setTimeout(function () {
        answer.innerHTML = '';
        nameError.style.color = '';
        mailError.style.color = '';
        numError.style.color = '';
        passwordError.style.color = '';
        confirmPasswordError.style.color = '';
    }, 2000);

    if (name.value === '' || mail.value === '' || number.value === '' || password.value === '' || confirmedPassword.value === '') {
        answer.innerHTML = 'Please fill in all fields';
        return;
    }
    
    if (password.value.length < 6) {
        answer.innerHTML = 'Your password must be at least 6 characters long';
        return;
    }
    
    if (number.value.length > 16) {
        answer.innerHTML = 'The number is too big';
        return;
    }

    if (password.value !== confirmedPassword.value) {
        answer.innerHTML = 'Passwords do not match.';
        return;
    }
    
    answer.innerHTML = 'Your registration is complete, sir ' + name.value;
    setTimeout(function () {
        name.value = '';
        mail.value = '';
        number.value = '';
        password.value = '';
        confirmedPassword.value = '';
        answer.innerHTML = '';
    }, 1000);

}
