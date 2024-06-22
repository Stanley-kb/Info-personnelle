const monFormulaire = document.getElementById('monFormulaire')
// CHAMPS DE SAISIE
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const dateNaissance = document.getElementById('dateNaissance');

// AFFICHAGE DES MESSAGES
const messageNom = document.getElementById('messageNom');
const messagePrenom = document.getElementById('messagePrenom');
const messageEmail = document.getElementById('messageEmail');
const messageNaissance = document.getElementById('messageNaissance');

// BUTTONS
const buttonSubmit = document.getElementById('buttonSubmit');
const buttonReset = document.getElementById('buttonReset');

// REGEX
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// ACTIONS DES CHAMPS DE SAIES
nom.addEventListener('input' , function() {
    if (this.value.length < 4) {
        this.style.borderBottom = '3px solid red';
        this.style.color = 'red';

        this.value = this.value.toUpperCase();

        messageNom.innerHTML = '<p>4 characteres minimum chiffres et lettres.</p>';
        messageNom.style.color = 'red';

    } else {
        this.style.borderBottom = '3px solid green';
        this.style.color = 'green';
        this.value = this.value.toUpperCase();
        messageNom.innerHTML = '';
    }
})

prenom.addEventListener('input' , function() {
    if (this.value.length < 4) {
        this.style.borderBottom = '3px solid red';
        this.style.color = 'red';

        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);

        messagePrenom.innerHTML = '<p>4 characteres minimum chiffres et lettres.</p>';
        messagePrenom.style.color = 'red';
        
    } else {
        this.style.borderBottom = '3px solid green';
        this.style.color = 'green';
        messagePrenom.style.color = '';
        messagePrenom.innerHTML = '';
    }
})

email.addEventListener('input' , function() {
    if (email.value.match(emailRegex)) {
        this.style.borderBottom = '3px solid green';
        this.style.color = 'green';
        messageEmail.innerHTML = '';
    } else {
        this.style.borderBottom = '3px solid red';
        this.style.color = 'red';
        messageEmail.innerHTML = '<p>Veuillez saisir une adresse mail.</p>';
        messageEmail.style.color = 'red';
    }
})

dateNaissance.addEventListener('input' , function() {
    if (dateNaissance.value.match(dateRegex)) {
        this.style.borderBottom = '3px solid green';
        this.style.color = 'green';
        messageNaissance.innerHTML = '';
    } else {
        this.style.borderBottom = '3px solid red';
        this.style.color = 'red';
        messageNaissance.innerHTML = '<p>Veuillez saisir une date de naissance.</p>';
        messageNaissance.style.color = 'red';
    }
})

//  ACTION DE MES BUTTONS
buttonReset.addEventListener('click' , function () {
    nom.value ='';
    nom.style.borderBottom = '';
    nom.style.color = '';
    messageNom.innerHTML = '';
    
    prenom.value ='';
    prenom.style.borderBottom = '';
    prenom.style.color = '';
    messagePrenom.innerHTML = '';

    email.value ='';
    email.style.borderBottom = '';
    email.style.color = '';
    messageEmail.innerHTML = '';

    dateNaissance.value ='';
    dateNaissance.style.borderBottom = '';
    dateNaissance.style.color = '';
    messageNaissance.innerHTML = '';
})

buttonSubmit.addEventListener('click' , function() {
// boleens de mes input
    var nomValid = nom.value.length >= 4;
    var prenomValid = prenom.value.length >= 4;
    var emailValid = email.value.match(emailRegex);
    var dateNaissanceValid = dateNaissance.value.match(dateRegex);

    if (nomValid && prenomValid && emailValid && dateNaissanceValid ) {
        document.getElementById('monFormulaire').submit();
    } else {
        alert ('Informations saisies incorrecte !!!')
    }
})
