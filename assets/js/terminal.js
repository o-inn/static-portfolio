(function() {
  var lines = [
    { tag: 'INFO', cls: 'info', text: 'career_pivot.service — starting transition: support/web → networking & security' },
    { tag: 'OK', cls: 'ok', text: 'homelab.stack up — wazuh, suricata, grafana online' },
    { tag: 'WARN', cls: 'warn', text: 'disk usage 98% — opensearch degraded' },
    { tag: 'OK', cls: 'ok', text: 'incident resolved — storage reclaimed, retention rules fixed' },
    { tag: 'INFO', cls: 'info', text: 'cert_progress: ccna [in progress] → security+ [queued]' },
    { tag: 'INFO', cls: 'info', text: 'status: applying for technical support & networking roles' }
  ];

  var body = document.getElementById('termBody');
  if (!body) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function renderStatic() {
    body.innerHTML = lines.map(function(line) {
      return '<p class="term-line"><span class="tag ' + line.cls + '">' + line.tag + '</span>' + line.text + '</p>';
    }).join('') + '<span class="cursor"></span>';
  }

  if (reduceMotion) {
    renderStatic();
    return;
  }

  var index = 0;
  function typeNext() {
    if (index >= lines.length) {
      var cursor = document.createElement('span');
      cursor.className = 'cursor';
      body.appendChild(cursor);
      return;
    }

    var line = lines[index];
    var paragraph = document.createElement('p');
    paragraph.className = 'term-line';

    var tag = document.createElement('span');
    tag.className = 'tag ' + line.cls;
    tag.textContent = line.tag;
    paragraph.appendChild(tag);

    var textNode = document.createTextNode('');
    paragraph.appendChild(textNode);
    body.appendChild(paragraph);

    var chars = line.text.split('');
    var charIndex = 0;
    var typer = setInterval(function() {
      textNode.textContent += chars[charIndex];
      charIndex++;
      if (charIndex >= chars.length) {
        clearInterval(typer);
        index++;
        setTimeout(typeNext, 220);
      }
    }, 14);
  }

  typeNext();
})();
