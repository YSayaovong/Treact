/* Mobile menu */
function openMenu(){ document.body.classList.add("menu--open"); }
function closeMenu(){ document.body.classList.remove("menu--open"); }

/* (Optional) simple testimonial nav—only runs if multiple .testimonial slides exist */
const slides = document.querySelectorAll('.testimonial');
const prev = document.querySelector('.testi__prev');
const next = document.querySelector('.testi__next');
let idx = 0;
function show(i){ if(!slides.length) return; slides.forEach((s,n)=>s.style.display = n===i ? 'block' : 'none'); }
show(idx);
prev && prev.addEventListener('click', ()=>{ idx=(idx-1+slides.length)%slides.length; show(idx); });
next && next.addEventListener('click', ()=>{ idx=(idx+1)%slides.length; show(idx); });
