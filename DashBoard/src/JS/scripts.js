function sideBar() {
  const aside = document.querySelector('aside');
  aside.classList.toggle('open');
}

function closeSidebar() {
  document.querySelector('aside').classList.remove('open');
}

// Carrossel
const container = document.querySelector(".cards-group");
const btnGo = document.querySelector(".btn-go");
const btnBack = document.querySelector(".btn-back");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  container.classList.add("active");
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
});

container.addEventListener("mouseup", () => {
  isDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1.5;
  container.scrollLeft = scrollLeft - walk;
});

// ====== ARRASTE TOUCH (CELULAR) ======
container.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  scrollLeft = container.scrollLeft;
});
container.addEventListener("touchmove", (e) => {
  const x = e.touches[0].clientX;
  const walk = (x - startX) * 1.5;
  container.scrollLeft = scrollLeft - walk;
});

// ====== BOTÕES AVANÇAR / VOLTAR ======
const cardWidth = 170;
const jump = cardWidth * 2;

btnGo.onclick = () => container.scrollLeft += jump;
btnBack.onclick = () => container.scrollLeft -= jump;


// Light mode
const root = document.documentElement;

let toggle = false;

function mudarCor() {
  if (!toggle) {
    root.style.setProperty("--color-base-background", "#ebebeb"); // nova
    root.style.setProperty("--color-primary", "#e0e0e0ff"); // nova
    root.style.setProperty("--color-text-light", "#071a26"); // nova       
  } else {
    root.style.setProperty("--color-primary", "#071a26"); // volta ao normal
    root.style.setProperty("--color-base-background", "#1b2632"); // nova
    root.style.setProperty("--color-text-light", "#ffffff"); // nova  
  }
  toggle = !toggle;
}

document.querySelector("#btnColor").addEventListener("click", mudarCor);
// document.documentElement.style.setProperty('--color-primary', '#4b515891');

