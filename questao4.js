// Questão //

let sp = 6783643;
let rj = 3667866;
let mg = 2922988;
let es = 2716548;
let others  = 1984953;

function percentual(){  
    let total = sp + rj + mg + es + others;
    
    let percentualSp = (sp / total) * 100;
    let percentualRj = (rj / total) * 100;
    let percentualMg = (mg / total) * 100;
    let percentualEs = (es / total) * 100;
    let percentualOthers = (others / total) * 100;
    
    console.log("Percentual de SP: " + percentualSp.toFixed(2) + "%");
    console.log("Percentual de RJ: " + percentualRj.toFixed(2) + "%");
    console.log("Percentual de MG: " + percentualMg.toFixed(2) + "%");
    console.log("Percentual de ES: " + percentualEs.toFixed(2) + "%");
    console.log("Percentual de Outros: " + percentualOthers.toFixed(2) + "%");    

}

percentual();