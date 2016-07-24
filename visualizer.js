function line(x1, y1, x2, y2){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
}

function circle(x, y, r, fill){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.beginPath();
  c.arc(x, y, r, 0, 7, false);
  if (fill){
    c.fill();
  }
  c.stroke();
}

function triangle(x1, y1, x2, y2, x3, y3, fill){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.lineTo(x3, y3);
  c.lineTo(x1, y1);
  if (fill){
    c.fill();
  }
  c.stroke();
}

function rectangle(x1, y1, x2, y2, fill){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y1);
  c.lineTo(x2, y2);
  c.lineTo(x1, y2);
  c.lineTo(x1, y1);
  if (fill){
    c.fill();
  }
  c.stroke();
}
(function(){
  window.addEventListener('load', function(){
    document.getElementById('lButton').addEventListener('click', function(){
      var x1 = document.getElementById('lX1').value;
      var y1 = document.getElementById('lY1').value;
      var x2 = document.getElementById('lX2').value;
      var y2 = document.getElementById('lY2').value;
      line(x1, y1, x2, y2);
    });
  });
})();
