function validateForm() {
    var name = document.querySelector('.name-input');
    var email = document.querySelector('.email-input');
    var pass = document.querySelector('.pass-input');
    var cpass = document.querySelector('.cpass-input');

    if (name.value == "") {
        document.querySelector('.name-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.name-error-msg').innerHTML = 'Please Enter A Name';
        return false;
    }
    else {
        document.querySelector('.name-input').style.borderBottom = '2px solid #bdbdbd';
        document.querySelector('.name-error-msg').innerHTML = '';
    }

    if (email.value == "") {
        document.querySelector('.email-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.email-error-msg').innerHTML = 'Please Enter A Email';
        return false;
    }
    else if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.querySelector('.email-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.email-error-msg').innerHTML = 'Please Enter A Valid Email';
        return false; 
    } 
   
    else if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.querySelector('.email-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.email-error-msg').innerHTML = 'Please Enter A Valid Email'; 
        return false; 
    }
    else {
        document.querySelector('.email-input').style.borderBottom = '2px solid #bdbdbd';
        document.querySelector('.email-error-msg').innerHTML = '';
    } 
    if (pass.value == "") {
        document.querySelector('.pass-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.pass-error-msg').innerHTML = 'Please Enter A Password';
        return false;
    }
    else {
        document.querySelector('.pass-input').style.borderBottom = '2px solid #bdbdbd';
        document.querySelector('.pass-error-msg').innerHTML = '';
    }
    if (cpass.value != pass.value) {
        document.querySelector('.cpass-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.cpass-error-msg').innerHTML = 'Passwords Do Not Match';
        return false;
    }
    return true;
}