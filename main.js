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

{
  const target = document.querySelector('#target-icon');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-19');
      } else {
        target.classList.remove('active-19');
      }
    });
  });
  observer.observe(target);
}


{
  const target = document.querySelector('#target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active');
      } else {
        target.classList.remove('active');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#target-skill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-18');
      } else {
        target.classList.remove('active-18');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#service-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-1');
      } else {
        target.classList.remove('active-1');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#contaiers-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-2');
      } else {
        target.classList.remove('active-2');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#contaiers2-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-3');
      } else {
        target.classList.remove('active-3');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#service1-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-4');
      } else {
        target.classList.remove('active-4');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#services2-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-5');
      } else {
        target.classList.remove('active-5');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#services3-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-6');
      } else {
        target.classList.remove('active-6');
      }
    });
  });
  observer.observe(target);
}


{
  const target = document.querySelector('#flow-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-7');
      } else {
        target.classList.remove('active-7');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#flow2-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-8');
      } else {
        target.classList.remove('active-8');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#flow3-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-9');
      } else {
        target.classList.remove('active-9');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#flow4-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-10');
      } else {
        target.classList.remove('active-10');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#work-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-11');
      } else {
        target.classList.remove('active-11');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#screenshot1-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-12');
      } else {
        target.classList.remove('active-12');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#screenshot2-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-13');
      } else {
        target.classList.remove('active-13');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#produce-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-14');
      } else {
        target.classList.remove('active-14');
      }
    });
  });
  observer.observe(target);
}

{
const target = document.querySelector('#site-target');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      target.classList.add('active-15');
    } else {
      target.classList.remove('active-15');
    }
  });
});
observer.observe(target);
}

{
  const target = document.querySelector('#produce2-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-16');
      } else {
        target.classList.remove('active-16');
      }
    });
  });
  observer.observe(target);
}

{
  const target = document.querySelector('#site2-target');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active-17');
      } else {
        target.classList.remove('active-17');
      }
    });
  });
  observer.observe(target);
  }
  