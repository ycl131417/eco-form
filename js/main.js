//containers
var progress = document.getElementsByClassName('progress')[0];
var container = document.getElementsByClassName('container')[0];
var slider_ctr = document.getElementsByClassName('slider-ctr')[0];

//slider-1
var ans_1_1 = document.getElementById('ans-1-1');
var ans_1_2 = document.getElementById('ans-1-2');
var ans_1_3 = document.getElementById('ans-1-3');
var ans_1_4 = document.getElementById('ans-1-4');
var ans_1_5 = document.getElementById('ans-1-5');
var ans_1_6 = document.getElementById('ans-1-6');
var ans_1_7 = document.getElementById('ans-1-7');
var ans_1_8 = document.getElementById('ans-1-8');
var group_1_1_1 = document.getElementById('group-1-1-1');
var group_1_1_2 = document.getElementById('group-1-1-2');
var group_1_1_3 = document.getElementById('group-1-1-3');
var group_1_2_1 = document.getElementById('group-1-2-1');
var group_1_2_2 = document.getElementById('group-1-2-2');
var group_1_3_1 = document.getElementById('group-1-3-1');
var group_1_3_2 = document.getElementById('group-1-3-2');
var group_1_3_3 = document.getElementById('group-1-3-3');
var group_1_3_4 = document.getElementById('group-1-3-4');
var next_1 = document.getElementById('next-1');

//slider-2
var ans_2_1 = document.getElementById('ans-2-1');
var ans_2_2 = document.getElementById('ans-2-2');
var ans_2_3 = document.getElementById('ans-2-3');
var ans_2_4 = document.getElementById('ans-2-4');
var ans_2_5 = document.getElementById('ans-2-5');
var ans_2_6 = document.getElementById('ans-2-6');
var ans_2_7 = document.getElementById('ans-2-7');
var group_2_1_1 = document.getElementById('group-2-1-1');
var group_2_1_2 = document.getElementById('group-2-1-2');
var group_2_2_1 = document.getElementById('group-2-2-1');
var group_2_2_2 = document.getElementById('group-2-2-2');
var prev_2 = document.getElementById('prev-2');
var next_2 = document.getElementById('next-2');

//slider-3
var group_3_1_1 = document.getElementById('group-3-1-1');
var group_3_1_2 = document.getElementById('group-3-1-2');
var group_3_1_3 = document.getElementById('group-3-1-3');
var group_3_2_1 = document.getElementById('group-3-2-1');
var group_3_2_2 = document.getElementById('group-3-2-2');
var group_3_3_1 = document.getElementById('group-3-3-1');
var group_3_3_2 = document.getElementById('group-3-3-2');
var group_3_4_1 = document.getElementById('group-3-4-1');
var group_3_4_2 = document.getElementById('group-3-4-2');
var group_3_4_3 = document.getElementById('group-3-4-3');
var group_3_4_4 = document.getElementById('group-3-4-4');
var group_3_5_1 = document.getElementById('group-3-5-1');
var group_3_5_2 = document.getElementById('group-3-5-2');
var group_3_5_3 = document.getElementById('group-3-5-3');
var group_3_5_4 = document.getElementById('group-3-5-4');
var prev_3 = document.getElementById('prev-3');
var next_3 = document.getElementById('next-3');

