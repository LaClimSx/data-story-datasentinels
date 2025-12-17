(function(){
  const links = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
  const targets = links
    .map(a => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);

  function setActive(id){
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
  }

  const obs = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    setActive(visible.target.id);
  }, { threshold: [0.25, 0.5, 0.75] });

  targets.forEach(t => obs.observe(t));
})();
