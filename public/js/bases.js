// area das bases
function trocabase(img, name, description, vitrine, id) {
    localStorage.setItem('imgBase', img);
    localStorage.setItem('nameBase', name);
    localStorage.setItem('descriptionBase', description);
    imgBaseArea.setAttribute('src', img);
    nomeBaseArea.innerHTML = name;
    baseBtnProximo.setAttribute('href', `/site/bases/cor/${vitrine}/${id}`);

}

function trocacorBase(img, nomeCor, vitrineId) {
    localStorage.setItem('imgBase', img);
    localStorage.setItem('nomeCor', nomeCor);
    window.location.href = `/site/tampos/${vitrineId}`;
}

