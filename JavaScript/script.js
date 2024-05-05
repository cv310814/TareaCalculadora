function calcular() {
    const name = document.getElementById('name').value;
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);

    const suma = value1 + value2;
    const resta = value1 - value2;
    const multiplicacion = value1 * value2;
    const division = value1 / value2;

    const resultados = `
        <p>Nombre: ${name}</p>
        <p>Suma: ${suma}</p>
        <p>Resta: ${resta}</p>
        <p>Multiplicación: ${multiplicacion}</p>
        <p>División: ${division}</p>
    `;

    document.getElementById('resultados').innerHTML = resultados;
}