//slider-4
var ans_4_1 = document.getElementById('ans-4-1');
var ans_4_2 = document.getElementById('ans-4-2');
var ans_4_3 = document.getElementById('ans-4-3');
var ans_4_4 = document.getElementById('ans-4-4');
var ans_4_5 = document.getElementById('ans-4-5');
var group_4_1_1 = document.getElementById('group-4-1-1');
var group_4_1_2 = document.getElementById('group-4-1-2');
var group_4_1_3 = document.getElementById('group-4-1-3');
var group_4_2_1 = document.getElementById('group-4-2-1');
var group_4_2_2 = document.getElementById('group-4-2-2');
var group_4_2_3 = document.getElementById('group-4-2-3');
var group_4_2_4 = document.getElementById('group-4-2-4');
var group_4_2_5 = document.getElementById('group-4-2-5');
var group_4_3_1 = document.getElementById('group-4-3-1');
var group_4_3_2 = document.getElementById('group-4-3-2');
var group_4_3_3 = document.getElementById('group-4-3-3');
var group_4_3_4 = document.getElementById('group-4-3-4');
var group_4_3_5 = document.getElementById('group-4-3-5');
var group_4_3_6 = document.getElementById('group-4-3-6');
var group_4_4_1 = document.getElementById('group-4-4-1');
var group_4_4_2 = document.getElementById('group-4-4-2');
var group_4_5_1 = document.getElementById('group-4-5-1');
var group_4_5_2 = document.getElementById('group-4-5-2');
var group_4_5_3 = document.getElementById('group-4-5-3');
var group_4_6_1 = document.getElementById('group-4-6-1');
var group_4_6_2 = document.getElementById('group-4-6-2');
var group_4_6_3 = document.getElementById('group-4-6-3');
var group_4_6_4 = document.getElementById('group-4-6-4');
var group_4_7_1 = document.getElementById('group-4-7-1');
var group_4_7_2 = document.getElementById('group-4-7-2');
var group_4_8_1 = document.getElementById('group-4-8-1');
var prev_4 = document.getElementById('prev-4');
var next_4 = document.getElementById('next-4');

//slider-5
var ans_5_1 = document.getElementById('ans-5-1');
var ans_5_2 = document.getElementById('ans-5-2');
var group_5_1_1 = document.getElementById('group-5-1-1');
var group_5_1_2 = document.getElementById('group-5-1-2');
var group_5_1_3 = document.getElementById('group-5-1-3');
var group_5_1_4 = document.getElementById('group-5-1-4');
var group_5_1_5 = document.getElementById('group-5-1-5');
var group_5_1_6 = document.getElementById('group-5-1-6');
var group_5_2_1 = document.getElementById('group-5-2-1');
var group_5_2_2 = document.getElementById('group-5-2-2');
var group_5_2_3 = document.getElementById('group-5-2-3');
var group_5_2_4 = document.getElementById('group-5-2-4');
var group_5_2_5 = document.getElementById('group-5-2-5');
var group_5_3_1 = document.getElementById('group-5-3-1');
var group_5_3_2 = document.getElementById('group-5-3-2');
var group_5_3_3 = document.getElementById('group-5-3-3');
var group_5_3_4 = document.getElementById('group-5-3-4');
var group_5_3_5 = document.getElementById('group-5-3-5');
var prev_5 = document.getElementById('prev-5');
var next_5 = document.getElementById('next-5');

//slider-6
var ans_6_1 = document.getElementById('ans-6-1');
var ans_6_2 = document.getElementById('ans-6-2');
var group_6_1_1 = document.getElementById('group-6-1-1');
var group_6_1_2 = document.getElementById('group-6-1-2');
var group_6_1_3 = document.getElementById('group-6-1-3');
var group_6_2_1 = document.getElementById('group-6-2-1');
var group_6_2_2 = document.getElementById('group-6-2-2');
var group_6_2_3 = document.getElementById('group-6-2-3');
var group_6_2_4 = document.getElementById('group-6-2-4');
var group_6_3_1 = document.getElementById('group-6-3-1');
var group_6_4_1 = document.getElementById('group-6-4-1');
var prev_6 = document.getElementById('prev-6');
var next_6 = document.getElementById('next-6');

//slider-7
var ans_7_1 = document.getElementById('ans-7-1');
var ans_7_2 = document.getElementById('ans-7-2');
var group_7_1_1 = document.getElementById('group-7-1-1');
var group_7_1_2 = document.getElementById('group-7-1-2');
var group_7_1_3 = document.getElementById('group-7-1-3');
var group_7_1_4 = document.getElementById('group-7-1-4');
var group_7_2_1 = document.getElementById('group-7-2-1');
var group_7_2_2 = document.getElementById('group-7-2-2');
var group_7_2_3 = document.getElementById('group-7-2-3');
var group_7_3_1 = document.getElementById('group-7-3-1');
var prev_7 = document.getElementById('prev-7');
var next_7 = document.getElementById('next-7');

