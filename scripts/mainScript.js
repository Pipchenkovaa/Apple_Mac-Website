(function () {
    let ProgaImg = document.querySelector('.proga');
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
        if (entry.isIntersecting) {
          entry.target.classList.add('proga-animation');
        }
      });
    });
    observer.observe(ProgaImg);
})();