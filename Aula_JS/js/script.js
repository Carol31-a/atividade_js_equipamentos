let equipamentos = [];

function AdicionarEquipamento() {
    let equipamento = {
        "codigo": document.getElementById("codigo").value,
        "nome": document.getElementById("nome").value,
        "preco": parseFloat(document.getElementById("preco").value)
    };

    if (!equipamento.codigo || !equipamento.nome || isNaN(equipamento.preco)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    equipamentos.push(equipamento);
    LimparCampos();
}

function ExibirEquipamentos() {
    console.log(equipamentos);
}

function AtualizarPreco() {
    let codigo = document.getElementById("codigo").value;
    let novoPreco = parseFloat(document.getElementById("preco").value);

    if (!codigo || isNaN(novoPreco)) {
        alert("Por favor, forneça o código e o novo preço.");
        return;
    }

    for (let i = 0; i < equipamentos.length; i++) {
        if (equipamentos[i].codigo === codigo) {
            equipamentos[i].preco = novoPreco;
            console.log(`Preço do equipamento ${equipamentos[i].nome} atualizado para R$${novoPreco.toFixed(2)}`);
            break;
        }
    }

    LimparCampos();
}

function LimparCampos() {
    document.getElementById("codigo").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
}