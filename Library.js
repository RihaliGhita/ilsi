let books = [{ id: 1, 
    titre: "Clean Code", 
    auteur: "R. Martin", 
    prix: 250, stock: 12 }, 
    { id: 2,
     titre: "You Don't Know JS" ,
     auteur: "Kyle Simpson", prix: 180, stock: 5 }, 
    { id: 3, 
    titre: "Eloquent JavaScript",
     auteur: "Marijn Haverbeke", 
     prix: 150, stock: 0 }];

function addBook(titre, auteur, prix, stock){
     let max=0;
     for(let i=0;i<books.length;i++){
        if(books[i].id > max){
            max=books[i].id;
        }  
     }
     let livre={
        id:max+1,
        titre:titre,
        auteur:auteur,
        prix:prix,
        stock:stock
     }
    books.push(livre);
}

function getBooksByAuthor(auteur){
    let books1=books.filter(livre=>livre.auteur===auteur);
    console.log(books1);
}

function valeurStock(){
    let somme=0;
    for(let i=0;i<books.length;i++){

        let Price = books[i].prix * books[i].stock;
        console.log(Price);
        somme+=Price;
     }
  return somme;
}

function updateStock(id, newStock){
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books[i].stock = newStock;
        }
    }
}
function sortByPrice(){
    
}