function line(x1, y1, x2, y2, color){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.strokeStyle = color || 'black';
  c.beginPath();
  x1 += 250;
  y1 = -y1 + 250;
  x2 += 250;
  y2 = -y2 + 250;
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
}

function circle(x, y, r, fill){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.beginPath();
  x += 250;
  y = -y + 250;
  c.arc(x, y, r, 0, 7, false);
  if (fill){
    c.fill();
  }
  c.stroke();
}

function polygon(xs, ys, fill){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.beginPath();
  xs = xs.map(function(x){ return x + 250; });
  ys = ys.map(function(y){ return -y + 250; });
  c.moveTo(xs[0], ys[0]);
  for (var i = 1; i < xs.length; i++){
    c.lineTo(xs[i], ys[i]);
  }
  c.lineTo(xs[0], ys[0]);
  if (fill){
    c.fill();
  }
  c.stroke();
}

function triangle(x1, y1, x2, y2, x3, y3, fill){
  'use strict';

  polygon([x1, x2, x3], [y1, y2, y3], fill);
}

function rectangle(x1, y1, x2, y2, fill){
  'use strict';

  polygon([x1, x2, x2, x1], [y1, y1, y2, y2], fill);
}

function coordinateAxis(){
  line(-250, 0, 250, 0, 'dakgray');
  line(0, -250, 0, 250, 'dakgray');
  for (var i = -200; i < 0; i += 50){
    line(i, -5, i, 5, 'dakgray');
    line(-5, i, 5, i, 'dakgray');
    line(i + 250, -5, i + 250, 5, 'dakgray');
    line(-5, i + 250, 5, i + 250, 'dakgray');
  }
}

function grid() {
  for (var i = -250; i < 250; i += 50){
    line(-250, i, 250, i, 'gainsboro');
    line(i, -250, i, 250, 'gainsboro');
  }
}

function setBackgroundImage(bg){
  'use strict';

  var c = document.getElementById('c');
  var bgString = Object.keys(bg).map(function(key){
    return 'url(' + (bg[key] ? key + '.svg' : '') + ')';
  }).join(',');
  c.style.backgroundImage = bgString;
}

(function(){
  'use strict';

  window.addEventListener('load', function(){
    // coordinateAxis();
    // grid();
    document.getElementById('lButton').addEventListener('click', function(){
      var x1 = document.getElementById('lX1').value;
      var y1 = document.getElementById('lY1').value;
      var x2 = document.getElementById('lX2').value;
      var y2 = document.getElementById('lY2').value;
      line(x1, y1, x2, y2);
    });
    document.getElementById('cButton').addEventListener('click', function(){
      var x = document.getElementById('cX').value;
      var y = document.getElementById('cY').value;
      var r = document.getElementById('cR').value;
      var fill = document.getElementById('cFill').checked;
      circle(x, y, r, fill);
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

    var points = 4;
    document.getElementById('pAdd').addEventListener('click', function(){
      points++;
      var formX = 'x<sub>' + points + '</sub>:<input type="number" id="pX' + points + '">';
      var formY = 'y<sub>' + points + '</sub>:<input type="number" id="pY' + points + '">';
      document.getElementById('pPoints').innerHTML += formX + formY + '<br>';
    });
    document.getElementById('pButton').addEventListener('click', function(){
      var xs = [];
      var ys = [];
      for (var i = 1; i <= points; i++){
        xs.push(document.getElementById('pX' + i).value | 0);
        ys.push(document.getElementById('pY' + i).value | 0);
      }
      var fill = document.getElementById('pFill').checked;
      polygon(xs, ys, fill);
    });

    var bg = {
      axis: true,
      scale: true,
      grid: true
    };
    document.getElementById('bAxis').addEventListener('change', function(e){
      bg.axis = e.target.checked;
      setBackgroundImage(bg);
    });
    document.getElementById('bScale').addEventListener('change', function(e){
      bg.scale = e.target.checked;
      setBackgroundImage(bg);
    });
    document.getElementById('bGrid').addEventListener('change', function(e){
      bg.grid = e.target.checked;
      setBackgroundImage(bg);
    });
  });
})();
