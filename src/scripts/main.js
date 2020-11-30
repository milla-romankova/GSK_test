'use strict';

const list = document.querySelector('.questions__list');

list.addEventListener('click', event => {
  if (event.target.tagName !== 'H3') {
    return;
  }

  const hide = event.target.children[0];
  const show = event.target.children[1];
  const answer = event.target.nextElementSibling;

  show.hidden = !show.hidden;
  hide.hidden = !hide.hidden;

  /* eslint-disable */
  $(answer).toggle(300);
});

