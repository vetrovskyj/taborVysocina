function validateName() {
    var name = document.getElementById('jmeno').value;
    if (name.length == 0) {
        alert("Prosím vyplňte jméno");
        return false;

    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Prosím používejte jen písmena ve jméně"); //Validation Message
        return false;
    }
    return true;
}

function validateMessage() {
    var message = document.getElementById('zprava').value;
    if (phone.length == 0) {
        alert("Prosím vyplňte zprávu"); //Validation Message
        return false;
    }

    if (!subject.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Prosím používejte jen písmena ve zprávě"); //Validation Message
        return false;
    }

    return true;

}

function validateEmail() {

    var email = document.getElementById('email').value;
    if (email.length == 0) {
        alert("Prosím vyplňte email"); //Validation Message
        return false;

    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Zadejte prosím platný email"); //Validation Message
        return false;

    }

    return true;

}

function validateSubject() {
    var subject = document.getElementById('predmet').value;
    if (name.length == 0) {
        alert("Prosím vyplňte předmět");
        return false;

    }
    if (!subject.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Prosím používejte jen písmena v předmětu"); //Validation Message
        return false;
    }
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateSubject()) {

        alert("Formulář nebyl odeslán"); //Validation Message
        return false;
    } else {
        submitted = true;
        return true;
    }
}