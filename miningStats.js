var burger = document.getElementById('burger');
document.getElementById('burger').addEventListener('click', function (event) {
  event.preventDefault();

  if (burger.classList.contains('is-active')) {
    document.getElementById('burger').classList.remove('is-active');
    document.getElementById('navMenu').classList.remove('is-active');
  } else {
    document.getElementById('burger').classList.add('is-active');
    document.getElementById('navMenu').classList.add('is-active');
  }
});

window.addEventListener('click', function (event) {
  if (event.target != burger) {
    document.getElementById('burger').classList.remove('is-active');
    document.getElementById('navMenu').classList.remove('is-active');
  }
});
