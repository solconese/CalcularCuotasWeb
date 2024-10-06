document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const monto = parseFloat(document.getElementById('monto').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    const interes = parseFloat(document.getElementById('interes').value) / 100;

    // Calcular monto total con interés
    const montoTotalConInteres = monto * (1 + interes);

    // Calcular valor de cada cuota
    const valorCuota = montoTotalConInteres / cuotas;

    // Calcular el valor de los intereses
    const intereses = montoTotalConInteres - monto;

    // Mostrar resultado
    const resultado = `
        <p>Monto Total con Interés: ${montoTotalConInteres.toFixed(2)}</p>
        <p>Valor de los intereses: ${intereses.toFixed(2)}</p>
        <p>Valor de cada cuota: ${valorCuota.toFixed(2)}</p>
    `;
    document.getElementById('resultado').innerHTML = resultado;
});
