var slide = new Array("images/foret-peuplier.jpg", "images/paysage-montagne.jpg", "images/chemin-automne.jpg", "images/prairie-alpes.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
