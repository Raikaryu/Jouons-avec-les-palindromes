function isValidDate(dateStr){
    const [year, month, day] = dateStr.split('/').map(Number);
    if (year.toString().length !== 4) {
        console.log("Date invalide : année invalide");
        return
    }
    const date = new Date(year, month - 1, day);
    const isValid = date.getFullYear() === year && 
                    date.getMonth() === month - 1 && 
                    date.getDate() === day;
    if (isValid) {
        console.log("Date valide");
        return true
    } else {
        console.log("Date invalide");
        return false
    }
}

isValidDate("2024/01/28")
isValidDate("2024/15/28")
isValidDate("202/01/28")
isValidDate("2024/11/31")


