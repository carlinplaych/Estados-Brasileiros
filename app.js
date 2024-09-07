function pesquisar() {
    
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value 
  if (campoPesquisa == "") {
      section.innerHTML = "<p>Nada foi encontrado. Digite um nome de estado.</p>"
    return
  }
  campoPesquisa = campoPesquisa.toLocaleLowerCase ()
    let resultados = ""
    let titulo = ""
    let descricao = ""
    
    for (let dado of dados) {
     titulo = dado.titulo.toLocaleLowerCase()
     descricao = dado.descricao.toLocaleLowerCase ()
      if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.localizacao}" target="_blank">Localização</a>
        </div>
      `;
    }
      }
      if (!resultados) {resultados = "<p>Nada foi encontrado.</p>"}
      section.innerHTML = resultados    
}

