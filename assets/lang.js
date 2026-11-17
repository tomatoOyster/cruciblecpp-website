(function () {
  var sectionByPage = {
    'features.html': '#features',
    'docs.html': '#docs',
    'download.html': '#download',
    'changelog.html': '#changelog',
    'license.html': '#license',
    'about.html': '#about'
  };

  document.querySelectorAll('.lang-picker').forEach(function (picker) {
    var button = picker.querySelector('.lang-button');
    var list = picker.querySelector('.lang-options');
    var links = Array.prototype.slice.call(list.querySelectorAll('a'));
    if (!button || !list) return;

    function close() {
      list.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    }
    function open() {
      list.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    }
    function go(target) {
      var page = window.location.pathname.split('/').pop();
      var section = sectionByPage[page] || '';
      if (target !== '/') {
        window.location.href = target + section;
      } else {
        window.location.href = section ? '/' + page : '/';
      }
    }

    button.addEventListener('click', function (event) {
      event.stopPropagation();
      if (list.classList.contains('open')) close(); else open();
    });

    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        if (link.hasAttribute('data-more')) {
          event.preventDefault();
          window.location.href = link.href;
          return;
        }
        event.preventDefault();
        go(link.getAttribute('data-locale') || '/');
      });
    });

    document.addEventListener('click', function (event) {
      if (!picker.contains(event.target)) close();
    });

    picker.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        close();
        button.focus();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (!list.classList.contains('open')) open();
        var target = event.key === 'ArrowDown' ? links[0] : links[links.length - 1];
        if (target) target.focus();
      }
    });

    list.addEventListener('keydown', function (event) {
      var index = links.indexOf(document.activeElement);
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        button.focus();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        links[Math.min(index + 1, links.length - 1)].focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        links[Math.max(index - 1, 0)].focus();
      }
    });
  });
})();
