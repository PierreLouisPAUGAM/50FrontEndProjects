const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const buttons = document.querySelectorAll('.btn');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  updateCircles();
  updateProgressBar();
  updatePrevButton();
}

function updateCircles() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
}

function updateProgressBar() {
  const actives = document.querySelectorAll('.circle.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
}

function updatePrevButton() {
  if (currentActive > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }
}
