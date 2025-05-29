"use strict";

{
  const ham = document.querySelector('#js-hamburger');
  const nav = document.querySelector('#js-nav');

  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
  });
}

{
  const ham = document.querySelector('#js-hamburger');
  const Ul = document.getElementById('js-nav');
  const currentActive = document.querySelectorAll('#menu');
  currentActive.forEach(entry => {
    entry.addEventListener('click', () => {
      if (Ul.classList.contains('active') == true) {
        Ul.classList.remove('active');
        ham.classList.remove('active');
      } return;
    });
  });
}


