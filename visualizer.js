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

function setBackgroundImage(bg){
  'use strict';

  var c = document.getElementById('c');
  var bgString = Object.keys(bg).map(function(key){
    return 'url(' + (bg[key] ? key + '.svg' : '') + ')';
  }).join(',');
  c.style.backgroundImage = bgString;
}

function getPoints(shape, num){
  'use strict';

  var cx = document.getElementById('c').width / 2;
  var cy = document.getElementById('c').height / 2;
  var xs = [];
  var ys = [];
  for (var i = 1; i <= num; i++){
    var x = cx + Number(document.getElementById(shape + 'X' + i).value);
    var y = cy - Number(document.getElementById(shape + 'Y' + i).value);
    xs.push(x);
    ys.push(y);
  }
  return [xs, ys];
}

function isFill(shape){
  'use strict';

  return document.getElementById(shape + 'Fill').checked;
}

(function(){
  'use strict';

  window.addEventListener('load', function(){
    // coordinateAxis();
    // grid();
    document.getElementById('lButton').addEventListener('click', function(){
      var [xs, ys] = getPoints('l', 2);
      line(xs[0], ys[0], xs[1], ys[1]);
    });
    document.getElementById('cButton').addEventListener('click', function(){
      var [xs, ys] = getPoints('c', 1);
      var r = document.getElementById('cR').value;
      var fill = isFill('c');
      circle(xs[0], ys[0], r, fill);
    });
    document.getElementById('tButton').addEventListener('click', function(){
      var [xs, ys] = getPoints('t', 3);
      var fill = isFill('t');
      polygon(xs, ys, fill);
    });
    document.getElementById('rButton').addEventListener('click', function(){
      var [xs, ys] = getPoints('r', 2);
      var fill = isFill('r');
      xs = [xs[0], xs[0], xs[1], xs[1]];
      ys = ys.concat(ys.slice().reverse());
      polygon(xs, ys, fill);
    });

    var points = 4;
    document.getElementById('pAdd').addEventListener('click', function(){
      var [xs, ys] = getPoints('p', points);
      points++;
      var formX = 'x<sub>' + points + '</sub>:<input type="number" id="pX' + points + '">';
      var formY = 'y<sub>' + points + '</sub>:<input type="number" id="pY' + points + '">';
      document.getElementById('pPoints').innerHTML += formX + formY + '<br>';

      // repair points
      var cx = document.getElementById('c').width / 2;
      var cy = document.getElementById('c').height / 2;
      for (var i = 1; i < points; i++){
        document.getElementById("pX" + i).value = xs[i - 1] - cx;
        document.getElementById("pY" + i).value = cy - ys[i - 1];
      }
    });
    document.getElementById('pButton').addEventListener('click', function(){
      var [xs, ys] = getPoints('p', points);
      var fill = isFill('p');
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
