let criptografias = 0;

function criptografar() {
    var origemTextArea = document.getElementById('origemTextArea').value;
    var textoAlterado = origemTextArea
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('destinoTextArea').value = textoAlterado;
    if(criptografias==0)
        {
            transformarTextoSecundario();
        }
}

function descriptografar() {
    var origemTextArea = document.getElementById('origemTextArea').value;
    var textoAlterado = origemTextArea
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('destinoTextArea').value = textoAlterado;
    if(criptografias==0)
        {
            transformarTextoSecundario();
        }
}

function copiar() {
    var origemTextArea = document.getElementById('destinoTextArea').value;
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = origemTextArea;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand ('copy');
    document.body.removeChild(tempTextArea);
    // showMessage("Mensagem copiada");
}

function transformarTextoSecundario() {
    document.getElementById("informacoes__secundario").style.display = "none";
    document.getElementById("texto__secundario").style.display = "block";
}