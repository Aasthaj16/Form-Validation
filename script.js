$(document).ready(function () {
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var username_error = true;
    var email_error = true;
    var passowrd_error = true;
    var confirm_password_error = true;

    $('#username').keyup(function () {
        username_validation();
    });

    function username_validation() {
        var username_val = $('#username').val();
        if (username_val.length == '') {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot be Empty');
            $('#usernamevalidation').css('color', 'red');
            username_error = false;
            return false;
        }
        else {
            $('#usernamevalidation').hide();
        }

        if (username_val.length <= 4) {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should contain more than 4 characters');
            $('#usernamevalidation').css('color', 'red');
            username_error = false;
            return false;
        }
        else {
            $('#usernamevalidation').hide();
        }
    }

    $('#email').keyup(function () {
        email_validation();
    });

    function email_validation() {
        var email = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        var email_val = $('#email').val();
        if (email_val.length == '') {
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email Cannot be Empty');
            $('#emailvalidation').css('color', 'red');
            email_error = false;
            return false;
        }
        else {
            $('#emailvalidation').hide();
        }

        if (!email.test(email_val)) {
            $('#emailvalidation').show();
            $('#emailvalidation').html('Please type Email in correct format');
            $('#emailvalidation').css('color', 'red');
            email_error = false;
            return false;
        }
        else {
            $('#emailvalidation').hide();
        }
    }

    $('#password').keyup(function () {
        password_validation();
    });

    function password_validation() {
        var password1 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var password_val = $('#password').val();
        if (password_val.length == '') {
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password Cannot be Empty');
            $('#passwordvalidation').css('color', 'red');
            passowrd_error = false;
            return false;
        }
        else {
            $('#passwordvalidation').hide();
        }

        if (password_val.length <= 7) {
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password should contain atleast 8 characters');
            $('#passwordvalidation').css('color', 'red');
            passowrd_error = false;
            return false;
        }
        else {
            $('#passwordvalidation').hide();
        }

        if (!password1.test(password_val)) {
            $('#passwordvalidation').show();
            $('#passwordvalidation').html(`Password should contain: 
            1. Small and capital letters
            2. Atleast one special character
            3. Number`);
            $('#passwordvalidation').css('color', 'red');
            passowrd_error = false;
            return false;
        }
        else {
            $('#passwordvalidation').hide();
        }


    }


    $('#confirmpassword').keyup(function () {
        confirm_password();
    });

    function confirm_password() {
        var confirm_password_val = $('#confirmpassword').val();
        var password_val = $('#password').val();

        if (password_val != confirm_password_val) {
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password does not match');
            $('#confirmpasswordvalidation').css('color', 'red');
            $('#green-tick').css('background-color', '').css('color', '')
            confirm_passowrd_error = false;
            return false;
        }
        else {
            $('#confirmpasswordvalidation').hide();
            $('#green-tick').css('background-color', 'green').css('color', 'white')
        }
    }


    $('#submitvalidation').click(function () {
        username_validation();
        password_validation();
        confirm_password();
        email_validation();

        if (username_error == true && passowrd_error == true && confirm_password_error == true && email_error == true) {
            return true;
        }
        else {
            alert("Form Submitted successfully")
            return false;
        }

    });

});
