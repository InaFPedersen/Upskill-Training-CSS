/* Set current year */
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// SMOOTH SCROLLING ANIMATION
//////////////////////////////////////////////////////////

const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // console.log(e);
    e.preventDefault();

    const href = link.getAttribute('href');
    // console.log(href);

    // Scroll back to the top
    if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      // console.log(href);
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({
        behavior: 'smooth',
      });
    }

    // Close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

///////////////////////////////////////////////////////////
// MAKE THE HEADER STICKY AFTER HERO
//////////////////////////////////////////////////////////
const sectionHeroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    // console.log(entry);
    if (!entry.isIntersecting) {
      document.body.classList.add('sticky');
    }

    if (entry.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
///////////////////////////////////////////////////////////
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/* 
LEARNING BASIC JAVASCRIPT!!!

console.log('Hello me!');

const myName = 'Nora Nordmann';
console.log('Hello ' + myName);

const h1 = document.querySelector('.heading-primary');
console.log(h1);

h1.addEventListener('click', () => {
  h1.textContent = myName;
  h1.style.backgroundColor = 'red';
  h1.style.padding = '5rem';
}); 
*/
