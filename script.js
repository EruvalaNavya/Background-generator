document.getElementById('generate-btn').addEventListener('click', function() {
  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  var resultBox = document.getElementById('result-box');

  resultBox.style.background = 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')';
});
