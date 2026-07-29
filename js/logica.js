
  function rolarParaTrabalhos() {
    const destino = document.getElementById('trabalhos');
    const inicio = window.scrollY;
    const fim = destino.getBoundingClientRect().top + inicio;
    const duracao = 100;
    const tempoInicial = performance.now();

    function animar(tempoAtual) {
      const progresso = Math.min((tempoAtual - tempoInicial) / duracao, 1);
      const suavizacao = 1 - Math.pow(1 - progresso, 3);

      window.scrollTo(0, inicio + (fim - inicio) * suavizacao);

      if (progresso < 1) {
        requestAnimationFrame(animar);
      }
    }

    requestAnimationFrame(animar);
  }
