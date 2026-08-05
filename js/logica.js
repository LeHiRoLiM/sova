document.documentElement.classList.add('animacoes-ativas');

const imagensDosTrabalhos = document.querySelectorAll('.trabalho-item');

if ('IntersectionObserver' in window) {
  const observadorDeTrabalhos = new IntersectionObserver((entradas, observador) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;

      entrada.target.classList.add('visivel');
      observador.unobserve(entrada.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -5% 0px'
  });

  imagensDosTrabalhos.forEach((imagem) => observadorDeTrabalhos.observe(imagem));
} else {
  imagensDosTrabalhos.forEach((imagem) => imagem.classList.add('visivel'));
}

const textosSobreNos = document.querySelectorAll('.animar-sobre-nos');

textosSobreNos.forEach((elemento, indice) => {
  elemento.style.setProperty('--atraso-animacao', `${indice * 0.08}s`);
});

if ('IntersectionObserver' in window) {
  const observadorSobreNos = new IntersectionObserver((entradas, observador) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;

      entrada.target.classList.add('visivel');
      observador.unobserve(entrada.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -5% 0px'
  });

  textosSobreNos.forEach((elemento) => observadorSobreNos.observe(elemento));
} else {
  textosSobreNos.forEach((elemento) => elemento.classList.add('visivel'));
}

const controleMenu = document.getElementById('controle-menu');

document.querySelectorAll('.links-principais a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (controleMenu) controleMenu.checked = false;
  });
});
