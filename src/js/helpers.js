document.addEventListener('DOMContentLoaded', () => {
   const el = document.querySelectorAll('[data-toggler]');

   el.forEach((item) => {
       initToggler(item)
   })
});

function initToggler(el) {
    const newClass = el.getAttribute('data-toggler');

    el.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.currentTarget === el && !el.classList.contains(newClass)) {
            el.classList.add(newClass);
        } else {
            el.classList.remove(newClass);
        }
    });
}