// LCD Engineering Services — shared site behavior

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Mark current page in nav
  var here = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var linkPage = link.getAttribute("href");
    if (linkPage === here) {
      link.setAttribute("aria-current", "page");
    }
  });

  // Contact form — client-side validation + friendly confirmation.
  // No backend is wired up yet; this opens the visitor's email client
  // pre-filled with their message as a reliable fallback.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var name = form.querySelector("#name").value.trim();
      var email = form.querySelector("#email").value.trim();
      var phone = form.querySelector("#phone").value.trim();
      var service = form.querySelector("#service").value;
      var message = form.querySelector("#message").value.trim();

      var body = [
        "Name: " + name,
        "Email: " + email,
        "Phone: " + (phone || "Not provided"),
        "Service needed: " + (service || "Not specified"),
        "",
        message,
      ].join("\n");

      var mailto =
        "mailto:contact@lcdengineeringservices.com" +
        "?subject=" + encodeURIComponent("New inquiry from " + name) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;

      var success = document.getElementById("form-success");
      if (success) {
        success.classList.add("is-visible");
      }
      form.reset();
    });
  }

  // Simple FAQ accordion
  document.querySelectorAll(".faq-item[data-collapsible]").forEach(function (item) {
    var trigger = item.querySelector("h4");
    var body = item.querySelector("p");
    if (!trigger || !body) return;
    body.style.display = "none";
    trigger.style.cursor = "pointer";
    trigger.addEventListener("click", function () {
      body.style.display = body.style.display === "none" ? "block" : "none";
    });
  });
});
