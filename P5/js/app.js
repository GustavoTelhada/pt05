function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


for (var i=1; i<28; i++){
  var aluno = "aluno-";
  document.getElementById(aluno + i).style.color = getRandomColor();
}

