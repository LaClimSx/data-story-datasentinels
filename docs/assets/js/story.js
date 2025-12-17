(function () {
  const progress = document.getElementById("topProgress");
  const navLinks = Array.from(document.querySelectorAll(".nav a[data-target]"));
  const railSlot = document.getElementById("railSlot");
  const railCaption = document.getElementById("railCaption");

  function onScroll() {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    if (progress) progress.style.width = `${Math.max(0, Math.min(100, scrolled))}%`;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Active section highlighting + figure swapping
  const sections = Array.from(document.querySelectorAll("[data-figure]"));

  function setActive(targetId) {
    navLinks.forEach(a => a.classList.toggle("active", a.dataset.target === targetId));
  }

  function swapFigure(section) {
    const figureId = section.dataset.figure;
    const caption = section.dataset.caption || "";
    const fig = document.getElementById(figureId);
    if (!fig || !railSlot) return;

    // Clone so we can safely move it into the rail without removing it from the flow
    const clone = fig.cloneNode(true);
    // Ensure any ids inside don't collide
    clone.removeAttribute("id");

    railSlot.innerHTML = "";
    railSlot.appendChild(clone);
    if (railCaption) railCaption.textContent = caption;
  }

  const obs = new IntersectionObserver((entries) => {
    // pick the most visible intersecting section
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const sec = visible.target;
    setActive(sec.id);
    swapFigure(sec);
  }, { root: null, threshold: [0.15, 0.3, 0.5, 0.7] });

  sections.forEach(s => obs.observe(s));

  // Nav clicks
  navLinks.forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.dataset.target;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
