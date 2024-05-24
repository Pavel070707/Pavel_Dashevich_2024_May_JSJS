// #### Task 1 💻

let a = 'true'
let b = false
let c = 17
let d = undefined
let j = null

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(j))


// #### Task 2 💻
let height = 115
let width = 20

if(height > width){
    console.log(height)
} else {
    console.log(width)
}

// #### Task 3 💻

for (let i = 1; i <= 20; i++){
    if(!(i % 3)){
        console.log(i)
    }
}

// #### Task 4 💻

let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = key && documents && pen && (apple || orange)
console.log(shouldGoToWork)

// #### Task 5 💻

/*

let num = prompt('Введите число!')

if(!(num % 5 || num % 3)){
    console.log("FizBuz")
} else if (!(num % 5)){
    console.log("Fiz")
} else if(!(num % 3)){
    console.log("Buz")
} else {
    console.log("число не делится без остатка на 3 и/или на 5") 
}

// #### Task 6 💻

let age = prompt('Введите ваш возраст:')

if (age >= 18 && age < 80) {
    console.log(`Попей пивка`);
} else if (age < 16) {
    console.log(`Пей колу`);
} else if (age >= 16 && age < 18) {
    console.log(`Можешь выкурить сигаретку, только маме не говори`);
} else if (age >= 80) {
    console.log("Поздравляем, вы долгожитель");
} else {
    console.log("Введен некорректный возраст");
}
*/
// #### Task 7 💻

/*

let direction = prompt('В какую сторону света вы бы хотели отправиться:').toLowerCase()


switch(direction){
    case "юг" :{
        console.log("на юг пойдешь счастье найдешь")
        break
    }
    case "север":{
        console.log("на север пойдешь счастье найдешь")
        break
    }
    case "запад":{
        console.log("на запад пойдешь счастье найдешь")
        break
    }
    case "восток":{
        console.log("на восток пойдешь счастье найдешь")
        break
    }
    default:{
        console.log("попробуй еще раз")

    }
}

*/

// #### Task 8 💻

/*

let fullName = prompt("Введите ваше имя и фамилию: ").toLowerCase()

let words = fullName.split(' ')

for(let i = 0; i < words.length; i++){
    let word = words[i]
    words[i] = word[0].toUpperCase() + word.slice(1)
}

let correctedName = words.join(' ')



alert(`Привет, ${correctedName}!`);

*/

// #### Task 9 👨‍🏫
/*

let num1 = prompt("Введите число: ")
let num2 = Number(prompt("Введите число: "))
let num3 = Number(prompt("Введите число: "))
let num4 = Number(prompt("Введите число: "))
let num5 = Number(prompt("Введите число: "))
let result = (((num1 - num2) + num3) * num4) / num5

alert(`(((${num1}-${num2})+${num3})*${num4})/${num5} = ${result}`)

*/

// #### Task 10 👨‍🏫

let tree = '#'
let result = ''

for (let i = 0; i <= 6; i++){
    if (i > 0) {
        result += '\n';
    }
    
    for(let b = 0; b <= i; b++){
        result += tree

    }
}

console.log(result)