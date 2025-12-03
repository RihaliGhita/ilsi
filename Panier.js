let panier=[];

function addItem(name,price){
    let Item={
      nom:name,
      prix:price
    }
    panier.push(Item);
}
function removeItm(nom){
    panier=panier.filter(Item=>Item.nom!==nom);
}
function total(){
  let total=0;
  for(let i=0;i<panier.length;i++){
       total+=panier[i].prix;
  }
  return total;
}
function list(){
  for(let i=0;i<panier.length;i++){
    console.log(panier[i].nom+","+panier[i].prix);
  }
}