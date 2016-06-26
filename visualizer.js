function line(x1, y1, x2, y2){
  var c = document.getElementById('c').getContext('2d');
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
}
