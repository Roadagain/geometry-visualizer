function line(x1, y1, x2, y2, color){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  if (color){
    c.strokeStyle = color;
  }
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

function coordinateAxis(){
  line(0, 250, 500, 250, 'dakgray');
  line(250, 0, 250, 500, 'dakgray');
  for (var i = 50; i < 250; i += 50){
    line(i, 245, i, 255, 'dakgray');
    line(245, i, 255, i, 'dakgray');
    line(500 - i, 245, 500 - i, 255, 'dakgray');
    line(245, 500 - i, 255, 500 - i, 'dakgray');
  }
}

function grid() {
  for (var i = 50; i < 500; i += 50){
    line(0, i, 500, i, '#f0f0f0');
    line(i, 0, i, 500, '#f0f0f0');
  }
}

(function(){
  'use strict';

  window.addEventListener('load', function(){
    coordinateAxis();
    grid();
    document.getElementById('lButton').addEventListener('click', function(){
      var x1 = document.getElementById('lX1').value;
      var y1 = document.getElementById('lY1').value;
      var x2 = document.getElementById('lX2').value;
      var y2 = document.getElementById('lY2').value;
      line(x1, y1, x2, y2);
    });
    document.getElementById('tButton').addEventListener('click', function(){
      var x1 = document.getElementById('tX1').value;
      var y1 = document.getElementById('tY1').value;
      var x2 = document.getElementById('tX2').value;
      var y2 = document.getElementById('tY2').value;
      var x3 = document.getElementById('tX3').value;
      var y3 = document.getElementById('tY3').value;
      var fill = document.getElementById('tFill').checked;
      triangle(x1, y1, x2, y2, x3, y3, fill);
    });
    document.getElementById('rButton').addEventListener('click', function(){
      var x1 = document.getElementById('rX1').value;
      var y1 = document.getElementById('rY1').value;
      var x2 = document.getElementById('rX2').value;
      var y2 = document.getElementById('rY2').value;
      var fill = document.getElementById('rFill').checked;
      rectangle(x1, y1, x2, y2, fill);
    });
  });
})();
