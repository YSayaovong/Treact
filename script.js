const $ = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));

/* Mobile menu */
const menu = $("#mobile-menu");
const openBtn = $("#btn-menu");
const closeBtn = $("#btn-menu-close");
openBtn?.addEventListener("click", ()=> {
  menu?.classList.add("open");
  menu?.setAttribute("aria-hidden","false");
});
closeBtn?.addEventListener("click", ()=> {
  menu?.classList.remove("open");
  menu?.setAttribute("aria-hidden","true");
});
$("#year").textContent = new Date().getFullYear();

/* Smooth scroll for in-page links */
$$('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", e=>{
    const id = a.getAttribute("href");
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:"smooth", block:"start"});
      menu?.classList.remove("open");
    }
  });
});
