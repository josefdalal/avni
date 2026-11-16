/* רדיוס | הנפשות כניסה, גילוי ועלייה, תנועת פרלקסה ותפריט */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* רוחב אמיתי בלי פס הגלילה, כדי שהלוח של 1920 יתכווץ בדיוק */
  function setVW() { root.style.setProperty('--vw', root.clientWidth + 'px'); }
  setVW();
  window.addEventListener('resize', setVW);

  /* פתיחה: כותרת עליונה ואדוות */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { document.body.classList.add('is-loaded'); });
  });

  /* כניסה בגלילה */
  var items = document.querySelectorAll('.a');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.01 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* פרלקסה אנכית (כמו Motion Effects > Vertical Scroll ב Elementor) */
  var movers = Array.prototype.slice.call(document.querySelectorAll('[data-speed]'));
  if (!reduce && movers.length) {
    var ticking = false;
    function update() {
      var vh = window.innerHeight;
      movers.forEach(function (el) {
        var r = el.parentElement.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) return;
        var offset = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.speed);
        el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* תפריט */
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('menu-open', open);
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(function () { menu.classList.add('is-open'); });
    } else {
      menu.classList.remove('is-open');
      setTimeout(function () { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 400);
    }
  }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
})();
