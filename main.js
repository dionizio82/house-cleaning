// Sombra no header ao rolar. Só isso — o site não precisa de mais JS que isso.
(function () {
  var header = document.getElementById('siteHeader');
  if (!header) return;

  var ticking = false;
  function update() {
    header.classList.toggle('scrolled', window.scrollY > 8);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();
