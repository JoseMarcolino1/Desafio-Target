// Sequência 1
const sequencia1 = [1, 3, 5, 7];
const proximoNumero1 = sequencia1[sequencia1.length - 1] + 2;
console.log("Próximo número da sequência 1:", proximoNumero1);

// Sequência b
const sequencia2 = [2, 4, 8, 16, 32, 64];
const proximoNumero2 = sequencia2[sequencia2.length - 1] * 2;
console.log("Próximo número da sequência 2:", proximoNumero2);

// Sequência c
const sequencia3 = [0, 1, 4, 9, 16, 25, 36];
const proximoNumero3 = Math.pow(sequencia3.length, 2);
console.log("Próximo número da sequência 3:", proximoNumero3);

// Sequência d
const sequencia4 = [4, 16, 36, 64];
const proximoNumero4 = Math.pow(sequencia4.length + 2, 2);
console.log("Próximo número da sequência 4:", proximoNumero4);

// Sequência e
const sequencia5 = [1, 1, 2, 3, 5, 8];
const proximoNumeroE = sequencia5[sequencia5.length - 1] + sequencia5[sequencia5.length - 2];
console.log("Próximo número da sequência 5:", proximoNumeroE);
