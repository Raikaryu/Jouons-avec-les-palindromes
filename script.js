// function isValidDate(dateStr){
//     const [year, month, day] = dateStr.split('/').map(Number);
//     if (year.toString().length !== 4) {
//         console.log("Date invalide : année invalide");
//         return
//     }
//     const date = new Date(year, month - 1, day);
//     const isValid = date.getFullYear() === year && 
//                     date.getMonth() === month - 1 && 
//                     date.getDate() === day;
//     if (isValid) {
//         console.log("Date valide");
//         return true
//     } else {
//         console.log("Date invalide");
//         return false
//     }
// }

function isPalindrome (dateStr){
    // La variable ci dessous me permets de remplacer tout ce qui n'est pas compris entre 0 et 9 par ''
    // let numberString = dateStr.replace(/[^0-9]/g, '')
    // Je lui demande de la séparer la chaine de caractère, de l'inversé et de la réassembler
    // let result = numberString.split('').reverse().join('')
    // return numberString === result
    
    // La variable récupère le string donner le sépare en retitant les / et rajoute un 0 devant les string qui ont moins de 2 caractères
    // let numberString = dateStr.split('/').map(String);
    // une autre façon de faire la variable ci-dessous
    let numberString = dateStr.split('/').map(part => part.padStart(2, '0'));
    // Je rassemble la chaine de caractère obtenue
    let dateNumber = numberString.join('')
    // Je lui demande de la séparer a nouveau, de l'inversé et de la réassembler
    let result = dateNumber.split('').reverse().join('')
    // ici je compare les résultat obtenu des deux variable au-dessus pour définir si ma date est bien un palindrome
    return dateNumber === result
}

console.log(isPalindrome("11/02/2011"))





