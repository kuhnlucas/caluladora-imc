

//segundo 


let registrosImc = [];

while (true) {
    let peso = parseFloat(prompt("Ingrese su peso en kg:"));
    let altura = parseFloat(prompt("Ingrese su altura en centímetros:")) / 100; // Convertir altura a metros

    if (isNaN(peso) || isNaN(altura) || peso <= 35 || peso >= 300 ||altura <= 140 ||altura >= 230) {
        alert("Por favor, ingrese valores válidos.");
    } else {
        function calcularImc(peso, altura) {
            return peso / (altura * altura);
        }

        let resultado = calcularImc(peso, altura);
        console.log("Tu IMC es: " + resultado);

        if (resultado < 18.5) {
            alert("Insuficiencia Ponderal.");
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            alert("Peso Normal.");
        } else if (resultado >= 25 && resultado <= 29.9) {
            alert("Sobrepeso.");
        } else if (resultado >= 30 && resultado <= 34.9) {
            alert("Obesidad tipo I.");
        } else if (resultado >= 35 && resultado <= 39.9) {
            alert("Obesidad tipo II.");
        } else {
            alert("Obesidad tipo III (mórbida)");
        }
    } 
    let categoriasPesajes = {};
let categoriasMesesDePesaje = {};

let categoriaMesRegistrado;
let pesoMesRegistrado;

do {
    categoriaMesRegistrado = prompt(("Seleccione un mes:\n1. Enero\n2. Febrero\n3. Marzo\n4. Abril\n5. Mayo\n6. Junio\n7. Julio\n8. Agosto\n9. Septiembre\n10. Octubre\n11. Noviembre\n12. Diciembre"));

    if (categoriaMesRegistrado.toUpperCase() !== ('selecione una opcion "\n1. Enero\n2. Febrero\n3. Marzo\n4. Abril\n5. Mayo\n6. Junio\n7. Julio\n8. Agosto\n9. Septiembre\n10. Octubre\n11. Noviembre\n12. Diciembre." o escribar salir'));
    
    if (categoriaMesRegistrado !== null && categoriaMesRegistrado.toLowerCase() !== "salir")
    
    {
        pesoMesRegistrado = parseInt(prompt("Ingrese el peso que desea registrar."));

        if (!isNaN(pesoMesRegistrado) && pesoMesRegistrado > 0) {
            let mesRegistrado = {
                mes: categoriaMesRegistrado.toUpperCase(),
                peso: pesoMesRegistrado
            };
            registrosImc.push(mesRegistrado);

            if (categoriasMesesDePesaje[categoriaMesRegistrado]) {
                categoriasMesesDePesaje[categoriaMesRegistrado] += pesoMesRegistrado;
            } else {
                categoriasMesesDePesaje[categoriaMesRegistrado] = pesoMesRegistrado;
            }

            if (categoriasPesajes[categoriaMesRegistrado]) {
                categoriasPesajes[categoriaMesRegistrado]++;
            } else {
                categoriasPesajes[categoriaMesRegistrado] = 1;
            }
        } else {
            alert("Por favor, ingrese un peso válido.");
        }
    }
} while (categoriaMesRegistrado.toUpperCase() !== "SALIR");

// aca calculalo el total de pesajes en el mes
function calcularTotalPesajes() {
    return registrosImc.reduce((acc, mes) => acc + mes.peso, 0).toFixed(2);
}

// aca calculo promedio de pesajes
function calcularPromedioDePeso() {
    let total = calcularTotalPesajes();
    let promedio = total / registrosImc.length;
    return parseFloat(promedio.toFixed(2));
}

console.log("Pesajes mensuales: ", registrosImc);
console.log("Total de pesajes en el mes: ", calcularTotalPesajes());
console.log("Promedio de peso: ", calcularPromedioDePeso());
console.log("Pesajes por mes: ", categoriasPesajes);
console.log("Pesajes de cada mes: ", categoriasMesesDePesaje);

    let respuesta = prompt("¿Desea calcular otro IMC? (s/n)");
    if (respuesta.toLowerCase() !== 's') {
        break;
    }
}

alert("Gracias por usar CalculatorIMCpro.");


