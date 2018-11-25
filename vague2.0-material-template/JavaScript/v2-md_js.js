
//    Copyright [2018] [Kevin David / Mystique Gaming]

//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at

//        http://www.apache.org/licenses/LICENSE-2.0

//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.



// Validation For Forms
function validateForm() {
    var name = document.querySelector('.name-input');               // Name Input Variable
    var email = document.querySelector('.email-input');             // Email Input Variable
    var pass = document.querySelector('.pass-input');               // Password Input Variable
    var cpass = document.querySelector('.cpass-input');             // Confirm Password Input Variable

    // Checks wether name input is empty and sets styles respectively
    if (name.value == "") {
        document.querySelector('.name-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.name-error-msg').innerHTML = 'Please Enter A Name';
        return false;
    }
    else {
        document.querySelector('.name-input').style.borderBottom = '2px solid #bdbdbd';
        document.querySelector('.name-error-msg').innerHTML = '';
    }

    // Checks wether email input is empty and sets styles respectively
    if (email.value == "") {
        document.querySelector('.email-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.email-error-msg').innerHTML = 'Please Enter A Email';
        return false;
    }

    // Checks wether email input contains an @ sign and sets styles respectively
    else if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.querySelector('.email-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.email-error-msg').innerHTML = 'Please Enter A Valid Email';
        return false; 
    } 
   
    // Checks wether email input contains '.' and sets styles respectively
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

    // Checks wether password input is empty and sets styles respectively
    if (pass.value == "") {
        document.querySelector('.pass-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.pass-error-msg').innerHTML = 'Please Enter A Password';
        return false;
    }
    else {
        document.querySelector('.pass-input').style.borderBottom = '2px solid #bdbdbd';
        document.querySelector('.pass-error-msg').innerHTML = '';
    }

    // Checks wether confirm password input is equal to password input and sets styles respectively
    if (cpass.value != pass.value) {
        document.querySelector('.cpass-input').style.borderBottom = '2px solid #d32f2f';
        document.querySelector('.cpass-error-msg').innerHTML = 'Passwords Do Not Match';
        return false;
    }
    return true;
}