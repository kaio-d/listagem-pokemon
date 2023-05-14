const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscurtoEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscurtoEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./scr/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./scr/imagens/moon.png");
  }
});
