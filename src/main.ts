let valore: unknown

if (typeof valore === 'string') {

  let valoreMaiscolo = valore.toUpperCase()
  console.log(valoreMaiscolo)

} else if (typeof valore === 'number') {

  let perDue = valore * 2
  console.log(perDue)

} else if (typeof valore === 'boolean') {

  console.log(valore ? 'Si' : 'No')

} else if (valore === null) {

  console.log('Il dato é vuoto')

} else if (Array.isArray(valore)) {

  console.log(valore.length)

} else if (valore instanceof Promise) {

  valore.then(risultato => console.log(risultato))
    .catch(error => console.error(error))

} else {

  console.log('Tipo non supportato')

}
