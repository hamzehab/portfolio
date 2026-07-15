// Reveals an element with an animate.css class once it scrolls into view.
// Usage: v-scroll-animate="{ enter: 'fadeIn', speed: 'slow', rootMargin: '0px' }"
const observers = new WeakMap();

function mounted(el, binding) {
  const { enter = "fadeIn", speed = "", rootMargin = "0px" } =
    binding.value || {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        el.classList.toggle("animated", entry.isIntersecting);
        el.classList.toggle(enter, entry.isIntersecting);
        if (speed) el.classList.toggle(speed, entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(el);
      });
    },
    { rootMargin }
  );

  observer.observe(el);
  observers.set(el, observer);
}

function unmounted(el) {
  observers.get(el)?.disconnect();
  observers.delete(el);
}

export default { mounted, unmounted };
