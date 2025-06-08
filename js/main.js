document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.timeline-item');
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    {
      threshold: 0.2
    }
  );
  items.forEach(item => observer.observe(item));
}); 