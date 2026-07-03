(function() {
  var toggle = document.querySelector('.mobile-menu-toggle');
  var panel = document.getElementById('mobile-menu-panel');

  if (!toggle || !panel) return;

  function setOpen(isOpen) {
    toggle.setAttribute('aria-expanded', String(isOpen));
    panel.hidden = !isOpen;
    document.body.classList.toggle('mobile-nav-open', isOpen);
  }

  setOpen(false);

  toggle.addEventListener('click', function() {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  panel.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 640) {
      setOpen(false);
    }
  });
})();
