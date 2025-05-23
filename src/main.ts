let valore = false 

if(typeof valore === 'string'){

    let valoreMaiscolo = valore.toUpperCase()
    console.log(valoreMaiscolo)

}else if(typeof valore === 'number'){

    let perDue = valore * 2
    console.log(perDue)

}else if(typeof valore === 'boolean'){

    console.log(valore ? 'Si' : 'No')

}
