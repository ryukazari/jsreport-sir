function now() {
    return new Date().toLocaleDateString()
}

function nowPlus20Days() {
    var date = new Date()
    date.setDate(date.getDate() + 20);
    return date.toLocaleDateString();
}

function total(items) {
    var sum = 0
    items.forEach(function (i) {
        sum += parseFloat(i.monto_transferencia_interna)
    })
    return sum
}