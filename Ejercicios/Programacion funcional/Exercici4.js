const primerDiaM = dias.find(dia => dia.startsWith('M'));
console.log(primerDiaM);

const posicionV = dias.findIndex(dia => dia.startsWith('V'));
console.log(posicionV);

const empiezaPorS = dias.some(dia => dia.startsWith('S'));
console.log(empiezaPorS);

const todosAcabanEnS = dias.every(dia => dia.endsWith('s'));
console.log(todosAcabanEnS);