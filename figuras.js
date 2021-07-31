// Código del cuadrado
console.group("Cuadrados")

function perimetroCuadrdo(lado) {
    return lado * 4;
} 

function areaCuadrdo(lado) {
    return lado * lado;
} 
console.groupEnd();

// Código del triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

// Código del círculo
console.group("Círculos")

// Radio


//Diámetro
function diametroCirculo(radio){
    return radio *2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
const areaCirculo = (radio) =>Math.PI * (radio * radio);

console.groupEnd();

//Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrdo(value);
    alert (perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrdo(value);
    alert (area);
}
//Triangulo
function calcularPerimetroTriangulo() {
    const inputLado1 = parseFloat(
      document.getElementById("InputTrianguloLado1").value
    );
    const inputLado2 = parseFloat(
      document.getElementById("InputTrianguloLado2").value
    );
    const inputBase = parseFloat(
      document.getElementById("InputTrianguloBase").value
    );
    const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);
    alert(perimetro);
  }

  function calcularAreaTriangulo() {
    const inputBase = parseFloat(
      document.getElementById("InputTrianguloBase").value
    );
    const inputAltura = parseFloat(
      document.getElementById("InputTrianguloAltura").value
    );
    const area = areaTriangulo(inputBase, inputAltura);
    alert(area);
  }
  
//Circulo
function calcularPerimetroCirculo() {
    const InputRadio = parseFloat (document.getElementById("InputCirculo").value);
    const perimetro = perimetroCirculo(InputRadio);
    alert(perimetro)
}

function calcularAreaCirculo() {
    const InputRadio = parseFloat (document.getElementById("InputCirculo").value);
    const area = areaCirculo (InputRadio);
    alert(area);
}
//Triangulo Isósceles
function trianguloIso(){
    let lado1 = document.getElementById("isoLado1");
    let iLado1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("isoLado2");
    let iLado2 = parseFloat(lado2.value);

    let base = document.getElementById("isoBase");
    let iBase = parseFloat(base.value);

    if(iLado1 != iLado2){
        alert("No se puede calcular debido a que los lados son diferentes");
    }else{
        const pequenoLado2 = iBase /2; 
        const pequenoBase = iLado1;

        const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
        const pequenoBaseCuadrado = pequenoBase * pequenoBase;
         
        let pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

        const grandeAltura = pequenoLado1;
        alert(`La altura del triangulo es: ${grandeAltura}cm`);
    }
}