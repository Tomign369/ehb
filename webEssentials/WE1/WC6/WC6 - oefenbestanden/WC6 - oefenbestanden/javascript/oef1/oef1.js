let kop1 = document.getElementById('kop1')
kop1.textContent = 'nieuwe inhoud uit JS'

let pees = document.getElementsByTagName('p')
console.log(pees[0])


let p1 = pees[0]

p1.innerHTML = '<strong> je Moeder</strong> is een slet =)';
p1.style.border = '3px solid red';
p1.style.display = 'inline-block';

let kop2 = document.getElementById('kop2');

// kop2.setAttribute('class','voorbeeld')

kop2.classList.add('nog-een-class', 'voorbeeld')
console.log(kop2.classList)


// if(pees != null) {
//   for( let i = 0; i < pees.length; i++) {
//     console.log(pees[i])
//   }

// }

// let vbn = document.getElementsByClassName('voorbeeld')
let intro = document.querySelector('.intro')


let vbn = document.querySelectorAll('.intro .voorbeeld:first-of-type')

// console.log(vbn)






