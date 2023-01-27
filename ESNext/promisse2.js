function esperarPorSegunds(tempo = 2) {
    tempo = tempo * 1000
    return new Promise(function(resolve) {
        console.log('Exec promisse')
        setTimeout(function() {
            resolve('Vish')
        }, tempo)
    })
}


esperarPorSegunds(5)
    .then(esperarPorSegunds)
    .then(esperarPorSegunds)
    .then(esperarPorSegunds)
    .then(esperarPorSegunds)