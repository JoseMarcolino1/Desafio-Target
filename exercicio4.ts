
interface Lampada {
    ligada: boolean;
    nome: string;
}
  

function ligarLampada(lampada: Lampada) {
    lampada.ligada = true;
    console.log(`Lâmpada ${lampada.nome} está agora ligada.`);
}
  

function desligarLampada(lampada: Lampada) {
    lampada.ligada = false;
    console.log(`Lâmpada ${lampada.nome} está agora desligada.`);
}
  

function verificarLampada(lampada: Lampada): boolean {
    return lampada.ligada;
}
  
const lampada1: Lampada = { ligada: false, nome: "lampada 1" };
const lampada2: Lampada = { ligada: false, nome: "lampada 2" };
const lampada3: Lampada = { ligada: false, nome: "lampada 3" };
  
console.log("Estados iniciais das lâmpadas:");
console.log(`Lâmpada 1: ${lampada1.ligada}`);
console.log(`Lâmpada 2: ${lampada2.ligada}`);
console.log(`Lâmpada 3: ${lampada3.ligada}`);
  
ligarLampada(lampada1);
const salaVisitada1 = verificarLampada(lampada2); 

if (salaVisitada1) {
    console.log("Interruptor 1 controla a lâmpada 2.");
    desligarLampada(lampada1);
    ligarLampada(lampada3); 
    if (verificarLampada(lampada1)) {
        console.log("Interruptor 2 controla a lâmpada 1.");
        console.log("Interruptor 3 controla a lâmpada 3.");
    } else {
        console.log("Interruptor 2 controla a lâmpada 3.");
        console.log("Interruptor 3 controla a lâmpada 1.");
    }
} else {
    console.log("Interruptor 1 controla a lâmpada 3.");
    desligarLampada(lampada1);
    ligarLampada(lampada2); 
    if (verificarLampada(lampada3)) {
        console.log("Interruptor 2 controla a lâmpada 3.");
        console.log("Interruptor 3 controla a lâmpada 1.");
    } else {
        console.log("Interruptor 2 controla a lâmpada 1.");
        console.log("Interruptor 3 controla a lâmpada 2.");
    }
}
  
console.log("\nEstados finais das lâmpadas:");
console.log(`Lâmpada 1: ${lampada1.ligada}`);
console.log(`Lâmpada 2: ${lampada2.ligada}`);
console.log(`Lâmpada 3: ${lampada3.ligada}`);
