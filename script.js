
window.addEventListener('scroll', function () {
    var div = document.getElementById('navigateur')
    if (window.scrollY > 100) {
        div.classList.add('scrooled')
    } else {
        div.classList.remove('scrooled')
    }
})






var letter = [
    "Développeur Fullstack",
    "Spécialiste Frontend",
    "Créateur d'interfaces",
    " Modernes et Fonctionnelles"
];

var letterIndex = 0
var onlyIndex = 0

var time = 100;
var pause = 100;

function eventletter() {
    if (onlyIndex < letter[letterIndex].length) {
        document.getElementById("text").innerHTML += letter[letterIndex].charAt(onlyIndex);
        onlyIndex++;
        setTimeout(eventletter, time);
    } else {

        setTimeout(() => {
            document.getElementById('text').innerHTML = "";
            onlyIndex = 0
            letterIndex = (letterIndex + 1) % letter.length;
            eventletter();
        }, pause)
    }
}

eventletter()


// Ajout du formulaire de contact

document.querySelectorAll('.toogleForm').forEach(button => {
    button.addEventListener('click', function () {
        // Basculer la classe 'show' sur le formulaire
        var contactForm = document.getElementById('contactForm');
        if (contactForm.classList.contains('show')) {
            contactForm.classList.remove('show'); // Retire la classe 'show' pour cacher
            setTimeout(() => {
                contactForm.style.display = 'none'; // Cache complètement après l'animation
            }, 500); // Délai correspondant à la durée de l'animation
        } else {
            contactForm.style.display = 'block'; // Affiche le formulaire
            setTimeout(function () {
                contactForm.classList.add('show'); // Ajoute la classe 'show' pour l'animation
            }, 90); // Petite temporisation pour permettre l'affichage
        }
    })
});





// JavaScript pour gérer les modals
document.querySelectorAll('.hover-btn').forEach(button => {
    button.addEventListener('click', function () {
        const modal = document.querySelector(this.dataset.target);
        modal.style.display = 'block'
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', function () {
        const modal = this.closest('.modal');
        modal.style.display = "none";
    });
});

window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});//script pour le modal













// Récupérer l'icône du menu et le menu


// Ajouter un événement de clic sur l'icône du menu

const menuIcon = document.getElementById('menu_icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('show-menu');

    if (menu.classList.contains('show-menu')) {
        menuIcon.innerHTML = '&times;'; // Affiche l'icône de fermeture
    } else {
        menuIcon.innerHTML = '&#9778;'; // Affiche l'icône du menu
    }
});








//formulaire de contact

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = event.target;
    fetch(form.action, {
        method: form.method, //Soumettre la requette en fonction de la method
        body: new FormData(form), //crée un objet FormData contenant toutes les données saisies.
        headers: {
            'Accept': 'application/json' //informe le serveur que la réponse attendue est en JSON.
        }
    }).then(reponse => {
        if (reponse.ok) {
            form.reset(); // Réinitialiser le formulaire
            Swal.fire({ //Si le formulaire est envoiye avec succes afficher ce message
                title: 'Succès!',
                text: 'Votre message a bien été envoyé!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else { //Si le formulaire n'a pas ete soumis avec succes afficher ce message 
            Swal.fire({
                title: 'Erreur',
                text: 'Une erreur est survenue, veuillez réessayer',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }).catch(error => { //Si le messge n'est pas soumis afficher l'erreur ce message d'erreur
        Swal.fire({
            title: 'Erreur',
            text: 'Une erreur est survenue, veuillez réessayer',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        console.error('Erreur : ', error); //Afficher l'erreur dans la console.log
    });
});


//code pour desactiver le click droit et empcher l'inspection 
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.onkeydown = function (e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74))) {
        return false;
    }
};






