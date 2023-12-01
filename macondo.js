// Dinero que le pagan a Hildebrando
let salario = 2500000;

// Dinero disponible para gastos durante las vacaciones
let dineroDisponible = salario;

// Día viernes, Hildebrando decide qué comer en el aeropuerto
let opcionComida = "mekatico";

// Costos de las opciones de comida
const costoAlmojabana = 15000;
const costoSubway = 23000;

// Condiciones para determinar qué elige Hildebrando y actualizar el dinero disponible
if (opcionComida === "almojabana") {
    console.log("Hildebrando compró una almojabana con gaseosa. No se siente bien.");
    dineroDisponible -= costoAlmojabana;
} else if (opcionComida === "subway") {
    console.log("Hildebrando compró un subway con gaseosa. Se siente llenito y bien.");
    dineroDisponible -= costoSubway;
} else {
    console.log("Hildebrando no compró nada en el aeropuerto.");
}

// Imprimir el dinero disponible después de la compra en el aeropuerto
console.log(`Dinero disponible después de la compra: ${dineroDisponible}`);

// Hildebrando compra un recuerdo en Medellín

let costoRecordatorioMed = 33000; 

// Actualizar el dinero disponible después de comprar en Medellín

dineroDisponible -= costoRecordatorioMed;

// Imprimir el dinero disponible después de la compra en Medellín
console.log(`Dinero disponible después de la compra en Medellín: ${dineroDisponible}`);

// Dimensiones originales de la maleta de Hildebrando
let altoOriginal = 60;
let largoOriginal = 40;
let anchoOriginal = 20;

// Dimensiones permitidas por la aerolínea
let altoPermitido = 55;
let largoPermitido = 40;
let anchoPermitido = 20;

// Calcular factores de reducción para cada dimensión
let factorReduccionAlto = altoPermitido / altoOriginal;
let factorReduccionLargo = largoPermitido / largoOriginal;
let factorReduccionAncho = anchoPermitido / anchoOriginal;

// Encontrar el factor de reducción más pequeño
let factorReduccionMasPequeno = Math.min(factorReduccionAlto, factorReduccionLargo, factorReduccionAncho);

// Calcular las nuevas dimensiones ajustadas
let nuevoAlto = altoOriginal * factorReduccionMasPequeno;
let nuevoLargo = largoOriginal * factorReduccionMasPequeno;
let nuevoAncho = anchoOriginal * factorReduccionMasPequeno;

// Redondear las nuevas dimensiones a dos decimales
nuevoAlto = Math.round(nuevoAlto * 100) / 100;
nuevoLargo = Math.round(nuevoLargo * 100) / 100;
nuevoAncho = Math.round(nuevoAncho * 100) / 100;

// Imprimir resultados
console.log("Dimensiones originales de la maleta:");
console.log(`Alto: ${altoOriginal} cm, Largo: ${largoOriginal} cm, Ancho: ${anchoOriginal} cm`);
console.log("\nDimensiones permitidas por la aerolínea:");
console.log(`Alto: ${altoPermitido} cm, Largo: ${largoPermitido} cm, Ancho: ${anchoPermitido} cm`);
console.log("\nNuevas dimensiones ajustadas para cumplir con el tamaño permitido:");
console.log(`Nuevo Alto: ${nuevoAlto} cm, Largo: ${nuevoLargo} cm, Ancho: ${nuevoAncho} cm`);

// Función para convertir binario a decimal
function binarioADecimal(binario) {
    return parseInt(binario, 2);
}

// Función para convertir decimal a caracter
function decimalACaracter(decimal) {
    return String.fromCharCode(decimal);
}

// Contraseña cifrada en binario
let contraseñaBinaria = "01110010_01101001_01110111_01101001";

// Eliminar underscores y dividir la cadena en partes binarias
let partesBinarias = contraseñaBinaria.split('_').map(binario => binario.trim());

// Convertir cada parte binaria a decimal y luego a caracter
let contraseñaDescifrada = partesBinarias.map(binarioADecimal).map(decimalACaracter).join('');

// Costo por hora de wifi
let costoWifiPorHora = 50000;

// Número de horas para asegurar la reserva
let horasWifi = 1; // Puedes ajustar esto según sea necesario

// Calcular el costo total del wifi
let costoTotalWifi = costoWifiPorHora * horasWifi;

// Imprimir resultados
console.log(`Contraseña descifrada: ${contraseñaDescifrada}`);
console.log(`Costo total del wifi: ${costoTotalWifi} COP`);

// Dinero disponible después de la compra en Medellín
let dineroDisponiblem = 2000000; // Ajusta este valor según el dinero disponible real

// Función para simular el juego de papel, piedra o tijera
function jugarPapelPiedraTijera() {
    // 0: papel, 1: piedra, 2: tijera
    const opciones = ["papel", "piedra", "tijera"];
    const opcionUsuario = Math.floor(Math.random() * 3); // Elige una opción al azar para el usuario
    const opcionTaxista = Math.floor(Math.random() * 3); // Elige una opción al azar para el taxista

    console.log(`Hildebrando elige: ${opciones[opcionUsuario]}`);
    console.log(`Taxista elige: ${opciones[opcionTaxista]}`);

    if (opcionUsuario === opcionTaxista) {
        console.log("Empate. No pasa nada.");
    } else if (
        (opcionUsuario === 0 && opcionTaxista === 1) ||
        (opcionUsuario === 1 && opcionTaxista === 2) ||
        (opcionUsuario === 2 && opcionTaxista === 0)
    ) {
        console.log("Hildebrando gana. El taxista no le cobra nada.");
    } else {
        console.log("Taxista gana. Se descontará del dinero disponible.");
        dineroDisponible -= 300000;
    }
}

