// //1 
// let secondH1 = document.getElementsByTagName('h1')[1]
// console.log(secondH1.innerText);

// //2 
// // méthode1
// let lastLi = document.getElementsByTagName('li')[3]
// console.log(lastLi.innerText);
// // méthode2
// let myUl = document.getElementsByTagName('ul')[0]
// console.log(myUl.lastElementChild.innerText);
// // méthode3
// let lastLi2 = document.getElementsByTagName('li')
// console.log(lastLi2[lastLi2.length - 1].innerText);


// //3
// // méthode1
// let para = document.getElementsByTagName('p')[0].innerText.toUpperCase()
// console.log(para);
// //méthode2
// let div1 = document.getElementsByTagName('div')[0]
// let para2 = div1.getElementsByTagName('p')[0].innerText.toUpperCase()
// console.log(para2);

// //4
// let list = document.getElementsByTagName('li')
// console.log(list);

// let test = [].slice.call(list)
// console.log(test);
// let listArray = Array.from(list)
// console.log(listArray);

// listArray.forEach(element => {
//     console.log(element.innerText.toUpperCase());
// });

// // ### 1. Affiche le contenu textuel du second h1
// let secondh1 = document.getElementsByTagName('h1')[1]
// console.log(secondh1.innerHTML);

// // ### 2. Affiche le contenu textuel du dernier li
// let ul = document.getElementsByTagName('ul')[0]
// console.log(ul.lastElementChild.innerHTML);

// // ### 3. Affiche le contenu textuel du premier p en majuscule
// let premierP = document.getElementsByTagName('p')[0].innerHTML.toUpperCase();
// console.log(premierP);


// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule
let list = document.getElementsByTagName('li')
console.log(list);

// création du array a partir de list
let listArray = Array.from(list)
console.log(listArray);

// foreach list et afficher le texte en majusctule
listArray.forEach(element=> {
    console.log(element.innerText.toUpperCase());
})