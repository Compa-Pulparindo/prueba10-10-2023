/**Permitir al usuario que permita sacar el área de un triangulo, cuadrado, rectangulo.*/

const base = document.getElementById("txtBase");
const altura = document.getElementById("txtAltura");
let resultado;

document.getElementById("btnTriangulo").addEventListener("click", function (e) {
  e.preventDefault();
  resultado = (base.value * altura.value) / 2;
  window.alert("Su resultado es " + resultado);
  funlimpiar();
});

document.getElementById("btnCuadrado").addEventListener("click", function (e) {
  e.preventDefault();
  resultado = base.value * base.value;
  window.alert("Su resultado es " + resultado);
  funlimpiar();
});

document
  .getElementById("btnRectangulo")
  .addEventListener("click", function (e) {
    e.preventDefault();
    resultado = base.value * altura.value;
    window.alert("Su resultado es " + resultado);
    document.getElementById("txtBase").value = "";
    funlimpiar();
  });

const funlimpiar = () => {
  document.getElementById("txtBase").value = "";
  document.getElementById("txtAltura").value = "";
};