//slider-8
var prev_8 = document.getElementById('prev-8');

//add event listener
ans_1_1.addEventListener('focusout', example);
group_1_2_1.addEventListener('change', function() { shortansA(this, ans_1_5); });
group_1_2_2.addEventListener('change', function() { shortansA(this, ans_1_6); });
ans_1_7.addEventListener('focusout', compass);
next_1.addEventListener('click', function() { swap('1', '2'); });
prev_2.addEventListener('click', function() { swap('2', '1'); });
next_2.addEventListener('click', function() { swap('2', '3'); });
prev_3.addEventListener('click', function() { swap('3', '2'); });
next_3.addEventListener('click', function() { swap('3', '4'); });
group_4_3_1.addEventListener('change', function() { shortansB(this, ans_4_1, 'group-4-3', 5); });
group_4_4_1.addEventListener('change', function() { shortansB(this, ans_4_2, 'group-4-4', 1); });
group_4_6_1.addEventListener('change', function() { shortansB(this, ans_4_3, 'group-4-6', 3); });
group_4_7_1.addEventListener('change', function() { shortansB(this, ans_4_4, 'group-4-7', 1); });
group_4_8_1.addEventListener('change', function() { shortansA(this, ans_4_5); });
prev_4.addEventListener('click', function() { swap('4', '3'); });
next_4.addEventListener('click', function() { swap('4', '5'); });
group_5_2_1.addEventListener('change', function() { shortansB(this, ans_5_1, 'group-5-2', 4); });
group_5_3_5.addEventListener('change', function() { shortansA(this, ans_5_2); });
prev_5.addEventListener('click', function() { swap('5', '4'); });
next_5.addEventListener('click', function() { swap('5', '6'); });
group_6_3_1.addEventListener('change', function() { shortansA(this, ans_6_1); });
group_6_4_1.addEventListener('change', function() { shortansA(this, ans_6_2); });
prev_6.addEventListener('click', function() { swap('6', '5'); });
next_6.addEventListener('click', function() { swap('6', '7'); });
group_7_1_1.addEventListener('change', function() { shortansB(this, ans_7_1, 'group-7-1', 3); });
group_7_3_1.addEventListener('change', function() { shortansA(this, ans_7_2); });
prev_7.addEventListener('click', function() { swap('7', '6'); });
next_7.addEventListener('click', function() { swap('7', '8'); });
prev_8.addEventListener('click', function() { swap('8', '7'); });

window.onload = function() {
  var slider_ctr = document.getElementsByClassName('slider-ctr')[0];
  var slider_1 = document.getElementsByClassName('slider-1')[0];
  slider_ctr.style.height = slider_1.offsetHeight + 'px';
};

