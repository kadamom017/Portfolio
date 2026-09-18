const PROJECTS = [
  {
    title: "Scooby",
    desc: "A pet care and veterinary booking site with a warm, friendly landing page.",
    tags: ["Landing Page", "Booking"],
    url: "https://react-js-silk-two.vercel.app/",
    image: "images/scooby.png"
  },
  {
    title: "Comet",
    desc: "A sneaker store with a searchable, filterable product grid and cart functionality.",
    tags: ["E-commerce", "Shop"],
    url: "https://java-typescript-ewq7ssdsw-kadamom017.vercel.app/", 
    image: "images/comet.png"
  },
  {
    title: "Glowy",
    desc: "A skincare e-commerce site with a bold hero section and a shop built for browsing by category.",
    tags: ["E-commerce", "UI Design"],
    url: "https://your-glowy-project.vercel.app", 
    image: "images/glowy.png"
  },
  {
    title: "Tastebite",
    desc: "A recipe and food blog site with a clean editorial layout for individual recipes.",
    tags: ["Blog", "Food"],
    url: "https://html-css-ydxr-k1w0iwsr5-kadamom017.vercel.app/", 
    image: "images/tastebite.png"
  }
];

function initials(title) {
  return title
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderProjects() {
  const list = document.getElementById("workList");
  if (!list) return;

  list.innerHTML = PROJECTS.map(p => `
    <a class="project-row" href="${p.url}" target="_blank" rel="noopener noreferrer">
      <div class="project-media">
        ${
          p.image
            ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy">`
            : `<span class="mono">${initials(p.title)}</span>`
        }
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span>${t}</span>`).join("")}
        </div>
        <span class="project-link">View live site</span>
      </div>
    </a>
  `).join("");
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNav();
  setYear();
});
