function canviarColor() {
  const color = document.getElementById("color").value;
  document.body.style.backgroundColor = color;
}

function netejarCamp() {
  document.getElementById("firstname").value = "";
}

function comentaSiNo() {
    let resposta = document.getElementById("preg_si").value;
    console.log(resposta);
    if (resposta === "Sí") {
        document.getElementById("Coment").style.display="block";
    }
}
