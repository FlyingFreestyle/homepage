console.log("Witaj wędrowcze...")

let lastUpdate = document.querySelector('.footer__date--js')
lastUpdate.innerHTML = 'Ostatnia aktualizacja: 07.2023'
console.log(lastUpdate.innerHTML)

function hello(name, age) {
  return `Witaj ${name}. Twój wiek to ${age}.`
}

console.log(hello("Janek", "20"))
console.log(hello("Ewa", "22"))
console.log(hello("Karol", "24"))
