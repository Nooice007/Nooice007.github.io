
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
    
    console.log(hours)
    console.log(isMorning)
    console.log(isAfternoon) 
    console.log(isEvening)

if(isMorning){
    const h1 = document.querySelector('#welcome')
    h1.textContent = 'Good Moring'
    h1.style.fontWeight = "bold"
    h1.style.color = "Yellow"
    h1.style.fontSize = "xx-large"
}
if(isAfternoon){
    const h1 = document.querySelector('#welcome')
    h1.textContent = 'Good AfterNoon'
    h1.style.fontWeight = "bold"
    h1.style.color = "Orange"
    h1.style.fontSize = "xx-large"
}
if(isEvening){
    const h1 = document.querySelector('#welcome')
    h1.textContent = 'Good Evening'
    h1.style.fontWeight = "bold"
    h1.style.color = "Royalblue"
    h1.style.fontSize = "xx-large"
}


localStorage.getItem("It's a secret to everybody.")
localStorage.setItem("It's a secret to everybody.", ' "Beneath The Clothes, We Find A Man, And Beneath The Man We Find His... Nucleus." - Nacho Libre ')

