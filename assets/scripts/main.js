const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const shadow = document.querySelector('.shadow');

header.classList.add('fade-in');
hamburger.classList.add('fade-in');
header.classList.add('transparent');

let prevScrollPos = window.pageYOffset;
let isHamburgerVisible = true;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.top = '0';
    header.style.opacity = '1';

    if (!isHamburgerVisible) {
      hamburger.style.opacity = '1';
      isHamburgerVisible = true;
    }
  } else {
    header.style.top = `-${header.offsetHeight}px`;
    header.style.opacity = '0';

    if (isHamburgerVisible && !hamburger.classList.contains('active')) {
      hamburger.style.opacity = '0';
      isHamburgerVisible = false;
    }
  }

  prevScrollPos = currentScrollPos;

  if (mobileNav.classList.contains('active')) {
    mobileNav.classList.remove('active');
    hamburger.classList.remove('active');
  }

  if (shadow.classList.contains('active')) {
    shadow.classList.remove('active');
  }
});

let isActive = false;

function toggle() {
  if (isActive) {
    document.querySelector('.hamburger').className = 'hamburger';
    document.querySelector('.shadow').className = 'shadow';
    document.querySelector('.mobile-nav').className = 'mobile-nav';
    isActive = false;
  } else {
    document.querySelector('.hamburger').className = 'hamburger active';
    document.querySelector('.shadow').className = 'shadow active';
    document.querySelector('.mobile-nav').className = 'mobile-nav active';
    isActive = true;
  }
}

// Footer Year Update

function updateFooterYear() {
  const currentYear = new Date().getFullYear();
  const footerYearElement = document.getElementById('year');
  footerYearElement.textContent = currentYear;
}

updateFooterYear();

// Intersection Observer

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (section) {
    if (section.isIntersecting) {
      section.target.className = 'active';
    }
  });
}, { threshold: 0.8 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Optimization

function performTask(callback) {
  setTimeout(callback, 2000);
}

function performTaskAsync(callback) {
  return new Promise((resolve, reject) => {
    performTask(() => {
      resolve();
    });
  });
}

function optimizeLatency() {
  console.log(":LATENCY OPT");

  performTaskAsync()
    .then(() => {
      console.log("PROCESS:OPT0 STATUS:pass");

      return performTaskAsync();
    })
    .then(() => {
      console.log("PROCESS:OPT01 STATUS:pass");

      return performTaskAsync();
    })
    .then(() => {
      console.log("PROCESS:OPT02 STATUS:pass");
    })
    .catch((error) => {
      console.error("PROCESS:OPT::STATUS:", error);
    });
}

optimizeLatency();

// Initial

window.addEventListener('load', function() {
  const initial = document.querySelector('.initial');
  const mark = initial.querySelector('svg');


  mark.style.opacity = '0';
  mark.style.transition = 'opacity 0.5s';
  setTimeout(function() {
    mark.style.opacity = '1';
  }, 100);

  setTimeout(function() {
    initial.style.opacity = '0';
    initial.style.transition = 'opacity 0.5s';
    setTimeout(function() {
      initial.style.display = 'none';
    }, 500);
  }, 2000);
});







