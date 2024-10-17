const cellsTombola = () => {
  const tombolaNumbers = document.getElementById('tombolaNumbers')
  for (let i = 0; i < 76; i++) {
    const cellDiv = document.createElement('div')
    const numbersInside = document.createElement('h3')
    numbersInside.innerText = i + 1
    cellDiv.appendChild(numbersInside)
    tombolaNumbers.appendChild(cellDiv)
  }
  console.log(tombolaNumbers)
}
cellsTombola()

const formEstraction = (ev) => {
  ev.preventDefault()
  let randomTombola = Math.floor(Math.random() * 76) + 1
  const numbersInside = document.querySelectorAll('h3')
  for (let i = 0; i < numbersInside.length; i++) {
    if (randomTombola === parseInt(numbersInside[i].innerText)) {
      numbersInside[i].classList.add('numbersTombola')
      const number = parseInt(numbersInside[i].innerText)
    }
  }
}

// const formEstraction = (ev) => {
//   ev.preventDefault();

//   let randomTombola;

//   // Trova un numero che non è stato estratto
//   do {
//     randomTombola = Math.floor(Math.random() * 76) + 1;
//   } while (numbersEstracted.includes(randomTombola));

//   // Aggiungi il numero estratto alla lista
//   numbersEstracted.push(randomTombola);

//   // Trova tutti gli <h3> e applica la classe al numero estratto
//   const numbersInside = document.querySelectorAll('h3');
//   for (let i = 0; i < numbersInside.length; i++) {
//     if (randomTombola === parseInt(numbersInside[i].innerText)) {
//       numbersInside[i].classList.add('numbersTombola');
//     }
//   }
// };

const form = document.querySelector('form')
form.addEventListener('submit', formEstraction)
