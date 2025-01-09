let numero = 1;

const SELECT_DIA = document.getElementById('select-dia');
const SELECT_MES = document.getElementById('select-mes');
const SELECT_ANO = document.getElementById('select-ano');

while (numero <= 31) {

    SELECT_DIA.innerHTML += `<option>${numero}</option>`;

//numero = numero + 1;
//numero += 1;
numero++;

}
// ---------------------------MES------------------------------------
//let mes = 1;

//do {
//    SELECT_MES.innerHTML += `<option>${mes}</option>`;
//    mes++;
//} while(mes <= 12);

let mes = 0; // Inicia com 0 para que o primeiro mês seja o índice 0 (Janeiro)
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Verificar se o SELECT_MES existe para evitar erros
if (SELECT_MES) {
    do {
        let option = document.createElement("option");
        option.textContent = meses[mes]; // Nome do mês por extenso
        option.value = mes + 1; // O valor será o número do mês (1 a 12)
        SELECT_MES.appendChild(option);
        mes++;
    } while (mes < 12); // Enquanto mes for menor que 12 (12 meses)
}

// ---------------------------MES------------------------------------
// for (let ano = 1950; ano <= 2025; ano++) {
// SELECT_ANO.innerHTML += `<option>${ano}</option>`;
// }

for (let ano = 2025; ano >= 1950; ano--) {
    SELECT_ANO.innerHTML += `<option>${ano}</option>`;
}

