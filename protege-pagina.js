(function() {
  const paginasProtegidas = [
    "central-de-pedidos",
    "pedidoextra",
    "pedidomensal"
  ];

  const caminhoAtual = window.location.pathname.toLowerCase();

  // Se estiver em uma página protegida e não estiver logado
  if (paginasProtegidas.some(p => caminhoAtual.includes("/" + p + "/")) &&
      sessionStorage.getItem("logado") !== "true") {

    // Para de carregar imediatamente
    window.stop();

    // Redireciona sem deixar voltar
    location.replace("/index.html");
  }
})();