function example() {
  if (ans_1_1.value !== 'example') return;

  //slider-1
  ans_1_1.value = '李小明';
  ans_1_2.value = '宜蘭縣宜蘭市';
  ans_1_3.value = '30';
  ans_1_4.value = '4';
  ans_1_5.disabled = false;
  ans_1_5.value = '1';
  ans_1_6.disabled = false;
  ans_1_6.value = '1';
  ans_1_7.value = '西南';
  ans_1_8.value = '東北';
  group_1_1_2.checked = true;
  group_1_2_1.checked = true;
  group_1_2_2.checked = true;
  group_1_3_2.checked = true;
  group_1_3_3.checked = true;
  group_1_3_4.checked = true;

  //slider-2
  ans_2_1.value = '10-96-2300-00-1';
  ans_2_2.value = '105.01.13';
  ans_2_3.value = '105.03.10';
  ans_2_4.value = '555';
  ans_2_5.value = '1469';
  ans_2_6.value = '9.57';
  ans_2_7.value = '303.6';
  group_2_1_1.checked = true;
  group_2_2_1.checked = true;

  //slider-3
  group_3_1_1.checked = true;
  group_3_2_2.checked = true;
  group_3_3_1.checked = true;
  group_3_4_1.checked = true;
  group_3_4_2.checked = true;
  group_3_4_4.checked = true;
  group_3_5_2.checked = true;

  //slider-4
  ans_4_1.disabled = false;
  ans_4_1.value = '4';
  ans_4_2.disabled = false;
  ans_4_2.value = '2';
  ans_4_3.disabled = false;
  ans_4_3.value = '2';
  ans_4_4.disabled = false;
  ans_4_4.value = '1';
  ans_4_5.disabled = false;
  ans_4_5.value = '3';
  group_4_1_1.checked = true;
  group_4_1_3.checked = true;
  group_4_2_1.checked = true;
  group_4_2_2.checked = true;
  group_4_3_1.checked = true;
  group_4_3_2.disabled = false;
  group_4_3_2.checked = true;
  group_4_3_3.disabled = false;
  group_4_3_4.disabled = false;
  group_4_3_4.checked = true;
  group_4_3_5.disabled = false;
  group_4_3_6.disabled = false;
  group_4_4_1.checked = true;
  group_4_4_2.disabled = false;
  group_4_5_1.checked = true;
  group_4_6_1.checked = true;
  group_4_6_2.disabled = false;
  group_4_6_2.checked = true;
  group_4_6_3.disabled = false;
  group_4_6_3.checked = true;
  group_4_6_4.disabled = false;
  group_4_6_4.checked = true;
  group_4_7_1.checked = true;
  group_4_7_2.disabled = false;
  group_4_7_2.checked = true;
  group_4_8_1.checked = true;

  //slider-5
  ans_5_1.disabled = false;
  ans_5_1.value = '1';
  ans_5_2.disabled = false;
  ans_5_2.value = '2';
  group_5_1_1.checked = true;
  group_5_1_5.checked = true;
  group_5_1_6.checked = true;
  group_5_2_1.checked = true;
  group_5_2_2.disabled = false;
  group_5_2_3.disabled = false;
  group_5_2_4.disabled = false;
  group_5_2_5.disabled = false;
  group_5_2_5.checked = true;
  group_5_3_1.checked = true;
  group_5_3_4.checked = true;
  group_5_3_5.checked = true;

  //slider-6
  ans_6_1.disabled = false;
  ans_6_1.value = '3';
  group_6_1_1.checked = true;
  group_6_1_2.checked = true;
  group_6_1_3.checked = true;
  group_6_2_2.checked = true;
  group_6_2_4.checked = true;
  group_6_3_1.checked = true;

  //slider-7
  ans_7_1.disabled = false;
  ans_7_1.value = '3';
  ans_7_2.disabled = false;
  ans_7_2.value = '3';
  group_7_1_1.checked = true;
  group_7_1_2.disabled = false;
  group_7_1_2.checked = true;
  group_7_1_3.disabled = false;
  group_7_1_4.disabled = false;
  group_7_1_4.checked = true;
  group_7_2_1.checked = true;
  group_7_2_3.checked = true;
  group_7_3_1.checked = true;
}

function shortansA(element, answer) {
  var ischecked = element.checked;
  if (ischecked) {
    answer.disabled = false;
    answer.placeholder = '您的回答';
    answer.focus();
  }
  else {
    answer.disabled = true;
    answer.placeholder = '0';
    answer.value = '';
  }
}

function shortansB(element, answer, group_id, group_num) {
  var ischecked = element.checked;
  if (ischecked) {
    answer.disabled = false;
    answer.placeholder = '您的回答';
    answer.focus();
    for (var i = 0; i < group_num; i++) {
      group_element_id = group_id + '-' + (i + 2);
      var group_element = document.getElementById(group_element_id);
      group_element.disabled = false;
    }
  }
  else {
    answer.disabled = true;
    answer.placeholder = '0';
    answer.value = '';
    for (var i = 0; i < group_num; i++) {
      group_element_id = group_id + '-' + (i + 2);
      var group_element = document.getElementById(group_element_id);
      group_element.checked = false;
      group_element.disabled = true;
    }
  }
}

function compass() {
  var position = ans_1_7.value;
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
  ans_1_8.value = result;
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

  var slider_next = document.getElementsByClassName('slider-' + next)[0];
  slider_ctr.style.height = slider_next.offsetHeight + 'px';
}
