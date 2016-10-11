function line(x1, y1, x2, y2, color){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.strokeStyle = color || 'black';
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

function polygon(xs, ys, fill){
  'use strict';

  var c = document.getElementById('c').getContext('2d');
  c.beginPath();
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

function getPoint(shape, num){
  'use strict';

  var cx = document.getElementById('c').width;
  var cy = document.getElementById('c').height;
  var x = cx + Number(document.getElementById(shape + 'X' + num).value);
  var y = cy - Number(document.getElementById(shape + 'Y' + num).value);
  return [x, y];
}

(function(){
  'use strict';

  window.addEventListener('load', function(){
    // coordinateAxis();
    // grid();
    document.getElementById('lButton').addEventListener('click', function(){
      var [x1, y1] = getPoint('l', 1);
      var [x2, y2] = getPoint('l', 2);
      line(x1, y1, x2, y2);
    });
    document.getElementById('cButton').addEventListener('click', function(){
      var [x, y] = getPoint('c', '');
      var r = document.getElementById('cR').value;
      var fill = document.getElementById('cFill').checked;
      circle(x, y, r, fill);
    });
    document.getElementById('tButton').addEventListener('click', function(){
      var [x1, y1] = getPoint('t', 1);
      var [x2, y2] = getPoint('t', 2);
      var [x3, y3] = getPoint('t', 3);
      var fill = document.getElementById('tFill').checked;
      triangle(x1, y1, x2, y2, x3, y3, fill);
    });
    document.getElementById('rButton').addEventListener('click', function(){
      var [x1, y1] = getPoint('r', 1);
      var [x2, y2] = getPoint('r', 2);
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
        var [x, y] = getPoint('p', i);
        xs.push(x);
        ys.push(y);
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
