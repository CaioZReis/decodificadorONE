let criptografias = 0;

function estiloAlura() {
    document.getElementById("pagestyle").setAttribute("href", "./styles/stylealura.css");
    var switchElement = document.getElementById("toggleSwitch");
    if(switchElement.checked) {
        document.getElementById("imagemAviso").setAttribute("src", "./img/CircleBlack-Check--Streamline-Tabler-Filled.png");
        document.getElementById("paragrafoAviso").textContent = "Pode utilizar maiúsculas e com acento";
    } else {
        document.getElementById("imagemAviso").setAttribute("src", "./img/WarningBlack-Octagon--Streamline-Core.png");
        document.getElementById("paragrafoAviso").textContent = "Apenas letras  minúsculas e sem acento";
    }
}

function estiloAluraAlt() {
    document.getElementById("pagestyle").setAttribute("href", "./styles/stylealuraalt.css");
    var switchElement = document.getElementById("toggleSwitch");
    if(switchElement.checked) {
        document.getElementById("imagemAviso").setAttribute("src", "./img/CircleWhite-Check--Streamline-Tabler.png");
        document.getElementById("paragrafoAviso").textContent = "Pode utilizar maiúsculas e com acento";
    } else {
        document.getElementById("imagemAviso").setAttribute("src", "./img/WarningWhite-Octagon--Streamline-Core.png");
        document.getElementById("paragrafoAviso").textContent = "Apenas letras  minúsculas e sem acento";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('toggleSwitch').addEventListener('change', function() {
    var switchElement = document.getElementById("toggleSwitch");
    let currentStyle = document.getElementById("pagestyle").getAttribute("href");
    if(currentStyle === "./styles/stylealura.css"){ 
        if(switchElement.checked) { 
            document.getElementById("imagemAviso").setAttribute("src", "./img/CircleBlack-Check--Streamline-Tabler-Filled.png");
            document.getElementById("paragrafoAviso").textContent = "Pode utilizar maiúsculas e com acento";
        } else {
            document.getElementById("imagemAviso").setAttribute("src", "./img/WarningBlack-Octagon--Streamline-Core.png");
            document.getElementById("paragrafoAviso").textContent = "Apenas letras  minúsculas e sem acento";
        }
        } else {
            if(switchElement.checked) {
                document.getElementById("imagemAviso").setAttribute("src", "./img/CircleWhite-Check--Streamline-Tabler.png");
                document.getElementById("paragrafoAviso").textContent = "Pode utilizar maiúsculas e com acento";
            } else {
                document.getElementById("imagemAviso").setAttribute("src", "./img/WarningWhite-Octagon--Streamline-Core.png");
                document.getElementById("paragrafoAviso").textContent = "Apenas letras  minúsculas e sem acento";
            }
        }
    });
});

async function colarTexto() {
    try {
        const texto = await navigator.clipboard.readText();
        
        document.getElementById("origemTextArea").value = texto;
    } catch (err) {
        alert("Não foi possível colar o texto. Permita o acesso à área de transferência.");
    }
}

function limparTexto() {
    document.getElementById("origemTextArea").value = "";
}

function criptografar() {
        var switchElement = document.getElementById("toggleSwitch");
        if(switchElement.checked) {
            var origemTextArea = document.getElementById('origemTextArea').value;
            var textoAlterado = origemTextArea
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat')
            .replace(/E/g, 'ENTER')
            .replace(/I/g, 'IMES')
            .replace(/A/g, 'AI')
            .replace(/O/g, 'OBER')
            .replace(/U/g, 'UFAT')
            .replace(/É/g, 'ÉNTER')
            .replace(/Ê/g, 'ÊNTER')
            .replace(/Í/g, 'ÍMES')
            .replace(/Á/g, 'ÁI')
            .replace(/À/g, 'ÀI')
            .replace(/Â/g, 'ÂI')
            .replace(/Ã/g, 'ÃI')
            .replace(/Ó/g, 'ÓBER')
            .replace(/Ô/g, 'ÔBER')
            .replace(/Õ/g, 'ÕBER')
            .replace(/Ú/g, 'ÚFAT')
            .replace(/Ü/g, 'ÜFAT');

            document.getElementById('destinoTextArea').value = textoAlterado;
            if(criptografias==0)
                {
                    transformarTextoSecundario();
                }
        } else {
            var origemTextArea = document.getElementById('origemTextArea').value;
            var textoAlterado = origemTextArea
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');


            var textoMinusculo = textoAlterado.toLowerCase();
            document.getElementById('destinoTextArea').value = textoMinusculo;
            if(criptografias==0)
                {
                    transformarTextoSecundario();
                }
        }
}

function descriptografar() {
    var switchElement = document.getElementById("toggleSwitch");
        if(switchElement.checked) {
            var origemTextArea = document.getElementById('origemTextArea').value;
            var textoAlterado = origemTextArea
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u')
            .replace(/ENTER/g, 'E')
            .replace(/IMES/g, 'I')
            .replace(/AI/g, 'A')
            .replace(/OBER/g, 'O')
            .replace(/UFAT/g, 'U')
            .replace(/ÉNTER/g, 'É')
            .replace(/ÊNTERÊ/g, 'Ê')
            .replace(/ÍMES/g, 'Í')
            .replace(/ÁI/g, 'Á')
            .replace(/ÀI/g, 'À')
            .replace(/ÂI/g, 'Â')
            .replace(/ÃI/g, 'Ã')
            .replace(/ÓBER/g, 'Ó')
            .replace(/ÔBER/g, 'Ô')
            .replace(/ÕBER/g, 'Õ')
            .replace(/ÚFAT/g, 'Ú')
            .replace(/ÜFAT/g, 'Ü');

            document.getElementById('destinoTextArea').value = textoAlterado;
            if(criptografias==0)
                {
                    transformarTextoSecundario();
                }
        } else {
            var origemTextArea = document.getElementById('origemTextArea').value;
            var textoAlterado = origemTextArea
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');


            var textoMinusculo = textoAlterado.toLowerCase();
            document.getElementById('destinoTextArea').value = textoAlterado;
            if(criptografias==0)
                {
                    transformarTextoSecundario();
                }
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