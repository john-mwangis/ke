const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});

let selectedRating = 0;

const stars = document.querySelectorAll("#starRating i");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = star.getAttribute("data-value");

    stars.forEach((s) => s.classList.remove("active"));

    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add("active");
    }
  });
});

function sendReview() {
  const review = document.getElementById("reviewText").value;

  if (selectedRating === 0) {
    alert("Please select a rating");
    return;
  }

  const message = `Hi KingsWol, I rate my experience ${selectedRating} stars. Review: ${review}`;

  const whatsappURL = `https://wa.me/254798266588?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}

const map = L.map('map').setView([-0.1521, 37.3084], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Summits
L.marker([-0.1521, 37.3084]).addTo(map)
  .bindPopup("Batian - 5,199m");

L.marker([-0.1515, 37.3070]).addTo(map)
  .bindPopup("Nelion - 5,188m");

L.marker([-0.1500, 37.3050]).addTo(map)
  .bindPopup("Lenana - 4,985m");

   // Sirimon Route (example path)
const sirimonRoute = [
  [-0.062, 37.205],
  [-0.100, 37.250],
  [-0.130, 37.290],
  [-0.152, 37.308]
];

L.polyline(sirimonRoute, { color: "blue" })
  .addTo(map)
  .bindPopup("Sirimon Route");


// Chogoria Route
const chogoriaRoute = [
  [-0.200, 37.550],
  [-0.180, 37.480],
  [-0.160, 37.400],
  [-0.152, 37.308]
];

L.polyline(chogoriaRoute, { color: "green" })
  .addTo(map)
  .bindPopup("Chogoria Route");


// Naromoru Route
const naromoruRoute = [
  [-0.100, 37.150],
  [-0.120, 37.200],
  [-0.140, 37.250],
  [-0.152, 37.308]
];

L.polyline(naromoruRoute, { color: "red" })
  .addTo(map)
  .bindPopup("Naromoru Route");

  function zoomToRoute(route) {
  if (route === "sirimon") {
    map.setView([-0.10, 37.25], 11);
  }
  if (route === "chogoria") {
    map.setView([-0.18, 37.48], 11);
  }
  if (route === "naromoru") {
    map.setView([-0.12, 37.20], 11);
  }
}

function planTrek() {
  const route = document.getElementById("routeSelect").value;
  const days = document.getElementById("daysSelect").value;

  const message = `Hi KingsWol, I want to plan a ${days} trek via the ${route} route.`;

  const url = `https://wa.me/254798266588?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

const toggle = document.getElementById('darkModeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

const whatsappButton = document.getElementById('subscribeWhatsApp');
const smsButton = document.getElementById('subscribeSMS');
const userInput = document.getElementById('userNumber');

const businessNumber = '254798266588'; // Recipient number in Kenya format

// WhatsApp subscription
whatsappButton.addEventListener('click', () => {
  const number = userInput.value.trim();
  if (!number) return alert('Please enter your number.');

  // Pre-filled message
  const message = encodeURIComponent(`Hi, I want to subscribe to your newsletter. My number: ${number}`);
  const url = `https://wa.me/${businessNumber}?text=${message}`;
  window.open(url, '_blank'); // Opens WhatsApp web or app
});

// SMS subscription
smsButton.addEventListener('click', () => {
  const number = userInput.value.trim();
  if (!number) return alert('Please enter your number.');

  const message = encodeURIComponent(`Hi, I want to subscribe to your newsletter. My number: ${number}`);
  const smsUrl = `sms:${businessNumber}?body=${message}`;
  window.open(smsUrl); // Opens SMS app
});

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
});