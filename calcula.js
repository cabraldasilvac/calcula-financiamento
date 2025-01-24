function limparFormulario(){
    document.getElementById('formSimulacao').reset();
    document.getElementById('resultados').style.display = 'none';
    document.getElementById('compartilhar').style.display = 'none';
    document.getElementById('simulacaoDadosExibido').style.display = 'none';
    document.getElementById('simulacaoDados').style.display = 'grid';
  }

  // Adiciona o event listener ao link "Fazer outra simulação"
    document.getElementById('resetForm').addEventListener('click', function(event) {
        event.preventDefault(); // Evita que o link recarregue a página
         limparFormulario(); // Chama a função para resetar o formulário e os resultados
    });

  function calcularSimulacao() {
      // 1. Obtenha os valores dos campos de entrada
        const precoVeiculo = parseFloat(document.getElementById('precoVeiculoInput').value);
        const valorEntrada = parseFloat(document.getElementById('valorEntradaInput').value);
        const taxaJuros = parseFloat(document.getElementById('taxaJurosInput').value) / 100;
        const numeroParcelas = parseInt(document.getElementById('numeroParcelasInput').value);

      // 2. Faça a validação dos dados fornecidos pelo usuário
      if (isNaN(precoVeiculo) || isNaN(valorEntrada) || isNaN(taxaJuros) || isNaN(numeroParcelas) || precoVeiculo <= 0 || valorEntrada <0 || taxaJuros <0 || numeroParcelas <= 0) {
            alert("Por favor, insira valores válidos nos campos.");
            return;
        }
      // 3. Calcule os resultados da simulação
        const valorFinanciado = precoVeiculo - valorEntrada;
        const jurosTotal = valorFinanciado * taxaJuros * numeroParcelas;
        const valorParcela = (valorFinanciado + jurosTotal) / numeroParcelas;
        const valorTotalFinanciamento = valorFinanciado + jurosTotal;
        const custoTotalVeiculo = valorEntrada + valorTotalFinanciamento;

      // 4. Atualize os elementos HTML com os resultados
        document.getElementById('precoVeiculoResult').innerText = precoVeiculo.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('valorEntradaResult').innerText = valorEntrada.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('valorFinanciamento').innerText = valorFinanciado.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('numeroParcelasResult').innerText = numeroParcelas;
        document.getElementById('valorParcela').innerText = valorParcela.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('valorTotalFinanciamento').innerText = valorTotalFinanciamento.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('custoTotalVeiculo').innerText = custoTotalVeiculo.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});

       // 5. Mostra os resultados e os botões de compartilhar
        document.getElementById('resultados').style.display = 'block';
        document.getElementById('compartilhar').style.display = 'flex';
        document.getElementById('simulacaoDados').style.display = 'none';
        document.getElementById('simulacaoDadosExibido').style.display = 'grid';
        document.getElementById('precoVeiculoExibido').innerText = 'R$ ' + precoVeiculo.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('valorEntradaExibido').innerText ='R$ ' + valorEntrada.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('taxaJurosExibido').innerText = taxaJuros * 100 + '% (mensal)';
        document.getElementById('numeroParcelasExibido').innerText = numeroParcelas;

  }