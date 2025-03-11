function gerarRecibo() {
 document.getElementById('recibo_seu_nome').innerHTML = document.getElementById('seu_nome').value;
 document.getElementById('recibo_nome').innerHTML = document.getElementById('nome').value;
 document.getElementById('recibo_desc').innerHTML = document.getElementById('desc').value;
 document.getElementById('recibo_valor').innerHTML = parseFloat(document.getElementById('valor').value).toLocaleString('pt-br',{minimumFractionDigits: 2});
 document.getElementById('recibo_data').innerHTML = dataAtual();
 window.print();
}

function dataAtual() {
    let data = new Date();
    return data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear()
}