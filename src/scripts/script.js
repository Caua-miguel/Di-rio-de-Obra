function toggleTable(id) {
    const conteudo = document.getElementById(id);

    // Mostra a tabela clicada
    conteudo.classList.remove('hidden');
    conteudo.classList.add('display-table');

    // Esconde as outras tabelas
    const outrasTabelas = document.querySelectorAll('.general-table:not(#' + id + ')');
    outrasTabelas.forEach(tabela => {
        tabela.classList.remove('display-table');
        tabela.classList.add('hidden');
    });
}
