function validateForm() {
    var name = document.forms["vmd-form"]["name"];
    var email = document.forms["vmd-form"]["email"];
    var pass = document.forms["vmd-form"]["password"];
    var cpass = document.forms["vmd-form"]["c-password"];

    if (name.value == "") {
        document.getElementById('name-input').style.borderBottom = '2px solid #d32f2f';
        document.getElementById('name-error-msg').innerHTML = 'Please Enter A Name';
        return false;
    }
    else {
        document.getElementById('name-input').style.borderBottom = '2px solid #bdbdbd';
        document.getElementById('name-error-msg').innerHTML = '';
    }

    if (email.value == "") {
        document.getElementById('email-input').style.borderBottom = '2px solid #d32f2f';
        document.getElementById('email-error-msg').innerHTML = 'Please Enter A Email';
        return false;
    }
    else if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('email-input').style.borderBottom = '2px solid #d32f2f';
        document.getElementById('email-error-msg').innerHTML = 'Please Enter A Valid Email';
        return false; 
    } 
   
    else if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('email-input').style.borderBottom = '2px solid #d32f2f';
        document.getElementById('email-error-msg').innerHTML = 'Please Enter A Valid Email'; 
        return false; 
    }
    else {
        document.getElementById('email-input').style.borderBottom = '2px solid #bdbdbd';
        document.getElementById('email-error-msg').innerHTML = '';
    } 
    if (pass.value == "") {
        document.getElementById('pass-input').style.borderBottom = '2px solid #d32f2f';
        document.getElementById('pass-error-msg').innerHTML = 'Please Enter A Password';
        return false;
    }
    if (cpass.value != pass.value) {
        document.getElementById('cpass-input').style.borderBottom = '2px solid #d32f2f';
        document.getElementById('cpass-error-msg').innerHTML = 'Passwords Do Not Match';
        return false;
    }
    return true;
}