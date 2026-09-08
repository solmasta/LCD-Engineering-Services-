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
  // No backend or business email is set up yet, so this opens a
  // pre-filled text message to the business phone number as a fallback.
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
      var unitsField = form.querySelector("#units");
      var units = unitsField ? unitsField.value.trim() : "";
      var service = form.querySelector("#service").value;
      var message = form.querySelector("#message").value.trim();

      var body = [
        "Name: " + name,
        "Phone: " + phone,
        "Email: " + (email || "Not provided"),
        "Units/Properties: " + (units || "Not specified"),
        "Service needed: " + (service || "Not specified"),
        "",
        message,
      ].join("\n");

      var sms = "sms:+13125159931?body=" + encodeURIComponent(body);

      window.location.href = sms;

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
