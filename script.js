// script.js

document.addEventListener("DOMContentLoaded", () => {
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

  // Basic client-side contact form validation
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
