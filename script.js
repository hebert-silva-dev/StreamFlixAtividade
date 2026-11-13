function hl(seletor, classe, duracao = 2500, atraso = 0) {
    const lista = typeof seletor === 'string'
        ? Array.from(document.querySelectorAll(seletor))
        : [seletor];
    lista.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => {
            el.classList.add(classe);
            setTimeout(() => el.classList.remove(classe), duracao);
        }, atraso + i * 200);
    });
}

function selecionarPorId() {
    const elemento = document.getElementById("titulo-filme");
    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);

    hl('#titulo-filme', 'elemento-selecionado');
    hl('#filme-principal', 'elemento-selecionado');
};

function selecionarPorClasse() {
    const elemento = document.getElementsByClassName("genero-acao");
    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);

    
    hl('.genero-acao', 'highlight-acao',  2500);
}

function selecionarPorQuery() {
    const elemento = document.querySelector(".filme-mini");
    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);

    
    hl('.filme-mini', 'elemento-selecionado');
}

function selecionarTodos() {
    const elemento = document.querySelector(".filme-mini" , ".filme-card");
    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);

    
    hl('.filme-mini', 'elemento-selecionado');
    hl('.filme-card', 'elemento-selecionado');
}



function mudarTexto(){
    const input = document.getElementById("input-busca");
    const titulo = document.getElementById("titulo-destaque");

    titulo.textContent = input;
}