function line(x1, y1, x2, y2){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
}

function circle(x, y, r){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.beginPath();
  c.arc(x, y, r, 0, 7, false);
  c.stroke();
}
