const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.fade').forEach(el => observer.observe(el));

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent('Contacto web - ' + name);
    const body = encodeURIComponent('Nombre: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:REPLACE_WITH_EMAIL?subject=' + subject + '&body=' + body;
  });
}