// Realizar la negociación jugando papel, piedra o tijera
jugarPapelPiedraTijera();

// Imprimir el dinero disponible después de la negociación
console.log(`Dinero disponible después de la negociación: ${dineroDisponiblem} COP`);

// Variables iniciales
let diasEnMacondo = 0;
let vivo = true;
let dineroGastado = 0;

// Función para simular una actividad
function realizarActividad(actividad, colorVestimenta) {
    console.log(`Día ${diasEnMacondo + 1}: Hildebrando lleva ropa de color ${colorVestimenta}`);

    switch (actividad) {
        case "amarillo":
            console.log("Actividad: Ir a la piscina");
            let meterseEnLaPiscina = Math.random() < 0.5; // 50% de probabilidad de meterse en la piscina

            if (meterseEnLaPiscina) {
                console.log("Hildebrando se mete en la piscina...");
                console.log("¡Oh no! El agua tiene demasiado cloro. Hildebrando muere.");
                vivo = false;
            } else {
                console.log("Hildebrando decide no meterse en la piscina. No pasa nada.");
            }
            break;

        case "verde":
            console.log("Actividad: Caminatas");
            let hacerCaminata = Math.random() < 0.5; // 50% de probabilidad de hacer la caminata

            if (hacerCaminata) {
                console.log("Hildebrando decide hacer toda la caminata hasta la hermosa cascada.");
                console.log("Se toma fotos en la cascada y la pasa genial.");
            } else {
                console.log("Hildebrando decide no hacer la caminata completa.");
                console.log("Llega a cierto punto, se devuelve solo y se pierde de noche.");
                vivo = false;
            }
            break;

        case "roja":
            console.log("Actividad: Actividades en la playa");
            let jugarVoleibol = Math.random() < 0.5; // 50% de probabilidad de jugar voleibol
            let nadarEnElMar = Math.random() < 0.5; // 50% de probabilidad de nadar en el mar

            if (jugarVoleibol) {
                console.log("Hildebrando juega voleibol y la pasa genial.");
            }

            if (nadarEnElMar) {
                console.log("Hildebrando nada en el mar y monta moto.");
                console.log("Luego de tomar cocteles, siente un fuerte dolor de cabeza y pierde la visión.");
                console.log("Chirrinchi adulterado. Hildebrando se tiene que devolver de emergencia.");
                vivo = false;
            }
            break;

        case "azul":
            console.log("Actividad: Actividades dentro del hotel");
            let jugarBingo = Math.random() < 0.5; // 50% de probabilidad de jugar bingo
            let bailar = Math.random() < 0.5; // 50% de probabilidad de bailar
            let apostarEnCasino = Math.random() < 0.5; // 50% de probabilidad de apostar en el casino

            if (jugarBingo) {
                console.log("Hildebrando juega bingo y gana, aumentando su dinero.");
                dineroGastado -= 10000; // Hildebrando gana dinero en el bingo
            }

            if (bailar) {
                console.log("Hildebrando baila y la pasa muy bien.");
            }

            if (apostarEnCasino) {
                console.log("Hildebrando apuesta en el casino y solo se queda con el pasaje de regreso.");
                dineroGastado += 50000; // Costo del pasaje de regreso
            }
            break;
    }

    console.log("------");

    // Incrementar el contador de días en Macondo
    diasEnMacondo++;

    // Retornar el resultado de la actividad
    return {
        diasEnMacondo: diasEnMacondo,
        vivo: vivo,
        dineroGastado: dineroGastado,
    };
}

// Realizar actividades para cada día
for (let dia = 0; dia < 4; dia++) {
    // Actividades según el patrón de vestimenta para cada día
    let resultadoActividad;
    switch (dia) {
        case 0:
            resultadoActividad = realizarActividad("amarillo", "amarillo");
            break;
        case 1:
            resultadoActividad = realizarActividad("verde", "verde");
            break;
        case 2:
            resultadoActividad = realizarActividad("roja", "roja");
            break;
        case 3:
            resultadoActividad = realizarActividad("azul", "azul");
            break;
    }

    // Verificar si Hildebrando sigue vivo
    if (!resultadoActividad.vivo) {
        console.log("Hildebrando ha muerto. Terminan las vacaciones.");
        break;
    }

    // Verificar si Hildebrando ha regresado después de 4 días
    if (dia === 3) {
        console.log(`Hildebrando ha estado en Macondo durante ${resultadoActividad.diasEnMacondo} días.`);
        console.log(`¿Hildebrando regresó o murió? ${resultadoActividad.vivo ? "Regresó" : "Murió"}.`);
        console.log(`Dinero gastado por Hildebrando: ${resultadoActividad.dineroGastado} COP.`);
    }
}
console.log("soygit")
