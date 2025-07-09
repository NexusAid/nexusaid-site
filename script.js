document.addEventListener("DOMContentLoaded", () => {
  // Cookie Consent Banner
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    banner.style.display = "flex";
  } else {
    loadAnalytics(); // Load if previously accepted
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
    loadAnalytics();
  });

  function loadAnalytics() {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-N4Q42BPE0G";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-N4Q42BPE0G"); // Replace with your GA ID
    };
  }

  // Smooth scroll for anchor links
  const links = document.querySelectorAll("a[href^='#']");
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Contact form validation
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = form.querySelector("input[name='name']").value.trim();
      const email = form.querySelector("input[name='email']").value.trim();
      const message = form.querySelector("textarea[name='message']").value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill out all fields before submitting.");
      }
    });
  }

  console.log("NexusAid Technologies site loaded");
});
