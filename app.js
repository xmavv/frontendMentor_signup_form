const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    // zapobiegamy wyslaniu, bo chcemy dokonac walidacji
    e.preventDefault();

    validateInputs();
});

//jest tylko jeden parametr, wiec nie musze dawac nawiasow
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const setError = (element, message) => {
    //wchodzimy do elementu, bierzemy jego rodzica czyli tego diva z kazdym inputem i potem w tym divie szukamy
    //klasy error i wyswietlamy w niej zadany przez nas tekst WOW
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    //false if it is not right format, true if it is gooooood
};

const validateInputs = () => {
    //bierzemy wartosc z kazdego pola poprzez metode value
    //trim usuwa wszystkie biale znaki ze stringa
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    //teraz dodajemy kazdy warunek ktory chcemy

    if(fnameValue === '') {
        setError(fname, 'First Name cannot be empty');
    } else {
        setSuccess(fname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last Name cannot be empty');
    } else {
        setSuccess(lname);
    }

    if(emailValue === '') {
        setError(email, 'Email Adress cannot be empty');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length <= 6) { 
        setError(password, 'Password must be greater than 6 characters');
    } else {
        setSuccess(password);
    }
};