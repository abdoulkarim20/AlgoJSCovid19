TestRepons=[];
let cptm=0;
let cptnm=0;
let cptcg=0;
let nomComplet="";
let leCorpsChaud="";
let fievre ="";
let temperature=0;
nomComplet =prompt("Bienvenu dans notre application pour test Covid\n Veuillez saisire votre nom")
do {
   leCorpsChaud = prompt("Votre corps chauffe ? \n Repondez par Oui Non")
} while (leCorpsChaud!=="Oui" && leCorpsChaud!=="Non");
if(leCorpsChaud==="Oui"){
    cptm++;
}else{
    cptnm++;
}

do {
   fievre = prompt("Avez-vous de la fievre ? \n Repondez par Oui Non")
 } while (fievre!=="Oui" && fievre!=="Non");
 if(fievre==="Oui"){
     cptm++;
 }else{
     cptnm++;
 }

//  do {
//     temperature = prompt("Entrez votre temperature \ La temperature d'un etre humaine varie entre 36 a 39 Veuillez respectez la consigne")
//   } while (!(temperature<36 || temperature>=39));
temperature = prompt("Entrez votre temperature")
  if(temperature < 35.5 || temperature <= 39){
      cptm++;
  }else if(temperature==37){
      cptnm++;
  }else{
      cptcg++;
  }
// console.log("malade "+cptm);
// console.log("non malade "+cptnm);
// console.log("cas grave "+cptcg)
if(cptm>cptnm && temperature<35.5 || temperature>=39){
    alert("Vous souspectez davoir les symptome mineurs de fievre");
}else if(cptnm>cptm && cptcg){
    alert("Vous ne portez pas des symptome de covide");
}else{
    alert("Uregence Appelez le 1818");
}



// nom =prompt("Bienvenu dans notre application pour test Covid\n Veuillez saisire votre nom");
let resultat=TestRepons.push(nomComplet,leCorpsChaud,fievre,temperature);
console.log(TestRepons);