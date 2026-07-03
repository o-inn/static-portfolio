(() => {
  const copyButtons = document.querySelectorAll('[data-copy]');

  const copyText = async (value) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  copyButtons.forEach((button) => {
    const defaultLabel = button.getAttribute('aria-label') || 'Copy';
    const status = button.querySelector('.sr-only');

    button.addEventListener('click', async () => {
      const value = button.getAttribute('data-copy');

      if (!value) {
        return;
      }

      try {
        await copyText(value);
        button.classList.add('is-copied');
        button.setAttribute('aria-label', 'Email address copied');
        if (status) {
          status.textContent = 'Email address copied';
        }
      } catch {
        button.setAttribute('aria-label', 'Copy failed');
        if (status) {
          status.textContent = 'Copy failed';
        }
      }

      window.setTimeout(() => {
        button.classList.remove('is-copied');
        button.setAttribute('aria-label', defaultLabel);
        if (status) {
          status.textContent = defaultLabel;
        }
      }, 1800);
    });
  });
})();
