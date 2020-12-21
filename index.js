const SHOOTER = document.getElementById('shooter');
const CHANSON = document.getElementById('chanson');
const COUPLET = document.getElementById('couplet');
const RESULT = document.getElementById('result'); // Récupération de la <div></div> ou sera afficher le résultat
const EXP = /^\d{1,2}$/;

//Pour la chanson à partir d'un couplet
CHANSON.addEventListener('click', function () {
    let nb_shooter = SHOOTER.value;
    let text = "";
    let i = 0;

    if (EXP.test(nb_shooter) === true) {

        while (i < nb_shooter) {
            let shooter = "shooters";
            if (nb_shooter < 2) {
                shooter = "shooter";
            };

            text += `
            <br>
            ${nb_shooter} ${shooter} sans alcool sur le mur, ${nb_shooter} ${shooter} sans alcool.
            <br>`;
            //on passe shooters au singulier 
            if (nb_shooter - 1 <= 1) {
                shooter = "shooter";
            };
            //on change le zero en "plus de"
            if (nb_shooter - 1 == 0) {
                text += `Bois en un et au suivant ! Plus de shooters sans alcool sur le mur.
            <br>`;
            } else {
                text += `Bois en un et au suivant ! ${nb_shooter - 1} ${shooter} sans alcool sur le mur.
                <br>`;
            };

            if (nb_shooter - 1 == 0) {
                text += `<br>
                Plus de shooters sans alcool sur le mur, plus de shooters sans alcool.
                <br>
                Vas au supermarché pour en acheter, 99 shooters sans alcool sur le mur.`;
            }
            nb_shooter--;

        };

        RESULT.innerHTML = text;
    } else {
        RESULT.innerHTML = "Entrer un nombres compris entre 0 et 99 !";
    }
});


// Pour un couplet

COUPLET.addEventListener('click', function () {
    let nb_shooter = SHOOTER.value;
    let shooter = "shooters";
    let text = "";

    if (EXP.test(nb_shooter) === true) {
        if (nb_shooter == 2) {
            text += `
            <br>
            ${nb_shooter} shooters sans alcool sur le mur, ${nb_shooter} shooters sans alcool.
            <br>
            Bois en un et au suivant ! ${nb_shooter - 1} shooter sans alcool sur le mur.
            <br>`;
        } else if (nb_shooter == 1) {
            text += `
            <br>
            ${nb_shooter} shooter sans alcool sur le mur, ${nb_shooter} shooter sans alcool.
            <br>
            Bois en un et au suivant ! plus de shooters sans alcool sur le mur.
            <br>`;
        } else if (nb_shooter == 0) {
            text += `
        <br>
        Plus de shooters sans alcool sur le mur, plus de shooters sans alcool.
        <br>
        Vas au supermarché pour en acheter, 99 shooters sans alcool sur le mur.
        <br>`;
        } else {
            text += `
            <br>
            ${nb_shooter} ${shooter} sans alcool sur le mur, ${nb_shooter} ${shooter} sans alcool.
            <br>
            Bois en un et au suivant ! ${nb_shooter - 1} ${shooter} sans alcool sur le mur.
            <br>`;
        }


        RESULT.innerHTML = text;
    } else {
        RESULT.innerHTML = "Entrer un nombres compris entre 0 et 99 !";
    }
});