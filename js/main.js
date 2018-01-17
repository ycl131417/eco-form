//containers
var progress = document.getElementsByClassName('progress')[0];
var container = document.getElementsByClassName('container')[0];
var slider_ctr = document.getElementsByClassName('slider-ctr')[0];
var slider = [];
for (var i = 0; i < 8; i++) {
  slider.push(document.getElementsByClassName('slider-' + i)[0]);
}
var select_ctr = document.getElementsByClassName('select-ctr')[0];
var suggestion_ctr = document.getElementsByClassName('suggestion-ctr')[0];

//answers
var quantity = [
  [1, 1, 1, 3, 1, 4, 4],
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

//grading
var single_grade;
var section_grade;
var total;
var weight = [
  [[0], [0], [0], [0, 0, 0], [0], [0, 0, 0, 0], [0, 0, 0, 0]],
  [[0], [0, 0], [0], [0], [0], [0], [3, -3], [2, -2]],
  [[1, 2, 3], [1, 2], [1, 2], [-1, 2, 3, 4], [-1, -1, 2, 2]],
  [[-2, 2, 2], [-2, -1, 1, 2, 2], [0, 2, -1, 1, 2, 3, -1], [0, 2, -1], [1, 2, 3],
    [0, 2, -1, -1, -1], [0, 2, -2], [0, -1]],
  [[-1, 1, 1, 2, 2, 2], [0, 1, -1, -1, -1, 2], [1, 1, 3, -1, 0, 1]],
  [[-1, 2, -1], [-1, 1, 2, 3], [0, 1], [0, 3]],
  [[0, 1, -1, 2, 2], [1, 1, 1], [0, 1]]
];

//grade types
var grade_type = [
  '最佳典範節能家庭',
  '找出關鍵即可省',
  '最有節能潛力'
]

//city
var city = document.getElementsByClassName('city');

//suggestion
var average = [
  [0, 0, 6.13, 6.1, 5.7, 0.9, 5.13],
  [0, 0, 6.21, 5.56, 5.66, 0.37, 4.93]
]
var judge = [
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0'],
  ['l3', 'g1', 'l2', 'g1', 'g2'],
  ['g2', 'g0', 'g2', 'g2', 'g3', 'g2', 'g2', 'l0'],
  ['g4', 'g1', 'l2'],
  ['g1', 'g2', '0', '0'],
  ['g2', 'g1','0']
]
var suggestion = [
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['多用自然光就能少開電燈', '換燈具時考慮使用檯燈', '照明源越靠近使用者效率越高',
    '家中燈具陸續全面改成 LED 燈', '請持續養成有必要才開燈，用完關閉的習慣'],
  ['自然風是最健康的空氣，請優先考慮開窗', '記得隨氣候變化開關氣窗',
    '冷氣是家中最耗電的電器，能少用就盡量少用', '暖氣設備要小心勿長時間開啟',
    '冰箱如太老舊耗電會超出想像', '陰雨天可以長期使用除濕機但最好門窗緊閉效果比較好',
    '熱水器洗澡前才開，全家用完後記得關掉',
    '1 或 2 級能源效率標章電器購買時雖貴但後續用電少從節省電費回收成本'],
  ['廚房家電瞬間用電大，要小心電線與插頭的清潔，免得發生意外',
    '熱水瓶記得夏天不用時可以關掉或拔插頭', '開火煮菜時先開抽油煙機，再點火保健康'],
  ['烘衣機耗電大，非到連天潮濕衣服不乾時才用',
    '使用加壓馬達時，只要一開水龍頭就會啟動馬達非常耗電，如能不用加壓馬達最好不用',
    '', ''],
  ['電腦與無線網路在睡眠時不用可以關閉節電', '電視或網路不用時請關閉電源', '']
]
var output;

//nav button
next = [];
prev = [];
for (var i = 0; i < 8; i++) {
  next.push(document.getElementById('next-' + i));
  prev.push(document.getElementById('prev-' + i));
}

//result
var score = document.getElementById('score');
var score_bar = document.getElementById('score-bar');
var types = document.getElementById('types');

//add event listener
ans[0][0][0].addEventListener('click', option);
ans[0][1][0].addEventListener('focusout', example);
ans[0][5][0].addEventListener('change', function() { shortansA(this, 0, 5, 1); });
ans[0][5][2].addEventListener('change', function() { shortansA(this, 0, 5, 3); });
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
next[6].addEventListener('click', result);
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
for (var i = 0; i < 22; i++) {
  (function() {
    var j = i;
    city[j].addEventListener('click', function() { set_city(j); });
  }());
}
document.addEventListener("click", function(event){
  if (show_option === false) return;
  if (event.target != ans[0][0][0]) {
    select_ctr.classList.remove('show-option');
    show_option = false;
  }
});

window.onload = function() {
  setTimeout(adjust_height, 50);
};

function adjust_height() {
  slider_ctr.style.height = slider[0].offsetHeight + 'px';
};

var show_option = false;
function option() {
  if (show_option) {
    select_ctr.classList.remove('show-option');
    show_option = false;
  }
  else {
    select_ctr.classList.add('show-option');
    show_option = true;
  }
}

function example() {
  if (this.value !== 'example') return;
  var example_ans = [
    [['宜蘭縣'], ['宜蘭市'], ['30'], ['0', '1', '0'], ['4'],
      ['1', 'e1', '1', 'e1'], ['0', '1', '1', '1']],
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
        else if (ans[i][j][k].type === 'submit') {
          ans[i][j][k].value = val;
          ans[i][j][k].innerHTML = val;
          ans[i][j][k].style.color = 'black';
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

function set_city(i) {
  if (show_option === false) return;
  ans[0][0][0].value = city[i].innerHTML;
  ans[0][0][0].innerHTML = city[i].innerHTML;
  ans[0][0][0].style.color = 'black';
}

function shortansA(element, i, j, k) {
  if (element.checked) {
    ans[i][j][k].disabled = false;
    ans[i][j][k].value = '';
    ans[i][j][k].focus();
  }
  else {
    ans[i][j][k].disabled = true;
    ans[i][j][k].value = '0';
  }
}

function shortansB(element, i, j) {
  var group_num = ans[i][j].length;
  if (element.checked) {
    for (var k = 1; k < group_num; k++) {
      ans[i][j][k].disabled = false;
    }
    ans[i][j][1].value = '';
    ans[i][j][1].focus();
  }
  else {
    for (var k = 2; k < group_num; k++) {
      ans[i][j][k].disabled = true;
      ans[i][j][k].checked = false;
    }
    ans[i][j][1].disabled = true;
    ans[i][j][1].value = '0';
  }
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
  slider[current].disabled = true;
  slider[next].disabled = false;
}

function result() {
  reset_page();
  calculation();
  if (isNaN(total)) return;
  give_suggestion();
  setTimeout(animate_score, 700);
  setTimeout(animate_score_bar, 700);
  setTimeout(animate_types, 2600);
  setTimeout(animate_suggestion, 3500);
}

function reset_page() {
  score.innerHTML = 0;
  score_bar.style.width = '100%';
  score_bar.classList.remove('show-score-bar');
  types.classList.remove('show-types');
  suggestion_ctr.innerHTML = '';
}

function calculation() {
  single_grade = [];
  section_grade = [];
  total = 0.0;
  for (var i = 0; i < 7; i++) {
    section_grade.push(0);
    single_grade.push([]);
    var question_num = ans[i].length;
    for (var j = 0; j < question_num; j++) {
      single_grade[i].push(0);
      var answer_num = ans[i][j].length;
      for (var k = 0; k < answer_num; k++) {
        if (weight[i][j][k] === 0) continue;
        if (ans[i][j][k].type === 'text') {
          single_grade[i][j] += parseInt(ans[i][j][k].value) * weight[i][j][k];
        }
        else {
          if (ans[i][j][k].checked) {
            single_grade[i][j] += weight[i][j][k];
          }
        }
      }
      section_grade[i] += single_grade[i][j];
    }
    total += section_grade[i];
  }
  switch(parseInt(ans[0][4][0].value)) {
    case 1: total *= 2; break;
    case 2: total *= 1.7; break;
    case 3: total *= 1.3; break;
    case 4: total *= 1; break;
    default: total *= 0.8;
  }
  total = Math.round(total);
}

function give_suggestion() {
  if (total < 31) return;
  var summer;
  var month = ans[1][1][0].value.charAt(5);
  if (month >= 6 && month <= 8) summer = 0;
  else summer = 1;
  output = [];
  for (var i = 0; i < 7; i++) {
    if (section_grade[i] <= average[summer][i]) continue;
    var question_num = ans[i].length;
    for (var j = 0; j < question_num; j++) {
      var val = parseInt(judge[i][j].substr(1));
      if (judge[i][j].charAt(0) === 'g' && single_grade[i][j] > val) {
        output.push(suggestion[i][j]);
      }
      else if (judge[i][j].charAt(0) === 'l' && single_grade[i][j] < val) {
        output.push(suggestion[i][j]);
      }
    }
  }
  var output_num = output.length;
  for (var i = 0; i < output_num; i++ ) {
    var node = document.createElement('H5');
    var textnode = document.createTextNode(output[i]);
    node.appendChild(textnode);
    suggestion_ctr.appendChild(node);
  }
}

function animate_score() {
  var start = 0;
  var end = total;
  var duration = 1500;
  var range = end - start;
  var current = start;
  var step_time = Math.floor(duration / range);
  var timer = setInterval(function() {
    score.innerHTML = current;
    if (current >= end) {
      clearInterval(timer);
    }
    current += 1;
  }, step_time);
}

function animate_score_bar() {
  var proportion;
  if (total > 80) proportion = 0;
  else if (total < 0) proportion = 100;
  else {
    proportion = 100 - (total / 80.0 * 100);
  }
  score_bar.classList.add('show-score-bar');
  score_bar.style.width = proportion + '%';
}

function animate_types() {
  if (total < 31) types.innerHTML = grade_type[0];
  else if (total < 51) types.innerHTML = grade_type[1];
  else types.innerHTML = grade_type[2];
  types.classList.add('show-types');
}

var output_object;
function animate_suggestion() {
  output_object = document.getElementsByTagName('H5');
  var output_num = output_object.length;
  for (var i = 0; i < output_num; i++) {
    setTimeout(show_text, i * 200, i);
  }
}

function show_text(i) {
  output_object[i].classList.add('show-text');
}
