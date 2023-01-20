function trocatampo(img, name, description, vitrine, id) {
    tampoBtnProximo.setAttribute('href', `/site/tampos/cor/${vitrine}/${id}`);

    localStorage.setItem('imgTampo', img);
    localStorage.setItem('nameTampo', name);
    localStorage.setItem('descriptionTampo', description);
    imgTampoArea.setAttribute('src', img);
    nomeTampoArea.innerHTML = name;

}

function trocacorTampo(img, nomeCor, vitrineId) {
    localStorage.setItem('imgTampo', img);
    localStorage.setItem('nomeCor', nomeCor);
    window.location.href = `/site/cadeiras/${vitrineId}`;
}

function setTamanho(altura, largura, comprimento, item) {
    btnTamanhos.forEach(function (botao) {
        botao.classList.remove('active');
    });

    localStorage.setItem('altura', altura);
    localStorage.setItem('largura', largura);
    localStorage.setItem('comprimento', comprimento);
    tampoTamanho.innerHTML = `${largura} X ${comprimento}`;
    item.classList.add('active');
}
