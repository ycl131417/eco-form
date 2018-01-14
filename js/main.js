//containers
var progress = document.getElementsByClassName('progress')[0];
var container = document.getElementsByClassName('container')[0];
var slider_ctr = document.getElementsByClassName('slider-ctr')[0];
var slider = [];
for (var i = 0; i < 8; i++) {
  slider.push(document.getElementsByClassName('slider-' + i)[0]);
}

//answers
var quantity = [
  [1, 1, 1, 3, 1, 4, 2, 4],
  [1, 2, 1, 1, 1, 1, 2, 2],
  [3, 2, 2, 4, 4],
  [3, 5, 7, 3, 3, 5, 3, 2],
  [6, 6, 6],
  [3, 4, 2, 2],
  [5, 3, 2]
];
var ans = [];
for (var i = 0; i < 7; i++) {
  ans.push([]);
  var question_num = quantity[i].length;
  for (var j = 0; j < question_num; j++) {
    ans[i].push([]);
    var answer_num = quantity[i][j];
    for (var k = 0; k < answer_num; k++) {
      ans[i][j].push(document.getElementById('ans-' + i + '-' + j + '-' + k));
    }
  }
}

//nav button
next = [];
prev = [];
for (var i = 0; i < 8; i++) {
  next.push(document.getElementById('next-' + i));
  prev.push(document.getElementById('prev-' + i));
}

//add event listener
ans[0][0][0].addEventListener('focusout', example);
ans[0][5][0].addEventListener('change', function() { shortansA(this, 0, 5, 1); });
ans[0][5][2].addEventListener('change', function() { shortansA(this, 0, 5, 3); });
ans[0][6][0].addEventListener('focusout', compass);
ans[3][2][0].addEventListener('change', function() { shortansB(this, 3, 2); });
ans[3][3][0].addEventListener('change', function() { shortansB(this, 3, 3); });
ans[3][5][0].addEventListener('change', function() { shortansB(this, 3, 5); });
ans[3][6][0].addEventListener('change', function() { shortansB(this, 3, 6); });
ans[3][7][0].addEventListener('change', function() { shortansA(this, 3, 7, 1); });
ans[4][1][0].addEventListener('change', function() { shortansB(this, 4, 1); });
ans[4][2][4].addEventListener('change', function() { shortansA(this, 4, 2, 5); });
ans[5][2][0].addEventListener('change', function() { shortansA(this, 5, 2, 1); });
ans[5][3][0].addEventListener('change', function() { shortansA(this, 5, 3, 1); });
ans[6][0][0].addEventListener('change', function() { shortansB(this, 6, 0); });
ans[6][2][0].addEventListener('change', function() { shortansA(this, 6, 2, 1); });
for (var i = 0; i < 7; i++) {
  (function() {
    var j = i;
    next[j].addEventListener('click', function() { swap(j, j + 1); });
  }());
  (function() {
    var j = i + 1;
    prev[j].addEventListener('click', function() { swap(j, j - 1); });
  }());
}

window.onload = function() {
  slider_ctr.style.height = slider[0].offsetHeight + 'px';
};

function example() {
  if (this.value !== 'example') return;
  var example_ans = [
    [['李小明'], ['宜蘭縣宜蘭市'], ['30'], ['0', '1', '0'], ['4'],
      ['1', 'e1', '1', 'e1'], ['西南', '東北'], ['0', '1', '1', '1']],
    [['10-96-2300-00-1'], ['105.01.13', '105.03.10'], ['555'],
      ['1469'], ['9.57'], ['303.6'], ['1', '0'], ['1', '0']],
    [['1', '0', '0'], ['0', '1'], ['1', '0'],
      ['1', '1', '0', '1'], ['0', '1', '0', '0']],
    [['1', '0', '1'], ['1', '1', '0', '0', '0'],
      ['1', 'e4', 'e1', 'e0', 'e1', 'e0', 'e0'], ['1', 'e2', 'e0'],
      ['1', '0', '0'], ['1', 'e2', 'e1', 'e1', 'e1'],
      ['1', 'e1', 'e1'], ['1', 'e3']],
    [['1', '0', '0', '0', '1', '1'], ['1', 'e1', 'e0', 'e0', 'e0', 'e1'],
      ['1', '0', '0', '1', '1', 'e2']],
    [['1', '1', '1'], ['0', '1', '0', '1'], ['1', 'e3'], ['0', '0']],
    [['1', 'e3', 'e1', 'e0', 'e1'], ['1', '0', '1'], ['1', 'e3']]
  ];
  for (var i = 0; i < 7; i++) {
    var question_num = example_ans[i].length;
    for (var j = 0; j < question_num; j++) {
      var answer_num = example_ans[i][j].length;
      for (var k = 0; k < answer_num; k++) {
        var val = '';
        if (example_ans[i][j][k].charAt(0) === 'e') {
          ans[i][j][k].disabled = false;
          val = example_ans[i][j][k].substr(1);
        }
        else {
          val = example_ans[i][j][k];
        }
        if (ans[i][j][k].type === 'text') {
          ans[i][j][k].value = val;
        }
        else {
          if (val === '1') {
            ans[i][j][k].checked = true;
          }
          else {
            ans[i][j][k].checked = false;
          }
        }
      }
    }
  }
}

function shortansA(element, i, j, k) {
  if (element.checked) {
    ans[i][j][k].disabled = false;
    ans[i][j][k].placeholder = '您的回答';
    ans[i][j][k].focus();
  }
  else {
    ans[i][j][k].disabled = true;
    ans[i][j][k].placeholder = '0';
    ans[i][j][k].value = '';
  }
}

function shortansB(element, i, j) {
  var group_num = ans[i][j].length;
  if (element.checked) {
    for (var k = 1; k < group_num; k++) {
      ans[i][j][k].disabled = false;
    }
    ans[i][j][1].placeholder = '您的回答';
    ans[i][j][1].focus();
  }
  else {
    for (var k = 2; k < group_num; k++) {
      ans[i][j][k].disabled = true;
      ans[i][j][k].checked = false;
    }
    ans[i][j][1].disabled = true;
    ans[i][j][1].placeholder = '0';
    ans[i][j][1].value = '';
  }
}

function compass() {
  var position = this.value;
  var result = '';
  for (var i = 0; i < position.length; i++) {
    if (position.charAt(i) === '東') {
      result += '西';
    }
    else if (position.charAt(i) === '西') {
      result += '東';
    }
    else if (position.charAt(i) === '南') {
      result += '北';
    }
    else if (position.charAt(i) === '北') {
      result += '南';
    }
  }
  ans[0][6][1].value = result;
}

function swap(current, next) {
  scrollToTop(current, next);
}

var timeOut;
function scrollToTop(current, next) {
	if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
		window.scrollBy(0, -50);
		timeOut = setTimeout(scrollToTop, 10, current, next);
	}
  else {
    clearTimeout(timeOut);
    setTimeout(swap_slider, 200, current, next);
  }
}

function swap_slider(current, next) {
  progress.classList.remove('slider-' + current + '-active');
  progress.classList.add('slider-' + next + '-active');
  container.classList.remove('slider-' + current + '-active');
  container.classList.add('slider-' + next + '-active');
  slider_ctr.style.height = slider[next].offsetHeight + 'px';
}
