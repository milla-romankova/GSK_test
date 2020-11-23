'use strict';
/* eslint-disable */

$('.question1').click(function() {
  $('.answer1').toggle();
});

$('.question2').click(function() {
  $('.answer2').toggle();
});

$('.question3').click(function() {
  $('.answer3').toggle();
});

const question1 = document.querySelector('.question1');

question1.addEventListener('click', function() {
  if (!question1.classList.toString().includes('question-open')) {
    $('.question1').addClass('question-open').removeClass('question-hidden');
    $('.question1 .show').hide();
    $('.question1 .hide').show();
  } else {
    $('.question1').addClass('question-hidden').removeClass('question-open');
    $('.question1 .hide').hide();
    $('.question1 .show').show();
  }
});

const question2 = document.querySelector('.question2');

question2.addEventListener('click', function() {
  if (!question2.classList.toString().includes('question-open')) {
    $('.question2').addClass('question-open').removeClass('question-hidden');
    $('.question2 .show').hide();
    $('.question2 .hide').show();
  } else {
    $('.question2').addClass('question-hidden').removeClass('question-open');
    $('.question2 .hide').hide();
    $('.question2 .show').show();
  }
});

const question3 = document.querySelector('.question3');

question3.addEventListener('click', function() {
  if (!question3.classList.toString().includes('question-open')) {
    $('.question3').addClass('question-open').removeClass('question-hidden');
    $('.question3 .show').hide();
    $('.question3 .hide').show();
  } else {
    $('.question3').addClass('question-hidden').removeClass('question-open');
    $('.question3 .hide').hide();
    $('.question3 .show').show();
  }
});
