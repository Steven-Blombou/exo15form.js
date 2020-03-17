function validerform() {
        var myField = document.getElementById('myField');
        var erreurLabel = document.getElementById('erreurlabel');

        if(myField.value == "") {
            erreurLabel.innerHTML = 'Remplissez la perruche SVP.';
            return false;
        } else {
            erreurLabel.innerHTML = 'Perruche remplie MERCI.';
            return false;
        }
    }
