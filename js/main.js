/** 
*!Il programma dovrà consentire di calcolare il prezzo del 
*!panino selezionando o deselezionando gli ingredienti
*!proposti.Consigli del giorno:
*!Create inizialmente un html base con gli elementi minimi 
*!necessari al funzionamento, passate poi alla parte JS 
*!ragionando come sempre a step.
*!Prima la logica in italiano e poi traduciamo in codice.
*!console.log() è nostro amico.
*!Quando tutto funziona passate alla parte visiva lavorando al 
*!css.
*/let panino ={
    nome:"",
    aggiunte:[],
    prezzo:50
}


let sconti=[
    {
        codice:"ciao",
        sconto:0.8
    },
    {
        codice:"buono",
        sconto:0.5
    }
];
document.getElementById("price").innerHTML=panino.prezzo;
let c;
document.getElementById("input").addEventListener("click",function(event){
    c=event.target;
    if (c.checked == true){
        panino.aggiunte.push(c.id);
        panino.prezzo+=5;
        document.getElementById("price").innerHTML=panino.prezzo;
    } else if (c.checked == false){
        panino.aggiunte.pop(c.id);
        panino.prezzo-=5;
        document.getElementById("price").innerHTML=panino.prezzo;
    }
})

document.getElementById("nome_panino").addEventListener("keyup",function(e){
    if (e.key =="Enter"){
        let nome_panino=document.getElementById("nome_panino").value;
        panino.nome=nome_panino;
    }
})

document.getElementById("discount").addEventListener("keyup",function(e){
     if (e.key === 'Enter') {
         let sconto=document.getElementById("discount").value;
         let position=controllo_codice(sconto);
         if (position!=-1){
             panino.prezzo=panino.prezzo*sconti[position].sconto;
         }
         else{
             console.log("codice non valido");
         }
      // code for enter
    }
})

function controllo_codice(s){
    for(let i=0;i<sconti.length;i++){
        if(s==sconti[i].codice)
            return i;
    }
    return -1;
}